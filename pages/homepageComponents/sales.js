import SeedSale from "./seedSale.js";

// Homepage Section2 Section
export default function Section4()
{
    return (
        <>
            <section id="section4" className="flex place-items-center justify-around min-h-screen h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/20.jpg')]">
                <div className="grid grid-flow-row auto-rows-min sm:grid-flow-col justify-around">
                    <div className="text-left">
                        <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
                            <h3 className="text-white font-bold">
                                🚀 The Following features contribute to Ekehi mission of promoting sustainability and environmental stewardship through cryptocurrency:
                            </h3>
                            <p className="text-white"><strong>1) Sustainable Cryptocurrency: </strong>EKEHI aims to be a leader in sustainable cryptocurrency, offering a digital asset
that is environmentally friendly, energy-efficient, and aligned with global sustainability goals.</p>
                            <p className="text-white"><strong>2) Innovative Staking Mechanism: </strong>EKEHI features a unique staking mechanism that allows users to earn rewards
by holding and staking their tokens, supporting the growth and stability of the ecosystem.</p>
                            <p className="text-white"><strong>3) Community Governance: </strong>EKEHI is designed to be a community-driven project, with a decentralized
governance model that empowers users to participate in decision-making and direction of the project.</p>
                            <p className="text-white"><strong>4) EKEHI Utilities: </strong>The EKEHI token has various use cases and utilities within the ecosystem, such as access to
exclusive content, products, and services, as well as voting rights in the governance process.</p>
                            <p className="text-white"><strong>5) Carbon Negative Initiative: </strong>EKEHI aims to be carbon negative, offsetting more carbon emissions than it
generates through its operations and supporting environmental projects and initiatives that reduce greenhouse gas emissions.</p>
                            <p className="text-white"><strong>6) Education and Awareness: </strong>EKEHI is committed to promoting education and awareness around sustainability
and environmental issues, empowering users to make informed decisions and take action for a better future.</p>
                            <p className="text-white"><strong>7) Partnerships and Collaborations: </strong>EKEHI collaborates with businesses, organizations, and individuals who share its vision of promoting sustainability through cryptocurrency and blockchain technology.</p>
                        </div>
                    </div>
                    <SeedSale />
                </div>
            </section>
        </>
    )
}