/*
  Warnings:

  - You are about to drop the column `photo` on the `messages_contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `messages_contact` DROP COLUMN `photo`;

-- CreateTable
CREATE TABLE `bapteme_photos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `baptemeId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `communion_photos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `communionId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `confirmation_photos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `confirmationId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mariage_photos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mariageId` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `bapteme_photos` ADD CONSTRAINT `bapteme_photos_baptemeId_fkey` FOREIGN KEY (`baptemeId`) REFERENCES `baptemes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `communion_photos` ADD CONSTRAINT `communion_photos_communionId_fkey` FOREIGN KEY (`communionId`) REFERENCES `communions`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `confirmation_photos` ADD CONSTRAINT `confirmation_photos_confirmationId_fkey` FOREIGN KEY (`confirmationId`) REFERENCES `confirmations`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `mariage_photos` ADD CONSTRAINT `mariage_photos_mariageId_fkey` FOREIGN KEY (`mariageId`) REFERENCES `mariages`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
