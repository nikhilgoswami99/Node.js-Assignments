# Jokes API

## Overview
This is a simple Node.js and Express API that serves jokes. Users can request a random joke or get the full list of jokes available.

## Features
- Fetch a random joke by passing a query parameter.
- Retrieve all available jokes.

## Technologies Used
- Node.js
- Express.js

## Installation and Setup

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed.

### Steps
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate into the project directory:
   ```sh
   cd <project-folder>
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the server:
   ```sh
   node server.js
   ```
5. The server will run on `http://localhost:3000/`.

## API Endpoints

### Get All Jokes
**Endpoint:**
```http
GET /jokes
```
**Response:**
Returns an array of all available jokes.
```json
[
  {
    "id": 1,
    "joke": "Why don’t skeletons fight each other? They don’t have the guts."
  },
  ...
]
```

### Get a Random Joke
**Endpoint:**
```http
GET /jokes?joke=random
```
**Response:**
Returns a randomly selected joke.
```json
{
  "id": 5,
  "joke": "What do you call cheese that isn't yours? Nacho cheese!"
}
```

## Project Structure
```
/project-folder
│── server.js
│── package.json
│── README.md
```

## Notes
- The server listens on port `3000`.
- If you want to change the port, update `server.listen(3000, ...)` in `server.js`.

## License
This project is open-source. Feel free to use and modify it as needed.

