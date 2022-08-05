import { ApiProperty } from '@nestjs/swagger';

export class Episode {
  @ApiProperty({ type: 'number' })
  id: number;

  @ApiProperty({ type: 'number' })
  animeId: number;

  @ApiProperty({ type: 'number' })
  index: number;

  @ApiProperty({ type: 'string' })
  cover: string;
}

export class CreateEpisodeInput {
  @ApiProperty({ type: 'number' })
  animeId: number;

  @ApiProperty({ type: 'number' })
  index: number;

  @ApiProperty({ type: 'string' })
  cover: string;
}

export class UpdateEpisodeInput {
  @ApiProperty({ type: 'number' })
  id: number;

  @ApiProperty({ type: 'number' })
  index: number;

  @ApiProperty({ type: 'string' })
  cover: string;
}
