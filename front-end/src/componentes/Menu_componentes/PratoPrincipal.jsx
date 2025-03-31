import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './componentes.css';

const PratosPrincipais = () => {

  const [menuPrincipal, setMenuPrincipal] = useState({
    prato_principal:[],
  });

  useEffect (()=>{
    axios.get('http://localhost:3000/api/produtos')
    .then(princ =>{
      const principais = ({
        prato_principal:[]
      });

      princ.data.forEach(valor=>{
        if (!principais[valor.categoria]) {
          principais[valor.categoria] = [];
        }
        principais[valor.categoria].push(valor);
      })

      setMenuPrincipal(principais);
    })
    .catch(error =>{
      console.log('Erro ao buscar pratos de entrada', error);
    });

  }, [])

  return (
    <div className="contain ">
      <div className='contain-2'>
        <h2 className='categoria'>Pratos principais</h2>
        <ul>
          {menuPrincipal.prato_principal?.map((item) => (
            <li key={item.id}>
                {item.nome_produto} ---- <span>R$ {item.preco.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='Image4'></div>
    </div>
  );
};

export default PratosPrincipais;