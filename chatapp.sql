-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 29, 2024 at 11:38 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `friendships`
--

CREATE TABLE `friendships` (
  `id` int(11) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT 0,
  `userId` int(11) NOT NULL,
  `friendId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `friendships`
--

INSERT INTO `friendships` (`id`, `status`, `userId`, `friendId`) VALUES
(1, 1, 1, 2),
(2, 1, 1, 3),
(3, 1, 1, 4),
(9, 1, 2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `senderId` int(11) NOT NULL,
  `receiverId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `content`, `createdAt`, `senderId`, `receiverId`) VALUES
(1, 'Hi', '2024-02-28 06:55:37', 1, 2),
(2, 'what\'s up', '2024-02-28 06:56:04', 2, 1),
(3, 'pubg kun!', '2024-02-28 06:56:27', 1, 2),
(4, 'okay gogo', '2024-02-28 06:56:37', 2, 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `profilePic` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `email`, `password`, `profilePic`) VALUES
(1, 'happy', 'happy', 'happy@gmail.com', '$2b$10$Wvz26cnZPyV44zAIIy3sTO6V2/0U2c8NJBNlYJMQSELEkg.1xbC9C', 'https://scontent.fbkk3-2.fna.fbcdn.net/v/t39.30808-6/363366838_3634436386879587_3963344282232989584_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHOoe1jV2VbEsjrF-cXcuWBN2Dyj4ZjMMc3YPKPhmMwx4F_fEAXwOHOneoNUD2OMS1ro9fefydRrwuLAL2ueNz-&_nc_ohc=Tzn8XTvPAnYAX_uXRRg&_nc_zt=23&_nc_ht=scontent.fbkk3-2.fna&oh=00_AfCI46Yap3EswR5t2k9PQuIqFZlTTsuSv94ZgHpvYMX99Q&oe=65E5222Dhttps://scontent.fbkk3-2.fna.fbcdn.net/v/t39.30808-6/363366838_3634436386879587_3963344282232989584_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeHOoe1jV2VbEsjrF-cXcuWBN2Dyj4ZjMMc3YPKPhmMwx4F_fEAXwOHOneoNUD2OMS1ro9fefydRrwuLAL2ueNz-&_nc_ohc=Tzn8XTvPAnYAX_uXRRg&_nc_zt=23&_nc_ht=scontent.fbkk3-2.fna&oh=00_AfCI46Yap3EswR5t2k9PQuIqFZlTTsuSv94ZgHpvYMX99Q&oe=65E5222D'),
(2, 'ize', 'ize', 'ize@gmail.com', '$2b$10$cpbwu/vC9ZBEJ9d972jRVes83CIxNZdAF5JoR2QT9LEKfyILXWm5S', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScY-fYDvwUurI-QAFjm7WP3_EFpcozxr28v3dg6kKt0g&shttps://scontent.fbkk3-5.fna.fbcdn.net/v/t39.30808-6/427968630_1681383459056805_6879876174479450388_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeG-CYxEbgCT4RB-5UNxz8VXbHNcPO9ZQD1sc1w871lAPYj_TGZ68nlZJYrHDjMlDUIHLNCxUDlRdbmUIJJVGkL3&_nc_ohc=EreEcntIQsQAX-2Qt3i&_nc_zt=23&_nc_ht=scontent.fbkk3-5.fna&oh=00_AfBV8XQp55OM7NQ5sHBkhhiO8F1IoTClhz4POTczKnYXAw&oe=65E62F88https://scontent.fbkk3-5.fna.fbcdn.net/v/t39.30808-6/427968630_1681383459056805_6879876174479450388_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9c7eae&_nc_eui2=AeG-CYxEbgCT4RB-5UNxz8VXbHNcPO9ZQD1sc1w871lAPYj_TGZ68nlZJYrHDjMlDUIHLNCxUDlRdbmUIJJVGkL3&_nc_ohc=EreEcntIQsQAX-2Qt3i&_nc_zt=23&_nc_ht=scontent.fbkk3-5.fna&oh=00_AfBV8XQp55OM7NQ5sHBkhhiO8F1IoTClhz4POTczKnYXAw&oe=65E62F88'),
(3, 'mild', 'mild', 'mild@gmail.com', '$2b$10$yu8FKGpODUilpv7DsV.HC.ln9EbQBuZ5DYl7bWjlJDKTY12Z8zJqy', 'https://scontent.fbkk3-3.fna.fbcdn.net/v/t39.30808-6/358128645_1726265361142812_7016697331329956504_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeGZF5PbfWVgQglPtyvcyo98Fl4PFpa3BrAWXg8WlrcGsJutscFsalVDJPBuAfiE-m4Rve-LpLMjzPVCRO-aS5AU&_nc_ohc=ZpmOnIwTUFMAX-6bsWl&_nc_zt=23&_nc_ht=scontent.fbkk3-3.fna&oh=00_AfDpPOjdwceD7VG-4wOp7Zl-IuezgGDxWwcHrVeTdQ96Pg&oe=65E519BC'),
(4, 'may', 'may', 'may@gmail.com', '$2b$10$CIs4lkWbqN2/taQQeZnsme0HRcVY18WBEDKn0rw0oISodHBhEfqbi', 'https://scontent.fbkk3-6.fna.fbcdn.net/v/t39.30808-6/412775043_18372045910075861_5278086273252360625_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeF3aebzzrlTw0skwoq4ylKypRwX_-5ZU0SlHBf_7llTROkmFg2qC6iIsDQASQVq42TG1CEUPWCBuonS3Pq9XtHH&_nc_ohc=D2m4S98UkCYAX9hEISn&_nc_zt=23&_nc_ht=scontent.fbkk3-6.fna&oh=00_AfB4Ei53iiI45DvCyb4E9tt__Z-eGFFdWSPHt8Sr0z8q3g&oe=65E60BB8'),
(5, 'm', 'm', 'm@gmail.com', '$2b$10$wQ77Yi0/fT1QiBCz6KxlO.j9sQNEWFjV9hkshLOQp.SGRAgsG.qu2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScY-fYDvwUurI-QAFjm7WP3_EFpcozxr28v3dg6kKt0g&s');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `friendships`
--
ALTER TABLE `friendships`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `friendId` (`friendId`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `senderId` (`senderId`),
  ADD KEY `receiverId` (`receiverId`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `friendships`
--
ALTER TABLE `friendships`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `friendships`
--
ALTER TABLE `friendships`
  ADD CONSTRAINT `friendships_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `friendships_ibfk_2` FOREIGN KEY (`friendId`) REFERENCES `users` (`id`);

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`senderId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`receiverId`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
