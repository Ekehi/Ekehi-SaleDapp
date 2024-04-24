// Import the FontAwesomeIcon component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleDown
} from "@fortawesome/free-solid-svg-icons";
import Typewriter from 'typewriter-effect';


// Homepage Section2 Section
export default function Ecosystem() {

    const services = [
        {
            title: "Ekehi Token    ",
            discription:
                "The EKEHI token is the native cryptocurrency of the ecosystem, designed to be a leader in sustainable cryptocurrency. It is environmentally friendly, energy-efficient, and supports global sustainability goals.",
        },

        {
            title: "EkehiChain      ",
            discription:
                "Ekehichain is a blockchain platform focusing on security, transparency, and efficiency, aiming to revolutionize multiple industries through decentralized solutions..      ",
        },
        {
            title: "EkehiSwap      ",
            discription:
                "EKEHI collaborates with businesses, organizations, and individuals who share its vision of promoting sustainability through cryptocurrency and blockchain technology.      ",
        },
        {
            title: "Ekehi Stake     ",
            discription:
                "EKEHI offers an innovative staking mechanism that allows users to earn rewards by holding and staking their tokens, supporting the growth and stability of the ecosystem.      ",
        },
        {
            title: "Ekehi Foundation      ",
            discription:
                "The EKEHI Foundation is a charity leveraging blockchain for efficient and transparent giving, aiming to maximize the impact of donations to address social and humanitarian issues globally..      ",
        },
        {
            title: "RWA Tokenization      ",
            discription:
                "EKEHI RWA tokenization digitizes real-world assets on the EKEHI blockchain, making them easier to trade, increasing liquidity, and broadening investor access. It streamlines asset management and enables fractional ownership, enhancing efficiency and transparency in transactions..      ",
        }
    ];
    return (
        <>
            <section id="section5" className="flex place-items-center justify-around h-fit bg-fixed bg-center bg-cover ">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md  from-neutral-900 rounded-lg">
                        <h2 className="text-white font-bold">Our Self-Sustaining Ecosystem</h2>
                        <h4 className="lead text-white font-bold">
                        </h4>
                        <div className="flex flex-row w-full mb-3">
                            <p className="text-white mb-10 text-center  m-auto">
                                The components of the EKEHI ecosystem are designed to promote sustainability
                                and environmental stewardship through their unique features and commitment to
                                making a positive impact. These components work together to create a robust and
                                sustainable ecosystem that supports positive change and empowers users to be a part of the solution.
                            </p>
                        </div>

                        <div className="row" >
                            {services.map((service, i) => (
                                <div key={i + 1}
                                    className=" col-lg-4 col-md-6 col-sm-12 ">
                                    <div
                                        className="box_wrap text-center b-border"
                                        data-animation="fadeInUp"
                                        data-animation-delay={`0.${i + 6}s`}
                                    >
                    
                                        <h4 style={{ color: "#f8cd0a" }}>{service.title}</h4>
                                        <p 
                                        className="text-sm text-white"
                                        stye={{ textAlign: "centre" ,fontSize:"12px", fontFamily:"sans-serif" }}>{service.discription}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                       
                    </div>
                </div>
                <div></div>
            </section>
        </>
    )
}