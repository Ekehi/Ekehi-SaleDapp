import React, { useState } from 'react';
import { Navbar } from 'flowbite-react'; 

const HoverLink = ({ children, href, className = '', initialState = false }) => {
  const [isHovered, setIsHovered] = useState(initialState);

  return (
    <Navbar.Link
      href={href}
      className={`group relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ color: isHovered ? 'white' : '#ffa000' }}
    >
      <span className="relative inline-block px-1">
        <span>{children}</span>
        <span
          className={`absolute left-0 -bottom-1 h-[2px] w-full origin-left bg-gradient-to-r from-amber-400 via-red-400 to-pink-500 transition-transform duration-300 ease-out ${isHovered ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
        />
      </span>
    </Navbar.Link>
  );
};

export default HoverLink;