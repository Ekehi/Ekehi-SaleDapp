import React, { useState } from 'react';
import { Navbar } from 'flowbite-react'; 

const HoverLink = ({ children, href, className, initialState = false }) => {
  const [isHovered, setIsHovered] = useState(initialState);

  const handleHover = () => setIsHovered(!isHovered);

  return (
    <Navbar.Link href={href} 
    className={className} 
    onMouseOver={handleHover} 
    onMouseOut={handleHover} 
    style={{color: isHovered ? 'white' : '#ffa000', }}
    >
      {children}
    </Navbar.Link>
  );
};

export default HoverLink;