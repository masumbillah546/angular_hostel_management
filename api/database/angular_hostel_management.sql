-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 07, 2021 at 10:45 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crud`
--

-- --------------------------------------------------------

--
-- Table structure for table `comments`
--

CREATE TABLE `comments` (
  `comment_id` int(11) NOT NULL,
  `name` varchar(80) NOT NULL,
  `comment_subject` varchar(250) NOT NULL,
  `comment_text` text NOT NULL,
  `comment_status` int(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `comments`
--

INSERT INTO `comments` (`comment_id`, `name`, `comment_subject`, `comment_text`, `comment_status`) VALUES
(14, 'Masum Billah', 'nvnv', 'dfdsf', 1),
(15, 'masumbillah@gmail.com', 'eejeje', 'kfjkejfekjfek', 1),
(16, 'hjshdjsh@gmail.com', 'sdjsdhjh', 'jhdjshjshfjsh', 1),
(17, 'Masum Billah', 'kjskadj', 'hello', 1),
(18, 'Masum Billah', 'gd', 'ewg', 1),
(19, '', 'meal', 'thrrt', 1),
(20, '', 'tyrtr', 'teyty', 1),
(21, '', 'terye', 'tyetye', 1),
(22, '', 'meal', 'rtytry', 1),
(23, '', 'tete', 'rtrt', 1),
(24, '', 'meal', 'etet', 1),
(25, '', 'reyre', 'reyy', 1),
(26, '', 'ukuy', 'utoot', 1),
(27, '', 'jjghjg', 'gghgjhg', 1),
(28, '', 'jjghjg', 'gghgjhg', 1),
(29, '', 'jjghjg', 'gghgjhg', 1),
(30, '', 'jjghjg', 'gghgjhg', 1),
(31, '', 'jjghjg', 'gghgjhg', 1),
(32, '', 'jjghjg', 'gghgjhg', 1),
(33, '', 'jjghjg', 'gghgjhg', 1),
(34, '', 'jjghjg', 'gghgjhg', 1),
(35, '', 'jjghjg', 'gghgjhg', 1),
(36, '', 'hghghg', 'jkjkj', 1),
(37, '', ';;k;k;', 'mmm', 1),
(38, '', ';;k;k;', 'mmm', 1),
(39, '', ';;k;k;', 'mmm', 1),
(40, '', ';;k;k;', 'mmm', 1),
(41, '', 'ert', 'retr', 1),
(42, '', 'twert', 'trwetrwe', 1),
(43, 'Masum Billah', 'test', 'test text', 1);

-- --------------------------------------------------------

--
-- Table structure for table `employees`
--

CREATE TABLE `employees` (
  `_id` int(10) NOT NULL,
  `name` varchar(50) NOT NULL,
  `position` varchar(50) NOT NULL,
  `department` varchar(50) NOT NULL,
  `salary` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `employees`
--

INSERT INTO `employees` (`_id`, `name`, `position`, `department`, `salary`) VALUES
(4, 'Sahab Uddin', 'Chep', 'Dhaka', '10000'),
(5, 'Jamal uddin', 'Caretaker', 'Dhaka', '220006'),
(6, 'Masum Billah', 'Programmer', 'tyy', '3333');

-- --------------------------------------------------------

--
-- Table structure for table `meals`
--

CREATE TABLE `meals` (
  `sl` int(11) NOT NULL,
  `id` varchar(25) NOT NULL,
  `meal` int(11) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `meals`
--

INSERT INTO `meals` (`sl`, `id`, `meal`, `date`) VALUES
(3, '1258045', 4, '2020-09-15 19:29:03'),
(4, '1258035', 4, '2021-01-07 21:37:49');

-- --------------------------------------------------------

--
-- Table structure for table `nb`
--

CREATE TABLE `nb` (
  `id` int(10) NOT NULL,
  `title` varchar(255) NOT NULL,
  `dis` varchar(800) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `nb`
--

INSERT INTO `nb` (`id`, `title`, `dis`) VALUES
(1, 'title-1', ' Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Nemo id tempora magni a fugit, explicabo odio temporibus maiores laudantium sunt, eaque asperiores alias officiis. Molestias praesentium voluptatibus neque velit, consequuntur.'),
(2, 'title-2', ' Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Nemo id tempora magni a fugit, explicabo odio temporibus maiores laudantium sunt, eaque asperiores alias officiis. Molestias praesentium voluptatibus neque velit, consequuntur.'),
(3, 'title-3', ' Lorem ipsum dolor, sit amet consectetur, adipisicing elit. Nemo id tempora magni a fugit, explicabo odio temporibus maiores laudantium sunt, eaque asperiores alias officiis. Molestias praesentium voluptatibus neque velit, consequuntur.');

-- --------------------------------------------------------

--
-- Table structure for table `sms`
--

CREATE TABLE `sms` (
  `sn` int(10) NOT NULL,
  `id` varchar(25) NOT NULL,
  `name` varchar(45) NOT NULL,
  `sms` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `sms`
--

INSERT INTO `sms` (`sn`, `id`, `name`, `sms`) VALUES
(1, '454522', 'Masum Billah', 'hello');

-- --------------------------------------------------------

--
-- Table structure for table `stdpayment`
--

CREATE TABLE `stdpayment` (
  `serial` int(11) NOT NULL,
  `userId` varchar(10) NOT NULL,
  `name` varchar(40) NOT NULL,
  `paymentBy` varchar(50) NOT NULL,
  `transNo` varchar(50) NOT NULL,
  `amount` decimal(18,2) NOT NULL,
  `transDate` varchar(20) NOT NULL,
  `remark` varchar(50) NOT NULL,
  `isApprove` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `stdpayment`
--

INSERT INTO `stdpayment` (`serial`, `userId`, `name`, `paymentBy`, `transNo`, `amount`, `transDate`, `remark`, `isApprove`) VALUES
(3, 'U008', 'Masum Billah', 'DBBL', '+8801755305154', '6000.00', '2015-02-26', 'Feb,2015 Bill', 'Yes'),
(4, 'U009', 'Tanvir Ahmed', 'Bank', 'DD-4556', '5500.00', '2015-02-27', 'test', 'Yes'),
(5, 'U009', 'Kamal Hossain', 'Bkash', '0185236974', '6000.00', '2015-04-17', 'all cost rent meal,net,tv', 'Yes'),
(6, 'U0012', 'Jamal Hossain', 'Bkash', '01738004246', '500.00', '2020-08-14', 'ok', 'Yes'),
(7, 'U0016', 'Jashim Uddin', 'Bkash', '01738004246', '500.00', '2020-08-22', 'ok', 'Yes'),
(8, 'U0018', 'Ahmad Ullah', 'Bank', '01738004246', '500.00', '2020-08-22', 'ok', 'Yes'),
(9, 'U0021', 'Monir Hossain', 'Bank', '5656565+', '5000.00', '2020-08-22', 'ok', 'Yes'),
(10, '1258035', 'Masum Billah', 'Bikash', '014785221', '10000.00', '20/12/1244', 'test', ''),
(11, '1258045', 'Ahmad Ullah', 'Bkash', '54545454654', '5000.00', '121212', 'test', ''),
(12, '1258045', '', 'Bkash', '54545454654', '5000.00', '21/2/2020', 'test', ''),
(13, '1258036', 'Nazmul Hasan', 'Bkash', '54545454654', '500055.00', '21/2/2020', 'test', ''),
(14, '1258036', '', 'DBBL', '0004555400', '10000.00', '21/2/2020', 'Ten thousands taka only', ''),
(15, '1258045', '', 'Bkash', '54545454654', '4444.00', '21/2/2020', 'ok', ''),
(16, '1258035', '', 'Bkash', '54545454654', '4500.00', '21/2/2020', 'Ten thousands taka only', ''),
(17, '1258035', '', 'Bkash', '54545454654', '14144.00', '21/2/2020', 'dfdf', ''),
(18, '124554556', '', 'DBBL', '54545454654', '1111111111.00', '21/2/2020', 'ok', '');

-- --------------------------------------------------------

--
-- Table structure for table `studentinfo`
--

CREATE TABLE `studentinfo` (
  `serial` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `studentId` varchar(15) NOT NULL,
  `cellNo` varchar(15) NOT NULL,
  `email` varchar(80) NOT NULL,
  `nameOfInst` varchar(100) NOT NULL,
  `program` varchar(80) NOT NULL,
  `batchNo` varchar(10) NOT NULL,
  `gender` varchar(8) NOT NULL,
  `dob` date NOT NULL,
  `bloodGroup` varchar(5) NOT NULL,
  `nationality` varchar(30) NOT NULL,
  `nationalId` varchar(20) DEFAULT NULL,
  `fatherName` varchar(50) NOT NULL,
  `motherName` varchar(50) NOT NULL,
  `fatherCellNo` varchar(15) NOT NULL,
  `motherCellNo` varchar(15) NOT NULL,
  `presentAddress` varchar(150) NOT NULL,
  `parmanentAddress` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `studentinfo`
--

INSERT INTO `studentinfo` (`serial`, `name`, `studentId`, `cellNo`, `email`, `nameOfInst`, `program`, `batchNo`, `gender`, `dob`, `bloodGroup`, `nationality`, `nationalId`, `fatherName`, `motherName`, `fatherCellNo`, `motherCellNo`, `presentAddress`, `parmanentAddress`) VALUES
(44, 'Masum Billah', '1258035', '01738004246', 'masumbillah546@gmail.com', 'IsDB-BISEW', 'WDPF', '44', 'Male', '1993-12-20', 'A(+)', 'Bangladeshi', '888888888', 'Wahidur Rahman', 'Manira Begum', '454545454414', '121215454544', ' Dhaka', 'Dhaka'),
(59, 'Tanvir Ahmed', '124554556', '0173800424635', 'tanvir@yahoo.com', 'IsDB-BISEW', 'WDPF', '44', 'Male', '2020-09-23', 'O(-)', 'indian', '54546545454', 'Wahidur', 'Manira', '52124242', '121215454544454', 'gdg', 'fgdg'),
(61, 'Ahmad Ullah ahmed', '125803977', '01738004244', 'bmasum10@yahoo.com', 'IsDB-BISEW', 'WDPF', '44', 'Male', '0000-00-00', 'A(un)', 'Bangladeshi', '11111111111111', 'Wahidur Rahman', 'Manira Begum', '454545454414', '121215454544', 'cfgf', 'fgfg'),
(80, 'Masum Billah', '423434', '5476765', 'reryye@yahoo.com', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', ''),
(81, 'Masum Billah', '34554354', '4636346', 'reyery@gmail.com', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', ''),
(82, 'Masum Billah Masum', '3423424', '3235', 'rtrtt@gmail.com', '', '', '', '', '0000-00-00', '', '', '', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `userdata`
--

CREATE TABLE `userdata` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(12) NOT NULL,
  `mobile` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userdata`
