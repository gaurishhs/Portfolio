import clsx from "clsx";
import { SVGProps } from "react";

export const SunIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
    </svg>
);

export const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={clsx("w-6 h-6", props.className)}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
    </svg>
);

export const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
        <path d="M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z" />
    </svg>
);

export const GithubIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"
        />
    </svg>
);

export const EnvelopeIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
);