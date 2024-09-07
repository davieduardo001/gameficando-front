import React, { useState, useEffect } from 'react';

import Block from '../components/WebBlock';
import BackgroundBlock from '../components/WebBlockBackground';
import MobileBlock from '../components/MobileBlock';
import SimpleCard from '../components/SimpleCard';
import '../styles/LandingPage.css'

import logoImage from '../assets/images/logo_inicial.png';

const LandingPage = () => {

  // RULES
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000); // Adjust breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <dev>
    

      {/* primeiro bloco */}
      <BackgroundBlock backgroundImage="background1.png" minHeight='100vh'>
        
        <img src={logoImage} className='header' alt="Logo"/>
        <h2 className='h2-white'>Sua jornada de diversão e aprendizado começa gameficando!</h2>
      </BackgroundBlock>

      {/* segundo bloco */}
      <Block minHeight="50vh">
        
        <h2 className='h2-white'>Benefícios Incluídos no Curso</h2>
        
        <div className=''>
          <SimpleCard  image="card-material-didatico.png" title="Materiais Didáticos" text="Materiais e suporte estarão disponíveis para acompanhar as aulas." />
          <SimpleCard  image="card-online.png" title="Online" text="Totalmente online! Aprenda de forma remota!" />
          <SimpleCard  image="card-certificado.png" title="Certificado" text="Os alunos terão um Certificado ao finalizar o curso" />
        </div>

      </Block>

      {/* terceiro bloco */}
      {isMobile ? (
        <MobileBlock backgroundColor="#FA8072">
          <h2 className='' >TESTE MOBILE</h2>
        </MobileBlock>
      ) : (
        <Block backgroundImage="fundo2.png">
          <h2 className='' style={paddingBloco3}>Conheça sua Jornada</h2>
        </Block>
      )}

    </dev>
  );
};

const paddingBloco3 = {
  padding: '10vw'
}

export default LandingPage;
