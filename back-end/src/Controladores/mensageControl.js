const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getAllmensagens = async (req, res)=>{
    try{
        const takeMensage = await prisma.mensagem.findMany();
        res.status(200).json(takeMensage);
    }catch(error){
        console.log('Erro ao buscar mensagem',error);
        res.status(500).json({error:"Erro ao buscar mensagem"});
    }
}

const createMensage = async (req, res)=>{
    const {e_mail,mensagem,usuario} = req.body;
    try{
        const uploadMensage = await prisma.mensagem.create({
            data:{
                email: e_mail,
                historia: mensagem,
                nomecliente: usuario
            }
        });
        res.status(201).json(uploadMensage);
    }catch(error){
        console.log('Erro ao enviar a mensagem',error);
        res.status(500).json({error:"Erro ao enviar a mensagem"});
    }
}

module.exports = {getAllmensagens,createMensage};