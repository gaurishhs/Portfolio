"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Navbar = () => {
    const [time, setTime] = useState("Loading..");
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

        const intervalID = setInterval(updateTime, 60000);

        // Cleanup
        return () => clearInterval(intervalID);
    }, []);
    return (
        <div className="flex mx-auto px-3 py-4 flex-row justify-between align-top">
            <Link
                href="/"
                className="text-sm font-bold tracking-tight text-zinc-800 mb-8 dark:text-zinc-100"
            >
                GAURISHHS
            </Link>
            <div className="flex-end">
                <ThemeToggle />
                <span>Delhi, India, {time}</span>
            </div>
        </div>
    );
};
