import { IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";


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
