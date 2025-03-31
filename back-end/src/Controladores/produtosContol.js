const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllProdutos = async (req, res) =>{
    try{
        const menuProdutos = await prisma.produtos.findMany();
        res.status(200).json(menuProdutos);
    } catch (error){
        res.status(500).json('Erro ao buscar dados dos produtos!');
    }
};

const addProdutos = async (req,res) =>{
    const { idprodutos, nome_produto, preco, categoria } = req.body;
    try{
        const produto = await prisma.produtos.create({
            data:{
                idprodutos,
                nome_produto,
                preco,
                categoria,
            }
        });
        res.status(201).json(produto)
    } catch(error){
        console.log('erro ao adicionar itens no menu!!',error);
        res.status(500).json({error:'Erro ao adicionar itens no menu!'});
    }
}

const updateProdutos = async (req,res) =>{
    const {id} = req.params;
    const {nome, preco, categoria} = req.body;
    
    try{
        const atualizarProduto = await prisma.produtos.update({
            where: {id: parseInt(id)},
            data:{nome, preco, categoria}
        })
        console.log('Produto atualizado com sucesso!!');
        res.status(200).json(atualizarProduto);
    } catch(error){
        console.log('Erro ao atualizar produto!!',error);
        res.status(500).json('Erro ao atualizar produtos!');
    }
}

const deleteProdutos = async(req,res) =>{
    const {id} = req.params;

    try{
        const deletando = await prisma.produtos.delete({
            where:{id: parseInt(id)}
        })
        res.status(204).end();
    } catch(error){
        console.log('Erro ao deletar Produto!!',error);
        res.status(500).json({error:'Falha ao deletar produto!'});
    }
}

module.exports = {getAllProdutos, addProdutos, updateProdutos, deleteProdutos};