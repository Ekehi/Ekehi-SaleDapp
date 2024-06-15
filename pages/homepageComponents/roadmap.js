import Typewriter from 'typewriter-effect';
import LoadingSpinner from "./Loader"
import Waiting from "./Waiting"

export default function Roadmap()
{
    return (
        <>
            <section id="roadmap" className="flex place-items-center pt-24 justify-around shadow-md h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/5.jpeg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-slate-900 ">
                        <h2 className="text-white font-bold">Join us on this project</h2>
                        <h4 className="lead text-white font-bold">
                            <Typewriter
                                options={{
                                    strings: ["ROADMAP"],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 600000
                                }}
                            />
                        </h4>
                        <div className="container mx-auto w-max">
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        PHASE 1
                                    </time>
                                    <p className="text-white mb-4 text-base text-left font-normal dark:text-gray-400 ml-12">
                                    <LoadingSpinner/> Marketing and Promotions.<br/>
                                    <Waiting/> Listing on Tracking Platforms. <br/>
                                    <Waiting/> Partnership and Collaborations.<br/>
                                    <Waiting/> Token Generation / Point Conversion.<br/>
                                    <Waiting/> Listing on CEXs.<br/>
                                    <Waiting/> Burning Events.<br/>
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        PAHSE 2
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal text-left ml-12  dark:text-gray-400">
                                       <Waiting/> Staking Events. <br/>
                                       <Waiting/> DEX Building. <br/>
                                       <Waiting/> DEX Lauching. <br/>
                                       <Waiting/> Trading Events / DEX Promotions. <br/>
                                       <Waiting/> BlockChain Testnets. <br/>
                                       <Waiting/> RWA Tokenization Public Offering. <br/>
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        PHASE 3
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal justify-start text-left ml-12 dark:text-gray-400">
                                    <Waiting/> BlockChain Launch.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}