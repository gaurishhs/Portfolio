"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./theme-toggle";
import { usePathname } from "next/navigation";
import { MotionDiv } from "./motion";
import { useReducedMotion } from "framer-motion";

export const Navbar = () => {
    const [time, setTime] = useState("");
    const pathname = usePathname();
    const shouldReduceMotion = useReducedMotion();
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

        const now = new Date();
        const secondsUntilNextMinute = 60 - now.getSeconds();
        const intervalMilliseconds = (secondsUntilNextMinute + 1) * 1000; // Add 1 second to be safe
        const intervalID = setInterval(updateTime, intervalMilliseconds);

        // Cleanup
        return () => clearInterval(intervalID);
    }, []);
    return (
        <MotionDiv variants={
            {
                hidden: { opacity: shouldReduceMotion ? 1 : 0, y: shouldReduceMotion ? 0 : -20 },
                visible: { opacity: 1, y: 0 },
            }
        } initial="hidden" animate="visible" className="flex justify-between flex-wrap md:flex-row mb-4 items-center">
            {pathname == "/" ? (
                <span className="font-bold">GAURISHHS</span>
            ) : (
                <Link
                    href="/"
                    className="md:mb-0 text-sm font-bold tracking-tight text-zinc-800 dark:text-zinc-100"
                >
                    GAURISHHS
                </Link>
            )}
            <div className="md:ml-auto text-zinc-800 dark:text-zinc-100 flex gap-1 items-center text-base flex-end">
                <ThemeToggle />
                <span>Delhi, India, {time}</span>
            </div>
        </MotionDiv>
    );
};