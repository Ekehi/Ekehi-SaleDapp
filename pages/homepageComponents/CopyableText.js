import React, { useState } from 'react';

const CopyableText = ({ addresses = [] }) => {
  const [copiedIndexes, setCopiedIndexes] = useState(new Set());

  const handleCopyClick = async (index) => {
    try {
      await navigator.clipboard.writeText(addresses[index].text);
      setCopiedIndexes(prevIndexes => new Set(prevIndexes).add(index));
    } catch (error) {
      console.error('Error copying text:', error);
    }
  };

  return (
    <div className="tcolor p-4 font-light text-sm">
      {addresses.map((address, index) => (
        <div key={index} className="flex mb-2">
          {address.label && <span className="mr-2">{address.label}:</span>}
          <span>{address.text}</span>
          <button
            className={`ml-2 rounded-md bg-gradient-to-r from-slate-900 to-blue-900 text-xs py-1 px-2 ${copiedIndexes.has(index) ? 'copied' : ''}`}
            onClick={() => handleCopyClick(index)}
          >
            {copiedIndexes.has(index) ? 'Copied!' : 'Copy'}
          </button>
        </div>
      ))}
    </div>
  );
};

export default CopyableText;
