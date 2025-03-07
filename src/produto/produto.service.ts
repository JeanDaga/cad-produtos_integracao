import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {

private produtos : Produto[] = [
  {
    id:1,
    nome:'RTX 7090Ti super ProMax',
    preco: 30000,
    qtdStock: 4,
    categoria:'Placa de Video'
  },
  {
    id:2,
    nome:'mouse',
    preco:50,
    qtdStock: 45,
    categoria:'Perefericos'
  }
];

  create(createProdutoDto: CreateProdutoDto) {
    return 'This action adds a new produto';
  }

  findAll() {
    return this.produtos;
  }

  findOne(id: number): Produto | undefined {
      return this.produtos.find(produto => produto.id === id);
    
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
