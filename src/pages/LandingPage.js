import React from 'react';
import Block from '../components/Block';
import '../styles/landingPageStyle.css'

import logoImage from '../assets/images/logo_inicial.png';

const LandingPage = () => {
  return (
    <div>

      {/* primeiro bloco */}
      <Block backgroundImage="fundo_bloco_1.png">
        
        <img src={logoImage} className="logo-incial" alt="Logo"/>
        <h2 className='h2-white'>Sua jornada de diversão e aprendizado começa gameficando!</h2>

      </Block>

      {/* segundo bloco */}
      <Block backgroundColor="#fff">
        
        <h2 className='h2-mine-brown'>Benefícios Incluídos no Curso</h2>
        
        {/* <CardSimples image="" title="" text=""></CardSimples> */}

      </Block>


      <Block backgroundColor="#28a745">Block 3 (Cor de fundo)</Block>
      <Block>Block 4 (Sem fundo, cor padrão branca)</Block>
      <Block backgroundImage="fundo_bloco_1.png">Block 5 (Imagem de fundo)</Block>
      <Block backgroundColor="#007bff">Block 6 (Cor de fundo)</Block>
      <Block backgroundImage="fundo_bloco_1.png">Block 7 (Imagem de fundo)</Block>
    </div>
  );
};

export default LandingPage;
