/*
  Warnings:

  - Added the required column `cover` to the `Episodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Episodes" ADD COLUMN     "cover" TEXT NOT NULL DEFAULT 'https://xxx.png' ;
