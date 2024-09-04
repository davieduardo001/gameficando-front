import React from 'react';

import '../styles/SimpleCard.css'

const SimpleCard = ({ image, title, text }) => {
  
  return (
    <div style={cardStyle}>
      <img src={require(`../assets/images/${image}`)} style={cardImg}/>
      <h2 className='cardTitle'>{title}</h2>    
      <p className='textStyle'>{text}</p>  
    </div>
  );
};

const cardStyle = {
  border: '2px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  maxWidth: '300px',
  margin: '16px auto',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

const cardImg = { 
  maxWidth: '100px'
}
  
export default SimpleCard;