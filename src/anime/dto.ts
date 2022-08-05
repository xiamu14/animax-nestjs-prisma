import { ApiProperty } from '@nestjs/swagger';
import { Episode } from '../episode/dto';

export class AnimeDto {
  @ApiProperty({ type: 'number' })
  id: number;

  @ApiProperty({ type: 'string' })
  name: string;

  @ApiProperty({ type: 'string' })
  author: string;

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  tags: string[];

  @ApiProperty({ type: 'string' })
  release: string;
  @ApiProperty({ type: 'number' })
  score: number;

  @ApiProperty({ type: 'string' })
  introduction: string;

  @ApiProperty({ type: 'string' })
  cover: string;

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  poster: string[];
}

export class AnimeWithEpisodesDto extends AnimeDto {
  @ApiProperty({ isArray: true, type: Episode })
  episodes: Episode[];
}

export class CreateAnimeInput {
  @ApiProperty({ type: 'string' })
  name: string;

  @ApiProperty({ type: 'string' })
  author: string;

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  tags: string[];

  @ApiProperty({ type: 'string' })
  release: string;

  @ApiProperty({ type: 'number' })
  score: number;

  @ApiProperty({ type: 'string' })
  introduction: string;

  @ApiProperty({ type: 'string' })
  cover: string;

  @ApiProperty({ type: 'array', items: { type: 'string', format: 'binary' } })
  poster: string[];
}
