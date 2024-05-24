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
            <section id="about" className="flex items-center justify-center pt-16 h-fit bg-fixed bg-center bg-cover bg-slate-900">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit mt-[10%] px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-slate-900 rounded-lg ">
                        <h4 className="uppercase tcolor font-bold">About Ekehi</h4>
                        <p className="lowercase text-white font-small scroll mb-4 ">
                            EKEHI, a project symbolized as EKH, is a cryptocurrency project that aims to be more than just a means of financial exchange. It envisions a future where digital transactions are coupled with a focus on community growth, driving financial empowerment for individuals. It's an idea with a bigger mission to make a positive impact not only in the financial realm, but also in the social realm by fostering community growth.


                            <br /> The name "EKEHI" itself adds to the project's mystique, hinting at a deeper meaning and significance that sets it apart from other cryptocurrency projects. It's not just a financial tool, but a concept with the potential to create a better future for all.
                            <br />
                            EKEHI is a cryptocurrency project with a unique vision - to not only facilitate digital transactions, but also to drive financial empowerment and community growth. This innovative project aims to create a future where financial transactions are intertwined with social impact, creating a positive cycle of growth for both individuals and communities.
                        </p>
                       
                        <a href="https://t.me/ekehiOfficial"
                            target="_blank"
                            className="bg-gradient-to-b  from-slate-900 to-blue-900 text-white hover:bg-slate-600 active:bg-blue-400 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-lg hover:shadow-xl outline-none focus:outline-none  mb-1 mt-2 ease-linear transition-all duration-150">
                            <span>Join Our Community <FontAwesomeIcon icon={faTelegram} className="ml-2" /></span>
                        </a>
                    </div>
                </div>
            </section>
            {/* PARALLAX TWO END */}
        </>
    )
}