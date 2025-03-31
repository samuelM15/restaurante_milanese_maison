import React, { useState } from 'react';
import Entrada from './Menu_componentes/Entrada';
import Sobremesas from './Menu_componentes/Sobremesas';
import Bebidas from './Menu_componentes/Bebida';
import PratosPrincipais from './Menu_componentes/PratoPrincipal';
import ModaCasa from './Menu_componentes/ModaCasa';
import './Menu.css'; //

const Menu = () => {
  const [paginaAtual, setPaginaAtual] = useState('cafes');

  const renderizarPagina = () => {
    switch (paginaAtual) {
      case 'entrada':
        return <Entrada/>;
      case 'sobremesas':
        return <Sobremesas />;
      case 'bebidas':
        return <Bebidas />;
      case 'PratosPrincipais':
        return <PratosPrincipais />;
      case 'moda':
        return <ModaCasa />;
      default:
        return <Entrada/>;
    }
  };

  return (
    <div className='body-menu'>
      <nav className="Navbar">
        <div className="container-fluid">
          <div className="nav-links">
            <button onClick={() => setPaginaAtual('entrada')}>Entradas</button>
            <button onClick={() => setPaginaAtual('sobremesas')}>Sobremesas</button>
            <button onClick={() => setPaginaAtual('bebidas')}>Bebidas</button>
            <button onClick={() => setPaginaAtual('PratosPrincipais')}>Principais</button>
            <button onClick={() => setPaginaAtual('moda')}>Moda da casa</button>
          </div>
        </div>
      </nav>

      <div className="contain">{renderizarPagina()}</div>
    </div>
  );
};

export default Menu;