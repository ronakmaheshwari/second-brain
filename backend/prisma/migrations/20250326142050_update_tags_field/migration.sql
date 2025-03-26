/*
  Warnings:

  - You are about to drop the `Tags` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Tags" DROP CONSTRAINT "Tags_contentId_fkey";

-- AlterTable
ALTER TABLE "Content" ADD COLUMN     "tags" TEXT[];

-- DropTable
DROP TABLE "Tags";
