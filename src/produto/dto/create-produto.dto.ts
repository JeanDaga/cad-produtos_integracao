import { IsInt, IsString } from "class-validator";


export class CreateProdutoDto {
    @IsString()
    nome: string;

    @IsInt()
    preco: number;

    @IsInt()
    qtdStock: number;

    @IsString()
    categoria: string;
}
