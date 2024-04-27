import { Navbar, Button } from "flowbite-react";

export default function Menu()
{
    return (
        <>
            {/* Menu START */}
            <Navbar
                fluid={true}
                rounded={true}
                style={{margin:"auto"}}
                className="px-2 sm:px-4 py-2.5 bg-gradient-to-b  from-slate-900 to-slate-800 fixed w-full z-20 top-0 left-0 border-b  border-slate-600  "
            >
                <Navbar.Brand href="#">
                    <img src="/images/logo.png" className="mr-3 sm:h-9" alt="Ekehi Presale" />
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <a href="#section4">
                        <Button 

                        className="text-white order-1 focus:ring-4 focus:outline-none focus:ring-red-300 rounded-lg font-medium text-sm text-center mr-3 md:mr-0 default-color ">
                            JOIN PRESALE
                        </Button>
                    </a>
                    <Navbar.Toggle  className="tcolor"/>
                </div>
                <Navbar.Collapse 
                className="flex flex-col p-4 mt-4 rounded-lg border  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 border-gray-700 bg-gradient-to-b from-slate-900 to-slate-800">
                    
                    <Navbar.Link
                        href="#home"
                        className="uppercasess block py-2 pr-4 pl-3 text-white rounded   md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                    >
                        Home
                    </Navbar.Link>
                    <Navbar.Link
                       className="uppercasess block py-2 pr-4 pl-3 text-white rounded  default-txt md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                       href="#about">
                        About
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercasess block py-2 pr-4 pl-3 text-white rounded  default-txt md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                        href="#whitepaper">
                        Whitepaper
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercasess block py-2 pr-4 pl-3 text-white rounded  default-txt md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                        href="#">
                        Presales
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercasess block py-2 pr-4 pl-3 text-white rounded  default-txt md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                        href="#ecosystem">
                        Ecosystem
                    </Navbar.Link>
            
                    <Navbar.Link
                        className="uppercasess block py-2 pr-4 pl-3 text-white rounded  default-txt md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                        href="#tokenomics">
                        Tokenomics
                    </Navbar.Link>
    
                    <Navbar.Link
                       className="uppercasess block py-2 pr-4 pl-3 text-white rounded  default-txt md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                       href="#roadmap">
                        Roadmap
                    </Navbar.Link>
                    <Navbar.Link
                        className="uppercasess block py-2 pr-4 pl-3 text-white rounded  default-txt md:p-0  hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-yellow-500"
                        href="#footer">
                        Contact
                    </Navbar.Link>

                </Navbar.Collapse>
            </Navbar>
            {/* Menu END */}
        </>
    )
}