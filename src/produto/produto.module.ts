import { Module } from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { PrismaService } from 'prisma/prisma.service';
import { AuthService } from 'src/auth/auth.service';

@Module({
  controllers: [ProdutoController],
  providers: [ProdutoService, PrismaService, AuthService],
})
export class ProdutoModule {}