--

INSERT INTO `userdata` (`id`, `firstname`, `email`, `password`, `mobile`) VALUES
(1, 'Masum', 'masumbillah546@gmail.com', 'masum', '01738004246');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) NOT NULL,
  `name` varchar(55) NOT NULL,
  `password` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`) VALUES
(4, 'Shahin', '123456', 'shahin@gmail.com'),
(5, 'ahmed', '123456', 'ahmed@gmail.com'),
(26, 'Tanvir Ahmed', '123456', 'tanvir@gmail.com'),
(27, 'Abdul Halim', '123456', 'halim@gmail.com'),
(28, 'Masum Billah', '123456', 'masumbillah546@gmail.com'),
(29, 'Monir Hossain', '123456', 'monir@gmail.com'),
(30, 'admin', 'admin', 'admin@gmail.com'),
(31, 'Abdullah', '123456', 'abdullah@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comments`
--
ALTER TABLE `comments`
  ADD PRIMARY KEY (`comment_id`);

--
-- Indexes for table `employees`
--
ALTER TABLE `employees`
  ADD PRIMARY KEY (`_id`);

--
-- Indexes for table `meals`
--
ALTER TABLE `meals`
  ADD PRIMARY KEY (`sl`);

--
-- Indexes for table `nb`
--
ALTER TABLE `nb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sms`
--
ALTER TABLE `sms`
  ADD PRIMARY KEY (`sn`);

--
-- Indexes for table `stdpayment`
--
ALTER TABLE `stdpayment`
  ADD PRIMARY KEY (`serial`);

--
-- Indexes for table `studentinfo`
--
ALTER TABLE `studentinfo`
  ADD UNIQUE KEY `serial` (`serial`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `cellNo` (`cellNo`),
  ADD UNIQUE KEY `studentId` (`studentId`);

--
-- Indexes for table `userdata`
--
ALTER TABLE `userdata`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comments`
--
ALTER TABLE `comments`
  MODIFY `comment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `employees`
--
ALTER TABLE `employees`
  MODIFY `_id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `meals`
--
ALTER TABLE `meals`
  MODIFY `sl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `nb`
--
ALTER TABLE `nb`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `sms`
--
ALTER TABLE `sms`
  MODIFY `sn` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stdpayment`
--
ALTER TABLE `stdpayment`
  MODIFY `serial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `studentinfo`
--
ALTER TABLE `studentinfo`
  MODIFY `serial` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=84;

--
-- AUTO_INCREMENT for table `userdata`
--
ALTER TABLE `userdata`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
