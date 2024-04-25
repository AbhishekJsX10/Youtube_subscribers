
# Youtube Backend

## Description

This project serves as the backend for a YouTube-like platform, providing APIs for managing channels like adding, deleting, updating, subscribers, and subscriptions of a channel.



## Table of Contents

1. [Technologies Used](#technologies-used)
2. [Installation ](#installation)
3. [Features](#features)
4. [Routes](#routes)
5. [Folder Structure](#folder-structure)
6. [Acknowledgement](#acknowledgments)
7. [Project History](#project-history)
8. [Contributors](#contributors)
9. [License](#license)

## Technologies Used
- Node.js 
- Express.js
- EJS 
- Mongoose 
- MongoDB
- HTML 
- CSS 
- Tailwind CSS 
- JavaScript 

## Installation

1. Clone the repository.
2. Navigate to the folder and run `npm install` to install backend dependencies.
3. Run `node index.js` to start the backend server.

## Features
- Lots of youtube backend api 
- A simple user interface for visualization 
- Free to use any api 

## Routes

| SN | Route | Method | Details |
|----|-------|--------|---------|
| 1  | [/allchannels](http://localhost:3000/allchannels) | GET | Get all channels |
| 2  | [/channelnames](http://localhost:3000/channelnames) | GET | Get all channel names |
| 3  | [/subscribers/:channelId](http://localhost:3000/subscribers/:channelId) | GET | Get all subscribers of a channel |
| 4  | [/subscriptions/:channelId](http://localhost:3000/subscriptions/:channelId) | GET | Get all subscriptions of a channel |
| 5  | /subscribe/:channelId | POST | Subscribe to a channel |
| 6  | /addChannel | POST | Add a new channel |
| 7  | /delete/:channelId | DELETE | Delete a channel |
| 8  | /update/:channelId | PUT | Update a channel |

## Folder Structure

<pre>
|-- src
    |-- assets 
    |-- controllers 
    |-- data
    |-- models 
    |-- routes 
    |-- views
    |-- connectionDB.js 
|-- index.js
|-- package.json
|-- package-lock.json
</pre>

## Acknowledgments

- [EJS](https://ejs.co/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Express.js](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/)
- Google

## Project History

- First Commit : April 25, 2024
- First Release : April 25, 2024
- Updated Release : May updated the project for learning purpose.

## Contributors

- [Anurag Affection](https://github.com/AbhishekJsX10)
- You are welcome to contribute here!

## License

You are free to:

- Use — the software for any purpose
- Share — Copy and redistribute the material in any medium or format
- Adapt — Remix, transform, and build upon the material

Under the following terms:

- Attribution — You must give appropriate credit.
- NonCommercial — You may not use material for commercial purposes.

## Thank You
