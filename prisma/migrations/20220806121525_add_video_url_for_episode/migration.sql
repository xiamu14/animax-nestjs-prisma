/*
  Warnings:

  - Added the required column `videoUrl` to the `Episodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Episodes" ADD COLUMN     "videoUrl" TEXT NOT NULL DEFAULT 'https://xxx.mp4';
