# Rest API for Student Data Management with MariaDB and JWT

This repository contains a Node.js API designed for the management of student information, with data persistence using MariaDB as the database.

To access and interact with student information, users need to create an account. After registration, they have the capability to perform CRUD (Create, Read, Update, Delete) operations related to student data.

It's important to note that each user has access only to their own personal information and does not have access to the data of other users registered in the system.

Authentication and authorization for routes and users are implemented using JSON Web Tokens (JWT). This allows users to generate customized authentication tokens based on their ID and email address, providing a secure system for accessing the API's functionalities.

Additionally, to ensure the security of information, user passwords are stored in an encrypted form in the database, ensuring the protection of sensitive user data.



## Build with
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MariaDB](https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens) 
