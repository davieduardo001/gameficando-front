import React from 'react';

const WebBlock = ({ backgroundColor, children, minHeight = '100vh', padding = '0' }) => {
    const blockStyle = {
        backgroundColor: backgroundColor || '',
        minHeight: minHeight,
        padding: padding,
    };

    return (
        <div className="web-block" style={blockStyle}>
        {children}
        </div>
    );
};

export default WebBlock;
