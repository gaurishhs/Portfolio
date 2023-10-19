import type { MDXComponents } from "mdx/types";
import { Image } from "@/app/components/image";
import { Pre } from "@/app/components/pre";
import { Code } from "@/app/components/code";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: {
    [component: string]: React.ComponentType;
}): MDXComponents {
    return {
        // Allows customizing built-in components, e.g. to add styling.
        // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
        ...components,
        img: Image,
        pre: Pre,
        code: Code
    };
}
