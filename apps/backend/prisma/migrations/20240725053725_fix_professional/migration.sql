/*
  Warnings:

  - You are about to drop the column `review` on the `professional` table. All the data in the column will be lost.
  - Added the required column `rating` to the `professional` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "professional" DROP COLUMN "review",
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL;
