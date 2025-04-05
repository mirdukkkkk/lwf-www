import { type ComponentProps, type FunctionalComponent } from "preact";
import { useEffect, useRef } from "preact/hooks";
import Prism, { type Grammar } from "prismjs";
import { json, lwfp, lwfb } from "@data";

type LanguageType = "json" | "lwfp" | "lwfb";

const Languages: { [key in LanguageType]: Grammar } = {
    json: json,
    lwfp: lwfp,
    lwfb: lwfb
};

type CodeBlockProps = Omit<ComponentProps<"code">, "key" | "ref"> & {
    language: LanguageType;
    children: string;
};

const CodeBlock: FunctionalComponent<CodeBlockProps> = (props) => {
    let name;
    switch (props.language) {
        case "lwfp":
        case "lwfb":
            name = "LWF";
            break;

        case "json":
            name = "JSON";
            break;
    }

    const codeRef = useRef<HTMLElement>(null);
    useEffect(() => {
        if (!codeRef.current) return;

        codeRef.current.innerHTML = Prism.highlight(
            props.children,
            Languages[props.language],
            name
        );
    }, [props.language, props.children]);

    return (
        <pre className={`language-${props.language}`}>
            <code
                {...props}
                ref={codeRef}
                key={props.language}
                className={
                    props.className
                        ? `language-${props.language} ${props.className}`
                        : `language-${props.language}`
                }
            >
                {props.children}
            </code>
        </pre>
    );
};

export { CodeBlock };
