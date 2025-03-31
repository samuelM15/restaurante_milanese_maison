import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './componentes.css';

const Entrada = () => {
  const [menuEntrada, setMenuEntrada] = useState({
    entrada:[],
  });

  useEffect (()=>{
    axios.get('http://localhost:3000/api/produtos')
    .then(entr =>{
      const entradas = ({
        entrada:[]
      });

      entr.data.forEach(valor=>{
        if (!entradas[valor.categoria]) {
          entradas[valor.categoria] = [];
        }
        entradas[valor.categoria].push(valor);
      })

      setMenuEntrada(entradas);
    })
    .catch(error =>{
      console.log('Erro ao buscar pratos de entrada', error);
    });

  }, [])

  return (
    <div className="contain">
      <div className='contain-2'>
        <h2 className='categoria'>Pratos de entrada</h2>
        <ul>
          {menuEntrada.entrada?.map((item) => (
              <li key={item.id}>
                  {item.nome_produto} ---- <span>R$ {item.preco.toFixed(2)}</span>
              </li>
          ))}
        </ul>
      </div>
      <div className='Image2'></div>
    </div>
  );
};

export default Entrada;