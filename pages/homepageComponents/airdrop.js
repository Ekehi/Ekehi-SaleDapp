import React, { useState } from 'react';
import Typewriter from 'typewriter-effect';
import Modal from './instruct';
import Timer from "./timer.js";

export default function Airdrop() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to handle opening the modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    const deadline1 = '2024-06-13T23:59:59';

    return (
        <>
            <section id="airdrop" className="flex shadow-md place-items-center justify-around h-fit bg-fixed bg-center pt-72 bg-cover bg-[url('/images/bg/1.jpg')]">
                <div className="text-center " >
                    <div className=" box-cont h-fit w-fit px-14 mb-10 py-8 shadow-inner bg-gradient-to-r from-slate-900 rounded-lg">
                        <h2 className="font-bold text-white w-max px-6 py-3 m-auto underline underline-offset-8">Our Airdrop</h2>
                        <h4 className="lead text-white font-semibold">
                            <Typewriter

                                options={{
                                    strings: ["Join Our Exclusive Airdrop", "Limited Time Airdrop Bonus", "Be Part of Ekehi Community"],
                                    autoStart: true,
                                    loop: true,
                                    pauseFor: 6000,
                                    cursor: '.',
                                    /*  styles:{
                                         textColor:"#ffa000"
                                     }, */
                                }}

                            />
                        </h4>

                        <h5 className="uppercase text-pink-500 font-bold">Total Airdrop Tokens: 1,000,000
                        </h5>
                        <h5 className="ml-[3%] bg-slate-300 text-black w-3/4 font-semibold uppercase text-base px-8 py-3 rounded-[24px] shadow-md hover:shadow-lg outline-none focus:outline-none central ease-linear transition-all duration-150">
                            Learn How To Participate In the Airdrop! <span className='' > <button className='text-white inline lowercase bg-black outline outline-1 font-medium rounded text-sm px-2 hover:bg-stone-800 focus:bg-slate-700 ' onClick={openModal}>Click Here</button></span><br />
                        </h5>

                        <h4 className='text-white'>
                            🏆The top 10 referrers will share a <span className='tcolor'>$100</span> reward pool!
                        </h4>
                        <h5 className="lead text-white pad font-semibold pt-8 -mb-1">
                            Ends in 
                        </h5>
                        <div className='mb-4'>
                            <Timer deadline={deadline1}  />
                        </div>
                        
                        <a
                            className='font-bold mt-2 text-white bg-purple-700 hover:bg-white hover:text-purple-700 w-max rounded-3xl px-6 py-3 m-auto outline outline-1'
                            href='https://t.me/EkehiBot?start=6333319840'>
                            Join Airdrop
                        </a>
                    </div>
                </div>
            </section>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
    );
}
