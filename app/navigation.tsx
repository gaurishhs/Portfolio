"use client";

import { useState } from "react";
import { MobileNavbar, Navbar } from "./navbar";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <MobileNavbar toggle={toggle} isOpen={isOpen} />
            <Navbar toggle={toggle} isOpen={isOpen} />
        </>
    )
}