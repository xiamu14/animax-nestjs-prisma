-- CreateTable
CREATE TABLE "Anime" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "tags" TEXT[],
    "release" TEXT NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "introduction" TEXT NOT NULL,
    "cover" TEXT NOT NULL,
    "poster" TEXT[],

    CONSTRAINT "Anime_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Episodes" (
    "id" SERIAL NOT NULL,
    "animeId" INTEGER NOT NULL,

    CONSTRAINT "Episodes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Episodes" ADD CONSTRAINT "Episodes_animeId_fkey" FOREIGN KEY ("animeId") REFERENCES "Anime"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
