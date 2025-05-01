import { IsInt, IsString } from "class-validator";
import { Type } from "class-transformer";


export class CreateProdutoDto {
    @IsString({ message: 'Deve ser um nome válido'})
    nome: string;

    @IsInt({ message: 'Deve ser um preço válido'})
    preco: number;

    @IsInt({ message: 'Deve ser um valor de estoque válido'})
    qtdStock: number;

    @IsString({ message: 'Deve ser uma categoria válida'})
    categoria: string;
}
