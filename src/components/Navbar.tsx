import { useEffect, useState } from "preact/hooks";

export const Navbar = () => {
    const [time, setTime] = useState("");
    const { pathname } = new URL(window.location.href)
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeZoneOffset = now.toLocaleTimeString("en-US", {
                timeZone: "Asia/Kolkata",
                hour12: false,
            });
            const [hours, mins] = timeZoneOffset.split(":");
            const formattedTime = `${hours}:${mins}`;
            setTime(formattedTime);
        };
        // Initial load
        updateTime();
        const intervalID = setInterval(updateTime, 1000);

        // Cleanup
        return () => clearInterval(intervalID);
    }, []);
    return (
        <div className="flex justify-between flex-wrap md:flex-row mb-4 items-center">
            {pathname == "/" ? (
                <span className="font-bold">GAURISHHS</span>
            ) : (
                <a
                    href="/"
                    className="md:mb-0 text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
                >
                    GAURISHHS
                </a>
            )}
            <div className="md:ml-auto text-zinc-800 dark:text-zinc-100 flex gap-1 items-center text-base flex-end">
                <span>Delhi, India, {time}</span>
            </div>
        </div>
    );
};
