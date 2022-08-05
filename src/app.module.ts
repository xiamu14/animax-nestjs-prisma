import { Module } from '@nestjs/common';
import { AnimeModule } from './anime/anime.module';
import { EpisodeModule } from './episode/episode.module';

@Module({
  imports: [AnimeModule, EpisodeModule],
})
export class AppModule {}
