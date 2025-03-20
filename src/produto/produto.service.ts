import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Produto } from './entities/produto.entity';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class ProdutoService {

constructor (private prisma: PrismaService){

}



  async create(createProdutoDto: CreateProdutoDto): Promise<Produto> {
    const produto = await this.prisma.produto.create({
      data: createProdutoDto
    })
    return this.mapToEntity(produto);
  }

  async findAll(): Promise<Produto[]> {
    const produtos = await this.prisma.produto.findMany();
    return produtos.map(produto => this.mapToEntity(produto));
  }

  private mapToEntity(produto: any): Produto{
    return{
      id: produto.id,
      nome: produto.nome,
      preco: produto.preco,
      qtdStock: produto.qtdStock,
      categoria: produto.categoria,
    }
  }

  async findOne(id: number): Promise<Produto | null> {
    const produto = 
      await this.prisma.produto.findUnique({where: {id}});
    return produto ? this.mapToEntity(produto) : null;
  }

  update(id: number, updateProdutoDto: UpdateProdutoDto) {
    return `This action updates a #${id} produto`;
  }

  remove(id: number) {
    return `This action removes a #${id} produto`;
  }
}
