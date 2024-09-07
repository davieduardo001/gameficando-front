import React from 'react';

const MobileBlock = ({ backgroundColor, children, minHeight = '100vh', padding = '0' }) => {
    const blockStyle = {
        backgroundColor: backgroundColor || '#fff', // Solid color for mobile
        minHeight: minHeight,
        padding: padding,
        width: '100vw',
    };

    return (
        <div className="mobile-block" style={blockStyle}>
        {children}
        </div>
    );
};

export default MobileBlock;
