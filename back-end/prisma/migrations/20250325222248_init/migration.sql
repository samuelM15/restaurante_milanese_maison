/*
  Warnings:

  - You are about to drop the column `nomepedido` on the `pedido` table. All the data in the column will be lost.
  - Added the required column `mesa` to the `pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome` to the `pedido` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `total` on the `pedido` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "pedido" DROP COLUMN "nomepedido",
ADD COLUMN     "mesa" TEXT NOT NULL,
ADD COLUMN     "nome" TEXT NOT NULL,
DROP COLUMN "total",
ADD COLUMN     "total" DOUBLE PRECISION NOT NULL;
