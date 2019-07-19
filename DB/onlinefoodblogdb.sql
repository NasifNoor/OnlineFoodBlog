-- phpMyAdmin SQL Dump
-- version 4.8.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 18, 2019 at 09:15 PM
-- Server version: 10.1.31-MariaDB
-- PHP Version: 5.6.35

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinefoodblogdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL,
  `contact` int(11) NOT NULL,
  `email` varchar(25) NOT NULL,
  `address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `username`, `password`, `contact`, `email`, `address`) VALUES
(1, 'Nasif', 'admin', '123', 123456789, 'nasif@gmail.com', 'Nikunja-2, khilkhet ');

-- --------------------------------------------------------

--
-- Table structure for table `bloginfo`
--

CREATE TABLE `bloginfo` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `creator` varchar(20) NOT NULL,
  `goal` varchar(20) NOT NULL,
  `contact` int(11) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bloginfo`
--

INSERT INTO `bloginfo` (`id`, `name`, `creator`, `goal`, `contact`, `description`) VALUES
(1, 'Online Food Blog', 'Nasif', 'Food For Health', 1122334455, 'It\'s a food blog website. Here we only discuss about food.');

-- --------------------------------------------------------

--
-- Table structure for table `commentonmenu`
--

CREATE TABLE `commentonmenu` (
  `id` int(11) NOT NULL,
  `comment` varchar(150) NOT NULL,
  `menuid` int(11) NOT NULL,
  `memberid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `commentonmenu`
--

INSERT INTO `commentonmenu` (`id`, `comment`, `menuid`, `memberid`) VALUES
(2, 'good', 1, 2),
(4, 'v. good', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `commentonrestaurant`
--

CREATE TABLE `commentonrestaurant` (
  `id` int(11) NOT NULL,
  `comment` varchar(150) NOT NULL,
  `restaurantid` int(11) NOT NULL,
  `memberid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `commentonrestaurant`
--

INSERT INTO `commentonrestaurant` (`id`, `comment`, `restaurantid`, `memberid`) VALUES
(1, 'good restaurant', 1, 2),
(3, 'Very good', 2, 2);

-- --------------------------------------------------------

--
-- Table structure for table `member`
--

CREATE TABLE `member` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` varchar(15) NOT NULL,
  `contact` int(11) NOT NULL,
  `email` varchar(25) NOT NULL,
  `address` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `member`
--

INSERT INTO `member` (`id`, `name`, `username`, `password`, `contact`, `email`, `address`) VALUES
(2, 'Nasif', 'nasif', '123', 12345678, 'nasif@aiub.edu', 'Nikunja 2, Dhaka'),
(3, 'Manik', 'manik', '123', 123456789, 'manik@aiub.edu', 'khilkhet, Dhaka');

-- --------------------------------------------------------

--
-- Table structure for table `menus`
--

CREATE TABLE `menus` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `price` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menus`
--

INSERT INTO `menus` (`id`, `name`, `price`) VALUES
(1, 'Burgar', 150),
(2, 'Pasta ', 100),
(3, 'Kacchi biryani', 300),
(4, 'Paratha', 20);

-- --------------------------------------------------------

--
-- Table structure for table `restaurant`
--

CREATE TABLE `restaurant` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `location` varchar(25) NOT NULL,
  `description` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurant`
--

INSERT INTO `restaurant` (`id`, `name`, `location`, `description`) VALUES
(1, 'KFC', 'Banani', 'provide good food'),
(2, 'Kalapata', 'Nikunja-2, Dhaka', 'Good Food');

-- --------------------------------------------------------

--
-- Table structure for table `restaurantmenu`
--

CREATE TABLE `restaurantmenu` (
  `id` int(11) NOT NULL,
  `menuid` int(11) NOT NULL,
  `menuName` varchar(25) NOT NULL,
  `price` int(11) NOT NULL,
  `restaurantid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `restaurantmenu`
--

INSERT INTO `restaurantmenu` (`id`, `menuid`, `menuName`, `price`, `restaurantid`) VALUES
(1, 1, 'Burgar', 150, 1),
(2, 1, 'Burgar', 150, 2),
(3, 2, 'Pasta', 100, 1),
(4, 2, 'Pasta ', 100, 2),
(5, 3, 'Kacchi biryani', 300, 1),
(6, 4, 'Paratha', 20, 1),
(8, 4, 'Paratha', 20, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bloginfo`
--
ALTER TABLE `bloginfo`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commentonmenu`
--
ALTER TABLE `commentonmenu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commentonrestaurant`
--
ALTER TABLE `commentonrestaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `member`
--
ALTER TABLE `member`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `menus`
--
ALTER TABLE `menus`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurant`
--
ALTER TABLE `restaurant`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `restaurantmenu`
--
ALTER TABLE `restaurantmenu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `bloginfo`
--
ALTER TABLE `bloginfo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `commentonmenu`
--
ALTER TABLE `commentonmenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `commentonrestaurant`
--
ALTER TABLE `commentonrestaurant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `member`
--
ALTER TABLE `member`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `menus`
--
ALTER TABLE `menus`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `restaurant`
--
ALTER TABLE `restaurant`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `restaurantmenu`
--
ALTER TABLE `restaurantmenu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
