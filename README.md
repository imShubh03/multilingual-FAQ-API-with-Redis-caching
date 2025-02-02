# BharatFD - Multilingual FAQ Management System

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Installation](#installation)
4. [Environment Variables](#environment-variables)
5. [Running the Application](#running-the-application)
6. [API Usage](#api-usage)
7. [Testing](#testing)
8. [Contribution Guidelines](#contribution-guidelines)
9. [License](#license)

---

## Introduction
BharatFD is a multilingual FAQ management system designed to simplify the management and retrieval of FAQs in multiple languages. It integrates Redis for caching, supports a WYSIWYG editor for rich-text content, and provides RESTful APIs for seamless interaction.

## Features
- Multilingual FAQ support
- RESTful API for CRUD operations
- Redis caching for improved performance
- Unit testing with Mocha and Chai
- Docker support for containerization

## Installation

### Prerequisites
Ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/) *(optional)*

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/imShubh03/multilingual-FAQ-API-with-Redis-cachinge.git
   cd multilingual-FAQ-API-with-Redis-caching
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env` file in the root directory and add the following:
   ```env
   PORT=8000
   MONGO_URI=mongodb+srv://<Your Username>:<Your Password>@cluster0.dp5v4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
   REDIS_URI=redis://127.0.0.1:<Your Port>
   ```

## Environment Variables
| Variable     | Description                         | Default              |
|--------------|-------------------------------------|----------------------|
| `PORT`       | Port number the app will run on     | `8000`               |
| `MONGO_URI`  | MongoDB connection string           | `mongodb+srv://<Your Username>:<Your Password>@cluster0.dp5v4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` |
| `REDIS_HOST` | Redis server host                   | `127.0.0.1`          |
| `REDIS_PORT` | Redis server port                   | `<Your Port>`               |

## Running the Application

### Development Mode
```bash
npm run start
```

### Production Mode
```bash
npm start
```

### Using Docker
1. **Build and Run Containers**
   ```bash
   docker-compose up --build
   ```
2. **Stop Containers**
   ```bash
   docker-compose down
   ```

## API Usage

### Base URL
```
http://localhost:8000/api/faqs
```

### Endpoints

#### 1. **Get All FAQs**
- **URL:** `/`
- **Method:** `GET`
- **Response:**
  ```json
  [
    {
      "_id": "60b8d2952e35f70015d2cbb7",
      "question": "What is BharatFD?",
      "answer": "BharatFD is a multilingual FAQ system.",
      "language": "en"
    }
  ]
  ```

#### 2. **Get FAQs by Language**
- **URL:** `/faqs?lang={language_code}`
- **Method:** `GET`
- **Example:** `/faqs?lang=hi`
- **Response:**
  ```json
  [
    {
      "_id": "60b8d2952e35f70015d2cbb8",
      "question": "BharatFD kya hai?",
      "answer": "BharatFD ek multilingual FAQ system hai.",
      "language": "hi"
    }
  ]
  ```

#### 3. **Create a New FAQ**
- **URL:** `/faqs`
- **Method:** `POST`
- **Body:**
  ```json
  {
    "question": "How to use BharatFD?",
    "answer": "You can use the API to manage FAQs.",
    "language": "en"
  }
  ```
- **Response:**
  ```json
  {
    "message": "FAQ created successfully",
    "faq": {
      "_id": "60b8d2952e35f70015d2cbb9",
      "question": "How to use BharatFD?",
      "answer": "You can use the API to manage FAQs.",
      "language": "en"
    }
  }
  ```

## Testing

### Run Tests
```bash
npm test
```

### Using Postman
1. Import the API collection from the repository.
2. Configure environment variables in Postman.
3. Test different API endpoints.

#Screenshots
![Screenshot (345)](https://github.com/user-attachments/assets/f70c2ff6-bd86-4a76-8d63-ab3418743cf9)
![Screenshot (343)](https://github.com/user-attachments/assets/9ac5ec31-fbe8-4bfb-9e00-2b31b09dfb78)
![Screenshot (344)](https://github.com/user-attachments/assets/07bbcb66-9d86-49a0-842e-4d51839694f4)


## Contribution Guidelines

1. **Fork the Repository**  
   Click on the "Fork" button at the top right of the repository page.

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/imShubh03/multilingual-FAQ-API-with-Redis-cachinge.git
   cd multilingual-FAQ-API-with-Redis-caching
   ```

3. **Create a New Branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

4. **Make Your Changes**

5. **Commit Your Changes**
   Use [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: Add multilingual FAQ model"
   ```

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create a Pull Request**  
   Open a PR against the `main` branch in the original repository.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Happy Coding! 🚀

