import { PrismaService } from './../prisma/prisma.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AnimeDto, AnimeWithEpisodesDto, CreateAnimeInput } from './dto';

@ApiTags('anime')
@Controller('anime')
export class AnimeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/popular')
  @ApiResponse({ type: AnimeDto })
  async getPopular() {
    return await this.prisma.anime.findFirst();
  }

  @Get('/list')
  @ApiQuery({
    name: 'take',
    required: false,
    type: 'string',
  })
  @ApiQuery({
    name: 'skip',
    required: false,
    type: 'string',
  })
  @ApiResponse({ type: [AnimeWithEpisodesDto] })
  async getList(@Query('skip') skip?: string, @Query('take') take?: string) {
    if (take && skip) {
      return await this.prisma.anime.findMany({
        skip: Number(skip),
        take: Number(take),
        include: {
          episodes: true,
        },
      });
    }
    return await this.prisma.anime.findMany();
  }

  @Get('/:id')
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

  @Post('create')
  async create(@Body() createAnimeInput: CreateAnimeInput) {
    console.log('---', createAnimeInput);
    return await this.prisma.anime.create({
      data: createAnimeInput,
    });
  }

  @Put('update')
  async update(@Body() updateAnimeInput: AnimeDto) {
    const cacheInput = { ...updateAnimeInput };
    delete cacheInput.id;
    return await this.prisma.anime.update({
      where: {
        id: updateAnimeInput.id,
      },
      data: cacheInput,
    });
  }

  @Delete('/delete/:id')
  async deleteById(@Param('id') id: string) {
    const idInt = parseInt(id, 10);
    await this.prisma.anime.delete({
      where: { id: idInt },
    });
    return { msg: 'Successfully deleted', data: null };
  }
}
