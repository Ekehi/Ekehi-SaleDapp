// Modal.js
import React from 'react';

const Modals = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex flex-col items-center justify-center p-4 z-50">
      <div className='bg-white rounded-lg shadow-xl outline outline-2 outline-slate-800 p-6 max-w-sm w-full h-4/5'>
        <div className=" order-4 relative bg-white rounded-lg shadow-xl outline outline-1 outline-yellow-500 p-6 max-w-sm w-full max-h-full  scroll-m-2 [&>*]:text-black [&>*]:p-2 iscroll">
          <h1 className="text-2xl font-semibold mb-4">Step-by-Step Guide to Purchasing $EKH Tokens</h1>
          <div className="mb-4">
          <h2 className="text-lg font-medium mb-2">OPTION 1</h2>
            <h2 className="text-lg font-medium mb-2">Step 1: Prepare Your Wallet</h2>
            <ul className="list-disc ml-6">
              <li>Get USDT (Tether) and a small amount of Polygon (MATIC) for gas fees.</li>
              <li>Ensure you have a web3 wallet like Trust Wallet, MetaMask, or OKX Wallet.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Step 2: Copy the Website Link</h2>
            <p>Copy this Link: <a href='https://ekehi.network'>https://ekehi.network</a></p>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Step 3: Connect Your Wallet</h2>
            <ul className="list-disc ml-6">
              <li>Go to your wallet's Dapp browser and paste the Website link.</li>
              <li> Go to the presale section and Click on "Connect Wallet".</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Step 4: Buy $EKH Tokens with USDT</h2>
            <ul className="list-disc ml-6">
              <li>Click on "Buy with USDT".</li>
              <li>Enter the amount of $EKH tokens you want to purchase.</li>
              <li>Click on "Convert USDT".</li>
            </ul>
          </div>
          <div className="mb-4">
            <h2 className="text-lg font-medium mb-2">Step 5: Acknowledge the Contract Popup</h2>
            <p>Review and acknowledge the contract popup. You have successfully purchased $EKH tokens!</p>
          </div>
          <div className="mb-4">
          <h2 className="text-lg font-medium mb-2">OPTION 2</h2>
            <h2 className="text-lg font-medium mb-2">Alternative Payment Methods</h2>
            <p>You can also send USDT, BNB, ETH, MATIC, ARB, or SOL to the provided wallet addresses in the presale section</p>
            <p>Click the "Submit" button and fill out the form with the following details:</p>
            <ul className="list-disc ml-6">
              <li>Your wallet address</li>
              <li>Amount sent in USD</li>
              <li>Token sent (USDT, ETH, SOL, ARB, MATIC, or BNB)</li>
              <li>Recieving wallet address</li>
              <li>Date</li>
            </ul>
          </div>
          <div className="mt-6">
            <p className="text-sm">
              <strong>Important Notes</strong> <br/><br/>📌Only use web3 wallets like Trust Wallet, MetaMask, Phantom to send tokens. Do not send tokens directly from exchanges, as these transactions will not be acknowledged.<br/><br/>
              📌Please ensure you have a sufficient funds in your wallet to complete the transaction.<br/><br/>
              📌Double check the wallet address to avoid any errors.<br/><br/>
              📌Once the transaction is confirmed you will recieve notification via your email.
            </p>
          </div>
        </div>
        
      </div>
      <a
        href='#presale'
          className="mt-4 bg-black hover:bg-white font-light text-white hover:text-black font-bold py-1 px-2 rounded-2xl"
          onClick={onClose}
        >
          Proceed To Buy
        </a>
    </div>
  );
};

export default Modals;
