-- CreateTable
CREATE TABLE "Produto" (
    "id" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "qtdStock" INTEGER NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);
