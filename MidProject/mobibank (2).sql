-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 01, 2021 at 05:26 PM
-- Server version: 10.4.8-MariaDB
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mobibank`
--

-- --------------------------------------------------------

--
-- Table structure for table `empsalary`
--

CREATE TABLE `empsalary` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_bin NOT NULL,
  `salary` varchar(100) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `empsalary`
--

INSERT INTO `empsalary` (`id`, `username`, `salary`, `date`) VALUES
(1, 'shafin11', '10000', '2020-11-24'),
(2, 'mahin11', '500', '2020-11-24'),
(3, 'sagar111', '10000', '0000-00-00'),
(4, 'sagar111', '10000', '2020-11-25'),
(5, 'sadik00', '10000', '2020-11-25'),
(6, 'sadik00', '500', '2020-11-25');

-- --------------------------------------------------------

--
-- Table structure for table `transaction`
--

CREATE TABLE `transaction` (
  `id` int(11) NOT NULL,
  `username` varchar(100) COLLATE utf8_bin NOT NULL,
  `send` varchar(100) COLLATE utf8_bin NOT NULL,
  `receive` varchar(100) COLLATE utf8_bin NOT NULL,
  `balance` varchar(100) COLLATE utf8_bin NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `transaction`
--

INSERT INTO `transaction` (`id`, `username`, `send`, `receive`, `balance`, `date`) VALUES
(1, 'Nafiz11', '5000', '', '195000', '2020-11-25');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `ID` int(11) NOT NULL,
  `UserName` varchar(100) COLLATE utf8_bin NOT NULL,
  `Name` varchar(100) COLLATE utf8_bin NOT NULL,
  `Password` varchar(100) COLLATE utf8_bin NOT NULL,
  `Email` varchar(100) COLLATE utf8_bin NOT NULL,
  `ContactNo` varchar(100) COLLATE utf8_bin NOT NULL,
  `Gender` varchar(100) COLLATE utf8_bin NOT NULL,
  `UserType` varchar(100) COLLATE utf8_bin NOT NULL,
  `Address` varchar(100) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`ID`, `UserName`, `Name`, `Password`, `Email`, `ContactNo`, `Gender`, `UserType`, `Address`) VALUES
(1, 'sadat111', 'Sadat', '1234', 'sadat@mail.com', '12345678', 'Male', 'Manager', 'Dhaka'),
(3, 'sagar11', 'sagar', '12345', '', '', '', 'Customer', ''),
(4, 'mahin11', 'mahin', '122', '', '', '', 'Employee', ''),
(8, 'sadat22', 'Sadat', '12345', '', '', '', 'Employee', ''),
(10, 'pranto11', 'pranto', '12378', '', '', '', 'Employee', ''),
(11, 'moain12', 'Moain', '12340', '', '', '', 'Employee', ''),
(12, 'sadik00', 'Sadaik', '11123', '', '', '', 'Employee', ''),
(13, 'nahid11', 'Nahid', '1234', 'nahid@mail.com', '1234567', 'Male', 'admin', 'Dhaka'),
(14, 'sadik11', 'Sadik', '12345', 'sadik@mail.com', '12345678', 'male', 'Manager', 'Pabna'),
(15, 'zaman23', 'Zaman', '1255', 'zaman@mail.com', '123456789', 'Male', 'Customer', 'Pabna');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `empsalary`
--
ALTER TABLE `empsalary`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transaction`
--
ALTER TABLE `transaction`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `empsalary`
--
ALTER TABLE `empsalary`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `transaction`
--
ALTER TABLE `transaction`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
