import React from 'react';
import Block from '../components/Block';
import '../styles/landingPageStyle.css'

import logoImage from '../assets/images/logo_inicial.png';

const LandingPage = () => {
  return (
    <div>
      <Block backgroundImage="fundo_bloco_1.png">
        
        <img src={logoImage} className="logo-incial" alt="Logo"/>
        <h2 className='h2-white'>Sua jornada de diversão e aprendizado começa gameficando!</h2>

      </Block>

      <Block backgroundColor="#f8b400">Block 1 (Cor de fundo)</Block>
      <Block backgroundColor="#28a745">Block 3 (Cor de fundo)</Block>
      <Block>Block 4 (Sem fundo, cor padrão branca)</Block>
      <Block backgroundImage="fundo_bloco_1.png">Block 5 (Imagem de fundo)</Block>
      <Block backgroundColor="#007bff">Block 6 (Cor de fundo)</Block>
      <Block backgroundImage="fundo_bloco_1.png">Block 7 (Imagem de fundo)</Block>
    </div>
  );
};

export default LandingPage;
