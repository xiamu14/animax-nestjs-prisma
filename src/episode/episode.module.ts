import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { EpisodeController } from './episode.controller';

@Module({
  controllers: [EpisodeController],
  providers: [PrismaService],
})
export class EpisodeModule {}
