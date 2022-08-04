import { PrismaService } from './../prisma/prisma.service';
import { Controller, Get, Param } from '@nestjs/common';
import { Anime } from '@prisma/client';
import { ApiResponse } from '@nestjs/swagger';
import { AnimeDto, AnimeWithEpisodesDto } from './dto';

@Controller('anime')
export class AnimeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/popular')
  @ApiResponse({ type: AnimeDto })
  async getPopular() {
    return await this.prisma.anime.findFirst();
  }

  @Get(':id')
  @ApiResponse({ type: AnimeWithEpisodesDto })
  async getById(@Param('id') id: string) {
    const idInt = parseInt(id, 10);
    return await this.prisma.anime.findUnique({
      where: { id: idInt },
      include: {
        episodes: true,
      },
    });
  }
}
