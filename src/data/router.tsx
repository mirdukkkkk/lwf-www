import { type JSX } from "react";
import { About, Future, Specifications } from "@pages";

/* Enter the route "name" if you want to see it in the <Header /> :D */
const routes: { path: string; name?: string; element: JSX.Element }[] = [
    { path: "/", name: "About", element: <About /> },
    { path: "/specifications", name: "Specs", element: <Specifications /> },
    { path: "/future", name: "Future", element: <Future /> }
];

export { routes };
