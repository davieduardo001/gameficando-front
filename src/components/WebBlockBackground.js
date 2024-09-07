import React from 'react';

import '../styles/LandingPage.css'

const WebBlockBackground = ({ backgroundImage, children, minHeight = '100vh', padding = '0' }) => {
    const blockStyle = {
        backgroundImage: backgroundImage
            ? `url(${require(`../assets/images/${backgroundImage}`)})`
            : `url(${require('../assets/images/default.jpg')})`,
        backgroundSize: 'contain',  // Makes sure the background covers the entire area
        backgroundPosition: 'center',  // Centers the image
        backgroundRepeat: 'no-repeat',  // Prevents tiling of the background image
        minHeight: minHeight,
        padding: padding,
    };

    return (
        <div className="web-block-with-background" style={blockStyle}>
        {children}
        </div>
    );
};

export default WebBlockBackground;
