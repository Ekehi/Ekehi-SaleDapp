import Typewriter from 'typewriter-effect';

export default function Roadmap()
{
    return (
        <>
            <section id="section9" className="flex place-items-center justify-around h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/15.ojpg')]">
                <div className="text-center">
                    <div className="box-cont h-fit w-fit px-14 mb-10 py-8 shadow-md bg-gradient-to-r from-neutral-900 rounded-lg">
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
                        <div className="container mx-auto w-fit">
                            <ol className="relative border-l border-gray-200 dark:border-gray-700">
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        Q1 2024
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal  dark:text-gray-400">
                                        Development and launch of the EKEHI token presale, <br/>
                                        including smartcontract creation and token sale. <br/>
                                        EKEHI will also be listed on prominent tracking platform to establish its presence externally.
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        Q2 2024
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal  dark:text-gray-400">
                                        Focus on establishing collaboration with well-known companies within and outside blockchain sector. <br/>
                                        this will help spread awareness about the project among existing cryptocurrency users and those new to the blockchain space.
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        Q3 2024
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal dark:text-gray-400">
                                        Active development and testing of the EKEHICHAIN and EKEHI swap testnets to ensure efficiency and functionality.
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        Q4 2024
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal  dark:text-gray-400">
                                        Listing of EKEHI token no several centralized exchanges to begin trading activities.
                                    </p>
                                </li>
                                <li className="mb-10 ml-4">
                                    <div className="absolute w-3 h-3 default-color rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="tcolor text-lg font-semibold  dark:text-white">
                                        Q1 2025
                                    </time>
                                    <p className="text-white mb-4 text-base font-normal  dark:text-gray-400">
                                        Official launch of EKEHICHAIN and swap for full functionality, <br/>
                                        representing a major milestone for the project.
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