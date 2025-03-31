/*
  Warnings:

  - You are about to drop the `Cliente` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Mensagem` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pedido` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Produto` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Contem" DROP CONSTRAINT "Contem_Num_pedido_fkey";

-- DropForeignKey
ALTER TABLE "Contem" DROP CONSTRAINT "Contem_nome_contem_fkey";

-- DropForeignKey
ALTER TABLE "Mensagem" DROP CONSTRAINT "Mensagem_nome_cliente_fkey";

-- DropForeignKey
ALTER TABLE "Pedido" DROP CONSTRAINT "Pedido_nome_pedido_fkey";

-- DropTable
DROP TABLE "Cliente";

-- DropTable
DROP TABLE "Contem";

-- DropTable
DROP TABLE "Mensagem";

-- DropTable
DROP TABLE "Pedido";

-- DropTable
DROP TABLE "Produto";

-- CreateTable
CREATE TABLE "produtos" (
    "idprodutos" SERIAL NOT NULL,
    "nome_produto" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "produtos_pkey" PRIMARY KEY ("idprodutos")
);

-- CreateTable
CREATE TABLE "mensagem" (
    "idmenssagem" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "historia" TEXT NOT NULL,
    "nomecliente" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "mensagem_pkey" PRIMARY KEY ("idmenssagem")
);

-- CreateTable
CREATE TABLE "pedido" (
    "idpedido" SERIAL NOT NULL,
    "total" TEXT NOT NULL,
    "nomepedido" TEXT NOT NULL,
    "items" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "pedido_pkey" PRIMARY KEY ("idpedido")
);
