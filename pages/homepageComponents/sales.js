import React, { useState } from 'react';
import SeedSale from "./seedSale.js";
import Modals from './instructPresale.js';
import CopyableText from './CopyableText.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Section4() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to handle opening the modal
  const openModals = () => {
    setIsModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModals = () => {
    setIsModalOpen(false);
  };


  return (
    <>
      <section id="presale" className="flex flex-col place-items-center justify-around py-20 h-fit bg-fixed bg-center  bg-cover bg-[url('/images/bg/3.jpeg')]">
        <h2 className="text-white font-bold">Secure Your Tokens Now!</h2>
        <p className="text-white font-extralight text-justify md:text-center sm:text-center sm:w-[100vw] tc half ">We are offering you an exclusive opportunity to be part of this exciting project.</p>
        <p className="text-white">Here's how you can participate in the presale</p>
        <a
          className='font-light text-white  hover:bg-white hover:text-slate-900 w-max rounded-xl ml-2 px-3 py-1 outline outline-1'
          onClick={openModals}>
          Learn How <FontAwesomeIcon icon={faArrowRight} className="ml-2 tcolor" />
        </a>

        <div className="flex flex-col mb-4 mt-4 items-center">
          <h3 className="tcolor mt-2 -mb-1 underline">Our Payment Options</h3>
          <ul className="text-white list-item list-disc ">
            <li>Connect to Wallet.</li>
            <li>Send to Wallet Address.</li>
          </ul>
          <p className='w-1/3 text-white text-center text-sm mt-3'>Send USDT, BNB, ETH, MATIC, ARB, or SOL to the provided wallet address respectively
            Click the "Submit" button and fill the form.</p>
          <div className='flex flex-row mt-2 items-center'>
            <span className='font-mono text-white text-xs ease-linear transition duration-600 bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md  w-max rounded-xl ml-2 px-2 py-1 '>BNB</span>
            <span className='font-mono text-white text-xs ease-linear transition duration-600 bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md  w-max rounded-xl ml-2 px-2 py-1 '>ETHERIUM</span>
            <span className='font-mono text-white text-xs ease-linear transition duration-600 bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md  w-max rounded-xl ml-2 px-2 py-1 '>POLYGON</span>
            <span className='font-mono text-white text-xs ease-linear transition duration-600 bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md  w-max rounded-xl ml-2 px-2 py-1 '>USDT</span>
            <span className='font-mono text-white text-xs ease-linear transition duration-600 bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md w-max rounded-xl ml-2 px-2 py-1 '>ARBITRUM</span>
          </div>
          <CopyableText
            addresses={[
              { text: '0xd188d593476d7CD4A7104500131d638a076fc6D4' },
            ]}
          />
          <div className='flex flex-col mt-4 items-center'>
            <span className='font-mono text-white text-xs bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md  w-max rounded-xl ml-2 px-2 py-1 '>SOLANA</span>
          </div>
          <CopyableText
            addresses={[
              { text: '4fDbiFf6izMV9yzyjDh4sGN1AhwstryFGmeXsRTL6emH' },
            ]}
          />
          <a className='font-light text-white hover:bg-white hover:text-slate-900 align-middle w-max rounded-xl ml-2 px-3 py-1 outline outline-1'
            href='https://docs.google.com/forms/d/e/1FAIpQLSfF2EphHcpC344DANhqt3-H1VwkiON5xtcnQLYrH-6bU58QAw/viewform'>
            Submit
          </a>
        </div>
        <div className=" grid-flow-col auto-rows-min sm:grid-flow-col justify-between  ">
          <SeedSale />
        </div>
      </section>
      <Modals isOpen={isModalOpen} onClose={closeModals} />
    </>
  )
}