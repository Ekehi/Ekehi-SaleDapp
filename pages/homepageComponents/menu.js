import { Navbar, Button } from "flowbite-react";
import HoverLink from './HoverLink';
import { useState, useEffect } from "react";

export default function Menu() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className={`${
            isMobileMenuOpen ? "bg-gradient-to-b from-blue-900 to-blue-900" : "bg-transparent"
        } md:bg-transparent`}>
            {/* Menu START */}
            <Navbar
                fluid={true}
                rounded={true}
                style={{ margin: "auto" }}
                className={`px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-slate-900 ${
                    isMobileMenuOpen ? "bg-gradient-to-b from-blue-900 to-slate-900" : "bg-transparent"
                }`}
            >
                <Navbar.Brand href="https://ekehi.network">
                    <img src="/images/logo.png" className="mr-2 sm:h-9" alt="Ekehi Presale" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Navbar.Toggle
                        className="tcolor order-2"
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                    />
                </div>
                <Navbar.Collapse
                    className={`flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ${
                        isMobileMenuOpen ? "bg-gradient-to-b from-slate-900 to-blue-900" : "lg:bg-transparent"
                    }`}
                >
                    <HoverLink href="#home" initialState={true}>
                        Home
                    </HoverLink>
                    <HoverLink href="#about" initialState={true}>
                        About
                    </HoverLink>
                    <HoverLink href="#whitepaper" initialState={true}>
                        Whitepaper
                    </HoverLink>
                    <HoverLink href="#presale" initialState={true}>
                        Presale
                    </HoverLink>
                    <HoverLink href="#ecosystem" initialState={true}>
                        Ecosystem
                    </HoverLink>
                    <HoverLink href="#tokenomics" initialState={true}>
                        Tokenomics
                    </HoverLink>
                    <HoverLink href="#roadmap" initialState={true}>
                        Roadmap
                    </HoverLink>
                    <HoverLink href="#contact" initialState={true}>
                        Contact
                    </HoverLink>
                </Navbar.Collapse>
            </Navbar>
            {/* Menu END */}
        </div>
    );
}
