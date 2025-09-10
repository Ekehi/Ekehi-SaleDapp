import React, { useState } from 'react';
import SeedSale from "./seedSale.js";
import Modals from './instructPresale.js';
import CopyableText from './CopyableText.js';
import PresalePanel from './PresalePanel.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";

export default function Section4() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModals = () => { setIsModalOpen(true); };
  const closeModals = () => { setIsModalOpen(false); };

  return (
    <>
      <section id="presale" className="flex flex-col gap-8 place-items-center justify-start py-20 h-fit bg-fixed bg-center bg-cover bg-[url('/images/bg/3.jpeg')]">
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-white font-bold text-3xl">Secure Your Tokens Now</h2>
          <p className="text-white/90 font-extralight mt-2">We are offering you an exclusive opportunity to be part of this exciting project.</p>
          <div className="mt-4">
            <button
              className='font-medium text-white hover:bg-white hover:text-slate-900 w-max rounded-xl px-4 py-2 outline outline-1'
              onClick={openModals}>
              Learn How <FontAwesomeIcon icon={faArrowRight} className="ml-2 tcolor" />
            </button>
          </div>
        </div>

        {/* New polished purchase panel */}
        <PresalePanel />

        <div className="flex flex-col mb-4 mt-6 items-center px-4">
          <h3 className="tcolor mt-2 -mb-1 underline">Alternative Payment Options</h3>
          <p className="text-white/80 text-center text-sm mt-2">Send USDT, BNB, ETH, MATIC, ARB, or SOL to the provided wallet address respectively. Then click “Submit” and fill the form.</p>
          <div className='flex flex-wrap gap-2 mt-3 items-center justify-center'>
            <span className='font-mono text-white text-xs bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md rounded-xl px-2 py-1 '>BNB</span>
            <span className='font-mono text-white text-xs bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md rounded-xl px-2 py-1 '>ETHEREUM</span>
            <span className='font-mono text-white text-xs bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md rounded-xl px-2 py-1 '>POLYGON</span>
            <span className='font-mono text-white text-xs bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md rounded-xl px-2 py-1 '>USDT</span>
            <span className='font-mono text-white text-xs bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md rounded-xl px-2 py-1 '>ARBITRUM</span>
          </div>

          <CopyableText
            addresses={[
              { text: '0xd188d593476d7CD4A7104500131d638a076fc6D4' },
            ]}
          />

          <div className='flex flex-col mt-4 items-center'>
            <span className='font-mono text-white text-xs bg-gradient-to-b from-pink-700 to-indigo-700 shadow-md rounded-xl px-2 py-1 '>SOLANA</span>
          </div>
          <CopyableText
            addresses={[
              { text: '4fDbiFf6izMV9yzyjDh4sGN1AhwstryFGmeXsRTL6emH' },
            ]}
          />
          <a className='font-light text-white hover:bg-white hover:text-slate-900 align-middle w-max rounded-xl px-3 py-1 outline outline-1'
            href='https://docs.google.com/forms/d/e/1FAIpQLSfF2EphHcpC344DANhqt3-H1VwkiON5xtcnQLYrH-6bU58QAw/viewform'>
            Submit
          </a>
        </div>

        <div className="grid-flow-col auto-rows-min sm:grid-flow-col justify-between">
          <SeedSale />
        </div>
      </section>
      <Modals isOpen={isModalOpen} onClose={closeModals} />
    </>
  )
}