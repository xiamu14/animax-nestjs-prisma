import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.anime.create({
    data: {
      name: 'Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train',
      author: '',
      tags: ['Japanese', 'Shounen Anime', 'Anime Action'],
      release: '2020',
      score: 9.7,
      introduction:
        'With Kyojuro Rengoku, Tanjiro and the others board the Mugen Train to face a demon who traps his victims in dreams so sweet, they never want to wake up.',
      cover: '',
      poster: [],
      episodes: {
        create: [
          { index: 1, cover: 'https://xxx.com/xxx.png' },
          { index: 2, cover: 'https://xxx.com/xxx.png' },
          { index: 3, cover: 'https://xxx.com/xxx.png' },
          { index: 4, cover: 'https://xxx.com/xxx.png' },
          { index: 5, cover: 'https://xxx.com/xxx.png' },
          { index: 6, cover: 'https://xxx.com/xxx.png' },
          { index: 7, cover: 'https://xxx.com/xxx.png' },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
