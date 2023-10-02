import clsx from "clsx";
export const Pre = ({
    children,
    scroll = true,
}: {
    children: React.ReactNode;
    scroll?: boolean;
}) => (
    <div className="my-6">
        <pre
            className={clsx(
                "p-4 text-sm",
                scroll
                    ? "overflow-scroll"
                    : "whitespace-pre-wrap break-all overflow-hidden"
            )}
        >
            <code>{children}</code>
        </pre>
    </div>
);
