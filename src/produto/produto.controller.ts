import { Controller, Get, Post, Body, Patch, Param, Delete, Headers, UnauthorizedException } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('produto')
export class ProdutoController {
  constructor(
    private readonly produtoService: ProdutoService, 
    private readonly authService: AuthService 
  ) {}

  @Post()
  create(@Body() createProdutoDto: CreateProdutoDto, @Headers('x-api-token') token: string) {
    if(!token) throw new UnauthorizedException('Token não enviado');

    this.authService.validateToken(token);
    return this.produtoService.create(createProdutoDto);
  }

  @Get()
  findAll(@Headers('x-api-token') token: string) {
    if(!token) throw new UnauthorizedException('Token não enviado');

    this.authService.validateToken(token);

    return this.produtoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Headers('x-api-token') token: string) {
    if(!token) throw new UnauthorizedException('Token não enviado');

    this.authService.validateToken(token);
    return this.produtoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto, @Headers('x-api-token') token: string) {
    if(!token) throw new UnauthorizedException('Token não enviado');

    this.authService.validateToken(token);
    return this.produtoService.update(+id, updateProdutoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Headers('x-api-token') token: string) {
    if(!token) throw new UnauthorizedException('Token não enviado');

    this.authService.validateToken(token);
    return this.produtoService.remove(+id);
  }
}
