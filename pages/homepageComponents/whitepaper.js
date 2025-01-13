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
            <section id="whitepaper" className="flex place-items-center justify-around pt-20 h-fit bg-fixed bg-center ">
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
                        <a href="/whitepaper/Pitch Deck.pdf"
                            target="_blank"
                            className="bg-gradient-to-b  from-slate-900 to-blue-900 text-white hover:bg-slate-600 active:bg-blue-400 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-lg hover:shadow-xl outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150">
                            <span>Download Whitepaper <FontAwesomeIcon icon={faCircleDown} className="ml-2" /></span>
                        </a>
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}