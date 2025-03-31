import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './componentes.css';

const ModaCasa = () => {

  const [menuModa, setMenuModa] = useState({
    moda_da_casa:[],
  });

  useEffect (()=>{
    axios.get('http://localhost:3000/api/produtos')
    .then(moda =>{
      const modaCasa = ({
        moda_da_casa:[]
      });

      moda.data.forEach(valor=>{
        if (!modaCasa[valor.categoria]) {
          modaCasa[valor.categoria] = [];
        }
        modaCasa[valor.categoria].push(valor);
      })

      setMenuModa(modaCasa);
    })
    .catch(error =>{
      console.log('Erro ao buscar pratos de entrada', error);
    });

  }, [])

  return (
    <div className="contain">
      <div className='contain-2'>
        <h2 className='categoria'>A moda da casa</h2>
        <ul>
          {menuModa.moda_da_casa?.map((item) => (
            <li key={item.id}>
                {item.nome_produto} ---- <span>R$ {item.preco.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='Image1'></div>
    </div>
  );
};

export default ModaCasa;