-- MySQL Script generated by MySQL Workbench
-- 09/09/15 21:55:02
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema whiskeyclub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema whiskeyclub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `whiskeyclub` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `whiskeyclub` ;

-- -----------------------------------------------------
-- Table `whiskeyclub`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whiskeyclub`.`user` (
  `user_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `username` VARCHAR(32) NOT NULL COMMENT '',
  `email` VARCHAR(64) NULL COMMENT '',
  PRIMARY KEY (`user_id`)  COMMENT '',
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC)  COMMENT '')
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whiskeyclub`.`whiskey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whiskeyclub`.`whiskey` (
  `whiskey_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `name` VARCHAR(45) NOT NULL COMMENT '',
  `type` VARCHAR(45) NOT NULL COMMENT '',
  `proof` INT NOT NULL COMMENT '',
  `wood` VARCHAR(45) NULL COMMENT '',
  `age` VARCHAR(45) NULL COMMENT '',
  `user_fk` INT NULL COMMENT '',
  PRIMARY KEY (`whiskey_id`)  COMMENT '',
  UNIQUE INDEX `idtable1_UNIQUE` (`whiskey_id` ASC)  COMMENT '',
  INDEX `user_id_idx` (`user_fk` ASC)  COMMENT '',
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_fk`)
    REFERENCES `whiskeyclub`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `whiskeyclub`.`survey`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `whiskeyclub`.`survey` (
  `survey_id` INT NOT NULL AUTO_INCREMENT COMMENT '',
  `appearance` VARCHAR(256) NULL COMMENT '',
  `appearance_rating` INT NULL COMMENT '',
  `aroma` VARCHAR(256) NULL COMMENT '',
  `aroma_rating` INT NULL COMMENT '',
  `taste` VARCHAR(256) NULL COMMENT '',
  `taste_rating` INT NULL COMMENT '',
  `recommend` TINYINT(1) NULL COMMENT '',
  `rec_taste` VARCHAR(256) NULL COMMENT '',
  `bottle_design` VARCHAR(256) NULL COMMENT '',
  `design_rating` INT NULL COMMENT '',
  `tasting_date` DATE NOT NULL COMMENT '',
  `whiskey_fk` INT NULL COMMENT '',
  `user_fk` INT NULL COMMENT '',
  PRIMARY KEY (`survey_id`)  COMMENT '',
  UNIQUE INDEX `survey_id_UNIQUE` (`survey_id` ASC)  COMMENT '',
  INDEX `whiskey_id_idx` (`whiskey_fk` ASC)  COMMENT '',
  INDEX `user_id_idx` (`user_fk` ASC)  COMMENT '',
  CONSTRAINT `whiskey_id`
    FOREIGN KEY (`whiskey_fk`)
    REFERENCES `whiskeyclub`.`whiskey` (`whiskey_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_fk`)
    REFERENCES `whiskeyclub`.`user` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;