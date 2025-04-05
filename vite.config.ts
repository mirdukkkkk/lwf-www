import { defineConfig } from "vite";
import { resolve } from "path";
import preact from "@preact/preset-vite";
import alias from "@rollup/plugin-alias";

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        preact(),
        alias({
            entries: [
                {
                    // @components import
                    find: "@components",
                    replacement: resolve(import.meta.dirname, "/src/components")
                },
                {
                    // @pages import
                    find: "@pages",
                    replacement: resolve(import.meta.dirname, "/src/pages")
                },
                {
                    // @data import
                    find: "@data",
                    replacement: resolve(import.meta.dirname, "/src/data")
                }
            ]
        })
    ]
});
