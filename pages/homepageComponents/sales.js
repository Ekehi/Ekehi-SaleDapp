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
                                🚀 Our mission to promote sustainability and environmental stewardship:
                            </h3>
                            <p className="text-white"><strong>1) </strong>Sustainable Cryptocurrency</p>
                            <p className="text-white"><strong>2) </strong>Innovative Staking Mechanism</p>
                            <p className="text-white"><strong>3) </strong>Community Governance</p>
                            <p className="text-white"><strong>4) </strong>Utilities</p>
                            <p className="text-white"><strong>5) </strong>Carbon Negative Initiative</p>
                            <p className="text-white"><strong>6) </strong>Education and Awareness</p>
                            <p className="text-white"><strong>7) </strong>Partnerships and Collaborations</p>
                        </div>
                    </div>
                    <SeedSale />
                </div>
            </section>
        </>
    )
}