import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './componentes.css';

const Bebidas = () => {
    const [menuBebidas, setMenuPrincipal] = useState({
      bebida:[],
    });

    useEffect (()=>{
      axios.get('http://localhost:3000/api/produtos')
      .then(bebid =>{
        const bebidas = ({
          bebida:[]
        });

        bebid.data.forEach(valor=>{
          if (!bebidas[valor.categoria]) {
            bebidas[valor.categoria] = [];
          }
          bebidas[valor.categoria].push(valor);
        })

        setMenuPrincipal(bebidas);
      })
      .catch(error =>{
        console.log('Erro ao buscar pratos de entrada', error);
      });

    }, [])

  return (
    <div className="contain">
      <div className='contain-2'>
        <h2 className='categoria'>Especiais</h2>
        <ul>
          {menuBebidas.bebida?.map((item) => (
            <li key={item.id}>
                {item.nome_produto} ---- <span>R$ {item.preco.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='Image5'></div>
    </div>
  );
};

export default Bebidas;