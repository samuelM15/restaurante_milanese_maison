-- CreateTable
CREATE TABLE "Cliente" (
    "nome" TEXT NOT NULL,
    "mesa" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("nome")
);

-- CreateTable
CREATE TABLE "Produto" (
    "nome_produto" TEXT NOT NULL,
    "preco" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("nome_produto")
);

-- CreateTable
CREATE TABLE "Mensagem" (
    "Email" TEXT NOT NULL,
    "historia" TEXT NOT NULL,
    "nome_cliente" TEXT NOT NULL,

    CONSTRAINT "Mensagem_pkey" PRIMARY KEY ("Email")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "total" TEXT NOT NULL,
    "numero_pedido" TEXT NOT NULL,
    "nome_pedido" TEXT NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("numero_pedido")
);

-- CreateTable
CREATE TABLE "Contem" (
    "quantidade" TEXT NOT NULL,
    "nome_contem" TEXT NOT NULL,
    "Num_pedido" TEXT NOT NULL,

    CONSTRAINT "Contem_pkey" PRIMARY KEY ("nome_contem","Num_pedido")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_nome_key" ON "Cliente"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Produto_nome_produto_key" ON "Produto"("nome_produto");

-- CreateIndex
CREATE UNIQUE INDEX "Mensagem_Email_key" ON "Mensagem"("Email");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_numero_pedido_key" ON "Pedido"("numero_pedido");

-- AddForeignKey
ALTER TABLE "Mensagem" ADD CONSTRAINT "Mensagem_nome_cliente_fkey" FOREIGN KEY ("nome_cliente") REFERENCES "Cliente"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_nome_pedido_fkey" FOREIGN KEY ("nome_pedido") REFERENCES "Cliente"("nome") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contem" ADD CONSTRAINT "Contem_nome_contem_fkey" FOREIGN KEY ("nome_contem") REFERENCES "Produto"("nome_produto") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Contem" ADD CONSTRAINT "Contem_Num_pedido_fkey" FOREIGN KEY ("Num_pedido") REFERENCES "Pedido"("numero_pedido") ON DELETE RESTRICT ON UPDATE CASCADE;
