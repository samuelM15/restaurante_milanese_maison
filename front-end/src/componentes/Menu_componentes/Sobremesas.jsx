import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './componentes.css';

const Sobremesas = () => {
  const [menuSobremesas, setMenuPrincipal] = useState({
    sobremesa:[],
  });

  useEffect (()=>{
    axios.get('http://localhost:3000/api/produtos')
    .then(sobrem =>{
      const sobremesas = ({
        sobremesa:[]
      });

      sobrem.data.forEach(valor=>{
        if (!sobremesas[valor.categoria]) {
          sobremesas[valor.categoria] = [];
        }
        sobremesas[valor.categoria].push(valor);
      })

      setMenuPrincipal(sobremesas);
    })
    .catch(error =>{
      console.log('Erro ao buscar pratos de entrada', error);
    });

  }, [])

  return (
    <div className="contain ">
      <div className='contain-2'>
        <h2 className='categoria'>Sobremesas</h2>
        <ul>
          {menuSobremesas.sobremesa?.map((item) => (
            <li key={item.id}>
                {item.nome_produto} ---- <span>R$ {item.preco.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className='Image3'></div>
    </div>
  );
};

export default Sobremesas;