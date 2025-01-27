// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTelegram
} from "@fortawesome/free-brands-svg-icons";

// Homepage Section2 Section
export default function Section2() {
    return (
        <>
            {/* PARALLAX TWO START */}
            <section id="about" className="flex items-center justify-center pt-16 w-[100vw] h-fit bg-fixed bg-center bg-cover bg-slate-900">
                <div className="text-center relative m-auto w-1/2">
                    <div className="box-cont h-fit w-fit mt-[10%] px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-slate-900 rounded-lg ">
                        <h4 className="uppercase tcolor font-bold">About Ekehi</h4>
                        <p className="lowercase text-white text-center font-small scroll mb-4 smalltext ">
                            EKEHI (EKH) is a cryptocurrency project that goes beyond financial exchange.<br />
                            It aims to empower individuals and foster community growth, creating a positive<br />
                            impact in both financial and social spheres.<br />
                            This innovative project envisions a world where digital transactions are linked to social progress,<br />
                            promoting a cycle of growth for individuals and communities alike.
                        </p>
                       
                        <a href="https://t.me/ekehiOfficial"
                            target="_blank"
                            className="bg-gradient-to-b  from-slate-900 to-blue-900 text-white hover:bg-slate-600 active:bg-blue-400 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-lg hover:shadow-xl outline-none focus:outline-none  mb-1 mt-2 ease-linear transition-all duration-150">
                            <span className="inline-block">Join Our Community <FontAwesomeIcon icon={faTelegram} className="ml-2" /></span>
                        </a>
                    </div>
                </div>
            </section>
            {/* PARALLAX TWO END */}
        </>
    )
}