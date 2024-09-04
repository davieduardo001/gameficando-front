import React from 'react';
import '../styles/Block.css';

const Block = ({ backgroundColor, backgroundImage, children, minHeight = '100vh', padding = '0' }) => {
    let backgroundStyle;
  
    if (backgroundImage) {
      // Verifica se backgroundImage é um caminho local ou uma URL externa
      const imageUrl = backgroundImage.startsWith('http') ? backgroundImage : require(`../assets/images/${backgroundImage}`);
      backgroundStyle = {
        backgroundImage: `url(${imageUrl})`,
      };
    } else if (backgroundColor) {
      backgroundStyle = {
        backgroundColor: backgroundColor,
      };
    } else {
      backgroundStyle = {
        backgroundColor: 'white',
      };
    }
  
    const blockStyle = {
      ...backgroundStyle,
      minHeight: minHeight,
      padding: padding,
      width: '100vw',
    };
  
    return (
      <div className="block" style={blockStyle}>
        {children}
      </div>
    );
  };
  
export default Block;