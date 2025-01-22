// Homepage Section2 Section
export default function Ecosystem() {

    const services = [
        {
            title: "Ekehi Token",
            discription:
                "The EKEHI token is the native cryptocurrency of the ecosystem, designed to be a leader in sustainable cryptocurrency. It is environmentally friendly, energy-efficient, and supports global sustainability goals.",
            icon: "/icons/ekehi-token.svg",
        },
        {
            title: "EkehiChain",
            discription:
                "Ekehichain is a blockchain platform focusing on security, transparency, and efficiency, aiming to revolutionize multiple industries through decentralized solutions.",
            icon: "/icons/ekehi-chain.svg",
        },
        {
            title: "EkehiSwap",
            discription:
                "EKEHI collaborates with businesses, organizations, and individuals who share its vision of promoting sustainability through cryptocurrency and blockchain technology.",
            icon: "/icons/ekehi-swap.svg",
        },
        {
            title: "Ekehi Stake",
            discription:
                "EKEHI offers an innovative staking mechanism that allows users to earn rewards by holding and staking their tokens, supporting the growth and stability of the ecosystem.",
            icon: "/icons/ekehi-stake.svg",
        },
        {
            title: "Ekehi Foundation",
            discription:
                "The EKEHI Foundation is a charity leveraging blockchain for efficient and transparent giving, aiming to maximize the impact of donations to address social and humanitarian issues globally.",
            icon: "/icons/ekehi-foundation.svg",
        },
        {
            title: "RWA Tokenization",
            discription:
                "EKEHI RWA tokenization digitizes real-world assets on the EKEHI blockchain, making them easier to trade, increasing liquidity, and broadening investor access. It streamlines asset management and enables fractional ownership, enhancing efficiency and transparency in transactions.",
            icon: "/icons/rwa-tokenization.svg",
        }
    ];

    return (
        <>
            <section id="ecosystem" className="flex place-items-center justify-around py-20 w-[100vw] h-fit bg-fixed bg-center bg-cover">
                <div className="text-center">
                    <div className="box-cont h-fit px-14 mb-10 py-8 shadow-md from-neutral-900 rounded-lg">
                        <h2 className="tcolor font-bold">Our Self-Sustaining Ecosystem</h2>
                        <p className="text-white mb-10 text-center m-auto smalltext">
                            The components of the EKEHI ecosystem are designed to promote sustainability
                            and environmental stewardship through their unique features and commitment to
                            making a positive impact. These components work together to create a robust and
                            sustainable ecosystem that supports positive change and empowers users to be a part of the solution.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-3">
                            {services.map((service, i) => (
                                <div key={i} className="text-center  p-6 rounded shadow-lg">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-30 h-30 mb-4 mx-auto"
                                    />
                                    <h4 className="text-lg font-bold text-yellow-500">{service.title}</h4>
                                    <p className="text-sm text-white mt-2">
                                        {service.discription}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
