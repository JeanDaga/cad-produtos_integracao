import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    const produtos = await this.prisma.produto.findMany({
      orderBy: [{
        id: 'asc'
      }]
    });
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
      /* IF produto = null return throw HTTP status 404 */
    if (produto === null) {
      throw new HttpException('NotFound', HttpStatus.NOT_FOUND);
    }
    return produto ? this.mapToEntity(produto) : null;
  }

  async update(id: number, updateProdutoDto: UpdateProdutoDto): Promise<Produto> {
    const produto = await this.prisma.produto.update({
      where: {id},
      data: updateProdutoDto
    })
    return this.mapToEntity(produto);
  }

  async remove(id: number):Promise<Produto> {
    const produto = await this.prisma.produto.delete({
      where:{id}
    })
    return this.mapToEntity(produto);
  }
}
