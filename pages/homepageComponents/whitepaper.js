// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import
{
    faCircleDown
} from "@fortawesome/free-solid-svg-icons";
import Typewriter from 'typewriter-effect';

export default function Section3()
{
    return (
        <>
            <section id="section3" className="flex place-items-center justify-around h-fit bg-fixed bg-center ">
                <div className="text-center">
                    <div style={{alignItems:"center"}}
                    className="flex flex-col box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r rounded-lg justify-evenly">
                        <h2 className="text-white font-bold">Whitepaper</h2>
                        <h4 className="lead text-white font-bold">
                            <Typewriter
                                options={{
                                    strings: ["Download", "Read", "Understand"],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h4>
                        <p className="text-white mb-10 w-fit text-center mt-6">
                        EKEHI is a transformational cryptocurrency project focused on growth
                          Sustainability and environmental management through innovative 
                          blockchain technology and a strong commitment to local governance.
                        </p>
                        <a href="/whitepaper/whitepaper.pdf"
                            target="_blank"
                            className="bg-slate-300 text-black hover:bg-red-600 active:bg-red-900 font-bold uppercase text-base px-6 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
                            <span>Download Whitepaper <FontAwesomeIcon icon={faCircleDown} className="ml-2" /></span>
                        </a>
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}