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
            <section id="section2" className="flex items-center justify-center h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/12.ojpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit mt-[10%] px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                        <h5 className="uppercase tcolor font-bold">About Ekehi</h5>
                        <p className="lowercase text-white font-small scroll">
                            EKEHI, a project symbolized as EKH, is a cryptocurrency project that aims to be more than just a means of financial exchange. It envisions a future where digital transactions are coupled with a focus on community growth, driving financial empowerment for individuals. It's an idea with a bigger mission to make a positive impact not only in the financial realm, but also in the social realm by fostering community growth.


                            <br /> The name "EKEHI" itself adds to the project's mystique, hinting at a deeper meaning and significance that sets it apart from other cryptocurrency projects. It's not just a financial tool, but a concept with the potential to create a better future for all.
                            <br />
                            EKEHI is a cryptocurrency project with a unique vision - to not only facilitate digital transactions, but also to drive financial empowerment and community growth. This innovative project aims to create a future where financial transactions are intertwined with social impact, creating a positive cycle of growth for both individuals and communities.
                        </p>
                        <div className="flex items-center justify-center mb-6 mt-5">
                            {/*                         <iframe className="md:w-[350px] md:h-[350px] h-[250px] w-[250px]"
                            src="https://www.youtube.com/embed/L07fMeLWToE?rel=0"
                            title="PRAIZA FINANCE - INVEST IN REAL FINANCE IN DEFI"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe> */}

                        </div>
                        <a href="https://t.me/R3D4NG3L"
                            target="_blank"
                            className="bg-slate-300 text-black hover:bg-red-600 active:bg-red-900 font-bold uppercase text-base px-8 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none  mb-1 ease-linear transition-all duration-150">
                            <span>Join Our Community <FontAwesomeIcon icon={faTelegram} className="ml-2" /></span>
                        </a>
                    </div>
                </div>
            </section>
            {/* PARALLAX TWO END */}
        </>
    )
}