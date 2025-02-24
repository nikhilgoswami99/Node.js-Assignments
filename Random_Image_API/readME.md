# Animal Image API

This is a simple Express.js server that serves random animal images using Unsplash API.

## Features
- Returns a random animal image from a predefined list.
- Uses `Math.random()` to select a random image.
- Built using Node.js and Express.js.

## Installation

### Prerequisites
- Node.js installed on your system
- npm (Node Package Manager)

### Clone the Repository
```sh
git clone <your-repo-link>
cd <your-repo-name>
```

### Install Dependencies
```sh
npm install
```

## Running the Server
```sh
npm run dev
```

By default, the server runs on port **5000**. If you want to change the port, modify the `server.listen(5000, () => { ... })` line in `index.js`.

## API Endpoints

### Get a Random Animal Image
**Endpoint:**
```http
GET /image/random
```

**Response Example:**
```json
[
  {
    "name": "Lion",
    "link": "https://source.unsplash.com/400x300/?lion"
  }
]
```

## Project Structure
```
📂 project-folder/
├── 📄 index.js    # Main server file
├── 📄 package.json # Project dependencies
└── 📄 README.md   # Documentation
```

## License
This project is open-source and free to use.

## Contributing
Feel free to fork the project and submit pull requests.

