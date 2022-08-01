import { FC } from "react";

export const Link: FC<{ href: string, children: string }> = ({ href, children }: any) => {
    return (
        <a href={href} target="_blank" className="link">{children}</a>
    )
};

