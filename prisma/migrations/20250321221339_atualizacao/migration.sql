/*
  Warnings:

  - The primary key for the `Produto` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Produto" DROP CONSTRAINT "Produto_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Produto_pkey" PRIMARY KEY ("id");
