const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getPedidos = async(req, res)=>{
    try{
        const produtos = await prisma.pedido.findMany();
        res.status(200).json(produtos);
    }catch(error){
        console.log("Erro ao buscar produtos",error);
        res.status(500).json({error:"Erro ao buscar produtos"});
    }
}

const addPedidos = async(req, res) => {
    console.log("Requisição recebida!", req.method, req.body);
    const { nome, mesa, itens } = req.body;

    if (!Array.isArray(itens) || itens.length === 0) {
        return res.status(400).json({ error: "Lista de itens inválida ou vazia." });
    }

    try {
        // Obter os produtos do banco
        const itemPedidos = await prisma.produtos.findMany();

        // Calcular o precofinal com base nos itens do pedido
        const precofinal = itens.reduce((total, item) => {
            const itemPedido = itemPedidos.find(menu =>
                menu.categoria === item.categoria && menu.nome_produto === item.nome_produto
            );
            const preco = itemPedido ? itemPedido.preco : 0;
            return total + (preco * item.quantidade);
        }, 0);

        // Criar o novo pedido
        const novoPedido = await prisma.pedido.create({
            data: {
                mesa,
                nome,
                total: precofinal,  // Corrigido: garantindo que o total seja inserido
                items: JSON.stringify(itens), // Certifique-se de que os itens são passados como JSON
            },
        });

        console.log('Dados adicionados na API',{
            mesa,
            nome,
            total: precofinal,  // Corrigido: garantindo que o total seja inserido
            items: JSON.stringify(itens), // Certifique-se de que os itens são passados como JSON
        })

        // Retornar a resposta com o pedido criado
        res.status(201).json(novoPedido);
    } catch (error) {
        console.log("Erro ao fazer pedido", error);
        res.status(500).json({ error: "Erro ao fazer pedido" });
    }
};

module.exports = {getPedidos, addPedidos};