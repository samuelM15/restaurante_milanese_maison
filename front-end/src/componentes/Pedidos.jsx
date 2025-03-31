// src/ProductForm.js
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Modal, Button} from 'react-bootstrap';
import './Pedidos.css';

const ProductForm =() => {
    //useState do usuario---------------------------
    const [order, setOrder] = useState({
        name: '',
        tambleNumber: '',
        items: []
    })

    //UseStates das listas acima----------------------------------
    const [useProdutos, setUseProdutos] = useState({});
    //setShows de cada opção----------------------------------------
    const [ProdutosModal, setProdutosModal] = useState(false);

    const [quantidade, setQuantidade] = useState(1);

    const [categoriaAtual, setCategoriaAtual] = useState('');
    const [itemAtual, setItematual] = useState('');


   //Get no banco de daods dos produtos e suas respectivas categorias------
   useEffect(() => {
    axios.get('http://localhost:3000/api/produtos')
        .then(response => {
            
            console.log("Dados recebidos da API:", response.data);
            
            const categorias = {
                entrada: {},
                sobremesa: {},
                bebida: {},
                prato_principal: {},
                moda_da_casa: {}
            };

            response.data.forEach(item => {
                if (categorias[item.categoria]){
                    categorias[item.categoria][item.nome_produto] = item.preco;
                }
            });

            console.log("Produtos organizados:", categorias);
            setUseProdutos(categorias);

            console.log("Atualização do estado:", categorias);
        })
        .catch(error =>{
            console.error("Erro ao buscar produtos:", error);
        });
    }, []);

    //botões do form para pop-ups------------------------------------------
    function handleCategoriaClick(categoria) {
        console.log("Categoria selecionada:", categoria);
        setCategoriaAtual(categoria);
        setItematual('');
        setQuantidade(1);
        setProdutosModal(true);
    }


    const handleAddItem = () => {
        if(!itemAtual || quantidade<=0){
            alert('Você precisa adicionar um produto e uma quantidade para effetuar a compra');
            return;
        }

        const atualizarItens = [...order.items];
        const existingItem = atualizarItens.findIndex(item=> item.categoria === categoriaAtual && item.nome_produto === itemAtual);
        
        if (existingItem !== -1) {
            atualizarItens[existingItem].quantidade += quantidade;
        } else {
            atualizarItens.push({nome_produto:itemAtual, quantidade:quantidade, categoria: categoriaAtual});
        }
    
        setOrder({ 
            ...order, 
            items: atualizarItens 
        }); 

        setProdutosModal(false);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const pedido = {
            nome: order.name,
            mesa: order.tambleNumber,
            itens: order.items
        };
        console.log('Pedidos enviados para a API:', pedido);

        axios.post('http://localhost:3000/api/pedidos', pedido)
        .then(result =>{
            alert(`Pedido enviado com sucesso! Valor total: R$ ${result.data.total.toFixed(2)}`);
            setOrder({
                name: '',
                tambleNumber: '',
                items: []
            });
        }) 
        .catch(error =>{
            console.log('Ocorreu um erro no envio do pedido!', error);
            alert('Erro ao efetuar a compra!!');
        });
    };

    return (
        <section className='secao_pedidos '>
            <div className='body'>
                <h1>Selecione o Produto e a Quantidade</h1>

                <form onSubmit={handleSubmit} className='form'>
                    <div className='box_bados_user'>
                        <input 
                            type="text" 
                            value={order.name} 
                            onChange={(e) => setOrder({...order,name: e.target.value})} 
                            placeholder='Nome do cliente'
                        />

                        <input 
                            type="text" 
                            value={order.tambleNumber} 
                            onChange={(e) => setOrder({...order,tambleNumber: e.target.value})} 
                            placeholder='Mesa do cliente'
                        />
                    </div>

                        <div className='box_Categorias'>
                            {Object.keys(useProdutos).map((categoria) =>(
                                <Button key={categoria} className='button_pedidos' onClick={() => handleCategoriaClick(categoria)}>
                                    {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
                                </Button>
                            ))}
                        </div>
                        <button type="submit">Enviar pedido</button>
                </form>


                {/* Modal Entradas */}
                <Modal show={ProdutosModal} onHide={() => setProdutosModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Selecione o produto e a quantidade</Modal.Title>
                    </Modal.Header>
                        <Modal.Body>
                            <div className='Box_produto'>
                                <label htmlFor='entradaSelect'>Produtos:</label>
                                <select 
                                    className='produtoSelect' 
                                    name='produtoSelect' 
                                    value={itemAtual} 
                                    onChange={(e) => setItematual(e.target.value)}
                                    disabled={!useProdutos[categoriaAtual] || Object.keys(useProdutos[categoriaAtual]).length === 0}
                                >
                                    <option value="">Selecione um item</option>
                                    {(useProdutos[categoriaAtual]? Object.entries(useProdutos[categoriaAtual]) : []).map(([nome, preco]) => (
                                        <option key={nome} value={nome}>
                                            {nome} - R${preco.toFixed(2)}
                                        </option>
                                    ))}
                                    {console.log(useProdutos)}
                                </select>
                            </div>

                            <div className='Box_quantidade'>
                                <label> Quantidade:</label>
                                <input 
                                    type="number" 
                                    name='quantidade'
                                    value={quantidade} 
                                    onChange={(e) => setQuantidade(parseInt(e.target.value))} 
                                    min="1"
                                />
                            </div>

                            <Modal.Footer>
                                <Button className='btn-secondary' variant='secondary' onClick={()=> setProdutosModal(false)}>
                                    Cancelar
                                </Button>
                                <Button className='btn-primary' variant='primary' onClick={handleAddItem}>
                                    Adicionar items ao pedido
                                </Button>
                            </Modal.Footer>
                        </Modal.Body>
                </Modal>

            </div>
        </section>
    );
}

export default ProductForm;