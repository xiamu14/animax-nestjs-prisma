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
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEpisodeInput, Episode, UpdateEpisodeInput } from './dto';

@ApiTags('episode')
@Controller('episode')
export class EpisodeController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('/list')
  @ApiResponse({ type: [Episode] })
  async getById(@Query('animeId') animeId: string) {
    const idInt = parseInt(animeId, 10);
    return await this.prisma.episodes.findMany({
      where: { animeId: idInt },
    });
  }

  @Post('create')
  async create(@Body() createEpisodeInput: CreateEpisodeInput) {
    return await this.prisma.episodes.create({
      data: {
        index: createEpisodeInput.index,
        cover: createEpisodeInput.cover,
        videoUrl: createEpisodeInput.videoUrl,
        anime: {
          connect: {
            id: createEpisodeInput.animeId,
          },
        },
      },
    });
  }

  @Put('update')
  async update(@Body() updateEpisodeInput: UpdateEpisodeInput) {
    return await this.prisma.episodes.update({
      where: {
        id: updateEpisodeInput.id,
      },
      data: {
        index: updateEpisodeInput.index,
        cover: updateEpisodeInput.cover,
        videoUrl: updateEpisodeInput.videoUrl,
      },
    });
  }

  @Delete('/delete/:id')
  async deleteById(@Param('id') id: string) {
    const idInt = parseInt(id, 10);
    await this.prisma.episodes.delete({
      where: { id: idInt },
    });
    return { msg: 'Successfully deleted', data: null };
  }
}
