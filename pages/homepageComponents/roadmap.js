import Typewriter from 'typewriter-effect';
import LoadingSpinner from "./Loader"
import Waiting from "./Waiting"

export default function Roadmap()
{
    return (
        <>
            <section id="roadmap" className="flex place-items-center pt-24 justify-around shadow-md w-[100vw] h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/5.jpeg')]">
                <div className="text-center">
                    <div className="box-cont h-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-slate-900 ">
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
                        <div className="container mx-auto">
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        PHASE 1
                                    </time>
                                    <p className="text-white mb-4 text-sm text-left  font-normal dark:text-gray-400 ml-12">
                                    <LoadingSpinner/> Marketing and Promotions.<br/>
                                    <Waiting/> Listing on Tracking Platforms. <br/>
                                    <Waiting/> Partnership and Collaborations.<br/>
                                    <Waiting/> Token Generation.<br/>
                                    <Waiting/> Listing on CEXs.<br/>
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        PHASE 2
                                    </time>
                                    <p className="text-white mb-4 text-sm font-normal text-left ml-12  dark:text-gray-400">
                                       <Waiting/> Staking Events. <br/>
                                       <Waiting/><span className="block">  Launch MVP for Ekehi Network and test initial layer 2 blockchain solution. <br/></span>
                                       <Waiting/> Roll out Ekehi Swap with integrated privacy features. <br/>
                                       <Waiting/> Initiate pilot for RWA tokenization <br/>
                                       <Waiting/> Trading Events/ DEX promotion. <br/>
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        PHASE 3
                                    </time>
                                    <p className="text-white mb-4 text-sm font-normal text-left ml-12  dark:text-gray-400">
                                        <Waiting/> <span> Expand community adoption.<br/></span>
                                        <Waiting/> Partnership with De-Fi projects.<br/>
                                        <Waiting/> Continuation of blockchain testnet.<br/>
                                        <Waiting/> RWA tokenization public offering. <br/>
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        PHASE 4
                                    </time>
                                    <p className="text-white mb-4 text-sm font-normal text-left ml-12  dark:text-gray-400">
                                        <Waiting/> Achieve 10 million active users. <br/>
                                        <Waiting/> Secure RWA partnership for assets backed solutions.<br/>
                                        <Waiting/> Mainnet launch.<br/>
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