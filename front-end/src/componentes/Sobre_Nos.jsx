import React from 'react';
import './Sobre_Nos.css';

const SobreNos = () => {
  return (
    <div className='Body'>
      <h1 className="text-center">Nossa História</h1>
      <p className="text-center">
       Fundado em 2012, o Milanese Maison nasceu do sonho de Ricarte, que sempre acreditou que a boa comida tem o poder
       de unir as pessoas. Inspirado pelos sabores autênticos de [cozinha principal do restaurante], nosso restaurante 
       começou como um pequeno espaço familiar, onde cada prato era preparado com carinho e tradição. Com o passar dos 
       anos, nosso compromisso com a qualidade e o sabor nos tornou um ponto de referência para os amantes da gastronomia. Mantemos viva a essência das receitas caseiras, ao mesmo tempo em que inovamos para surpreender nossos clientes. Cada ingrediente é cuidadosamente selecionado, garantindo que cada refeição seja uma experiência inesquecível.  
       Hoje, o Milanese Maison continua sendo um lugar onde amigos e famílias se reúnem para celebrar momentos especiais. 
       Nossa equipe se dedica a oferecer não apenas pratos saborosos, mas também um ambiente acolhedor, onde todos se sintam em casa.  
       Venha fazer parte da nossa história e descubra o sabor que nos tornou um clássico!
      </p>
      <div className='Box_carousel'>
        <div className="carousel">
          <div className="slides">
            <input type="radio" name="carousel" id="slide1" defaultChecked />
            <input type="radio" name="carousel" id="slide2" />
            <input type="radio" name="carousel" id="slide3" />

            <div className="images">
              <div className="image" style={{ backgroundImage: "url('https://www.viajali.com.br/wp-content/uploads/2023/08/restaurantes-fortaleza-02.png')" }}></div>
              <div className="image" style={{ backgroundImage: "url('https://static.vecteezy.com/ti/fotos-gratis/p2/12718920-cozinheiros-e-chefs-de-equipe-preparando-a-refeicao-gr%C3%A1tis-foto.JPG')" }}></div>
              <div className="image" style={{ backgroundImage: "url('https://img.freepik.com/fotos-premium/retrato-de-uma-familia-feliz-comendo-em-um-restaurante_700226-3499.jpg')" }}></div>
            </div>
          </div>
          <div className="navigation">
            <label htmlFor="slide1"></label>
            <label htmlFor="slide2"></label>
            <label htmlFor="slide3"></label>
          </div>
        </div>
      </div>
    </div>
    
);
};

export default SobreNos;
