// Modal.js
import React from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl outline outline-2 outline-slate-800 p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">How to Participate:</h2>

        <ol className="list-decimal list-inside space-y-2">
            <li className="text-lg text-gray-800">Click the "<a className='text-purple-700' href='https://t.me/EkehiBot?start=6333319840'>Join Airdrop</a>" button</li>
            <li className="text-lg text-gray-800">Follow All Our Social Handles: Make sure you're following us on all platforms.</li>
            <li className="text-lg text-gray-800">Perform all Tasks: Perform all tasks and submit appropriate information</li>
            <li className="text-lg text-gray-800">Refer Friends: Share your unique referral link and invite friends to join to earn more points</li>
        </ol>
        <p className="mt-4 font-bold text-red-600">
            Important: All tasks must be completed for your points to be validated.
        </p>

        <button
          className="mt-4 bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-2xl"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
