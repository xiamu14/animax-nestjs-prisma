/*
  Warnings:

  - Added the required column `index` to the `Episodes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Episodes" ADD COLUMN     "index" INTEGER NOT NULL;
