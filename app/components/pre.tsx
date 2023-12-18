import clsx from "clsx";
export const Pre = ({
    children,
    scroll = true,
    ...props
}: {
    children: React.ReactNode;
    scroll?: boolean;
    [key: string]: any;
}) => (
    <div className="my-6">
        <pre
            {...props}
            className={clsx(
                "p-4 text-sm dark:data-[theme='light']:hidden dark:data-[theme='dark']:block data-[theme='dark']:hidden",
                scroll
                    ? "overflow-scroll"
                    : "whitespace-pre-wrap break-all overflow-hidden"
            )}
        >
            <code>{children}</code>
        </pre>
    </div>
);
