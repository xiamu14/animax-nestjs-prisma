import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { AnimeController } from './anime.controller';
import { AnimeService } from './anime.service';

@Module({
  controllers: [AnimeController],
  providers: [AnimeService, PrismaService],
})
export class AnimeModule {}
