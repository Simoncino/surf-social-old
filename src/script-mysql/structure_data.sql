-- phpMyAdmin SQL Dump
-- version 4.2.10
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Nov 13, 2016 alle 11:15
-- Versione del server: 5.5.38
-- PHP Version: 5.6.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `social_surf`
--
CREATE DATABASE IF NOT EXISTS `social_surf` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `social_surf`;

-- --------------------------------------------------------

--
-- Struttura della tabella `ruoli`
--

DROP TABLE IF EXISTS `ruoli`;
CREATE TABLE `ruoli` (
`id` tinyint(3) unsigned NOT NULL,
  `codice` varchar(40) NOT NULL,
  `descrizione` varchar(255) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `ruoli`
--

INSERT INTO `ruoli` (`id`, `codice`, `descrizione`) VALUES
(1, 'ADMIN', 'Amministratore Applicazione'),
(2, 'GUEST', 'Ospite');

-- --------------------------------------------------------

--
-- Struttura della tabella `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
`id` bigint(20) unsigned NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id_ruolo` tinyint(3) unsigned NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dump dei dati per la tabella `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `email`, `id_ruolo`) VALUES
(1, 'sima', 'sima', 'simone.lacarpia@gmail.com', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `ruoli`
--
ALTER TABLE `ruoli`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `codice` (`codice`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`id`), ADD UNIQUE KEY `username` (`username`,`email`), ADD KEY `id_ruolo` (`id_ruolo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `ruoli`
--
ALTER TABLE `ruoli`
MODIFY `id` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `user`
--
ALTER TABLE `user`
ADD CONSTRAINT `fk_ruoli` FOREIGN KEY (`id_ruolo`) REFERENCES `ruoli` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
