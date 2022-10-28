import { FC } from "react";
import NextLink from "next/link";

export const Link: FC<{ href: string, children: string }> = ({ href, children }: any) => {
    return (
        <NextLink href={href} target="_blank" className="link">{children}</NextLink>
    )
};
