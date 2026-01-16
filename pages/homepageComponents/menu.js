import { Navbar, Button } from "flowbite-react";
import HoverLink from './HoverLink';

export default function Menu() {
    return (
        <>
            {/* Menu START */}
            <Navbar
                fluid={true}
                rounded={true}
                style={{ margin: "auto" }}
                className="px-2 sm:px-4 py-2.5 fixed w-[100vw] z-20 top-0 left-0 border-b border-slate-800/60 bg-gradient-to-b from-blue-900/70 to-slate-900/70 backdrop-blur-xl shadow-2xl shadow-blue-900/20 ring-1 ring-slate-700/50"
            >
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between">
                    <Navbar.Brand href="https://ekehi.network" className="flex items-center gap-2">
                        <img src="/images/logo.png" className="h-8 sm:h-9 drop-shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-transform duration-300 hover:scale-105" alt="Ekehi" />
                        <span className="hidden sm:inline-block text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-rose-400 font-semibold tracking-wide">
                            EKEHI Network
                        </span>
                    </Navbar.Brand>

                    <div className="flex items-center gap-3 md:order-2">
                        <a href="#presale" className="hidden sm:block order-1">
                            <Button
                                className="text-white bg-gradient-to-r from-amber-500 via-red-500 to-pink-500 hover:from-amber-400 hover:via-red-400 hover:to-pink-400 focus:ring-4 focus:outline-none focus:ring-rose-300/40 rounded-full font-semibold text-sm tracking-wide shadow-lg shadow-rose-900/30 border-0"
                            >
                                Join Presale
                            </Button>
                        </a>
                        <Navbar.Toggle className="tcolor order-2" />
                    </div>

                    <Navbar.Collapse
                        className="flex flex-col p-4 mt-4 rounded-2xl md:rounded-none md:p-0 md:mt-0 md:flex-row md:space-x-6 md:text-[0.95rem] md:font-medium md:border-0 border-amber-400/30 bg-gradient-to-b from-slate-900/95 to-blue-900/95 md:bg-transparent"
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
                </div>
            </Navbar>
            {/* Menu END */}
        </>
    )
}