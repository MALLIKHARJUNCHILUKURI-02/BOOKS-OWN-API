# Books API Documentation

## Overview
The **Books API** is a RESTful API that allows users to manage a collection of books. It provides endpoints to **fetch, add, update, delete, and filter books** based on different criteria.

### **Base URL:**  
```
https://books-own-api.onrender.com/
```

---

## **1. Get All Books**
**Endpoint:**  
```
GET /books
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/books
```
**Response:**  
```json
[
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "summary": "A novel about racial injustice and moral growth in the Deep South.",
    "publication_year": 1960
  }
]
```

---

## **2. Get a Book by ID**
**Endpoint:**  
```
GET /books/{id}
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/books/{id}
```
**Example Request:**  
```
https://books-own-api.onrender.com/books/1
```
**Response:**  
```json
{
  "id": 1,
  "title": "To Kill a Mockingbird",
  "author": "Harper Lee",
  "genre": "Fiction",
  "summary": "A novel about racial injustice and moral growth in the Deep South.",
  "publication_year": 1960
}
```

---

## **3. Filter Books by Author**
**Endpoint:**  
```
GET /filter?author={author_name}
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/filter?author={author_name}
```
**Example Request:**  
```
http://localhost:3000/filter/author?author={authorName}
```
**Response:**  
```json
[
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "summary": "A novel about racial injustice and moral growth in the Deep South.",
    "publication_year": 1960
  }
]
```

---


## **4. Filter Books by Genre**
**Endpoint:**  
```
GET /filter?author={author_name}
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/filter?author={author_name}
```
**Example Request:**  
```
http://localhost:3000/filter/genre?genre={genre_name}
```
**Response:**  
```json
[
  {
    "id": 1,
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "summary": "A novel about racial injustice and moral growth in the Deep South.",
    "publication_year": 1960
  }
]
```

---





## **5. Add a New Book**
**Endpoint:**  
```
POST /books
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/books
```
**Headers:**  
```json
{
  "Content-Type": "application/json"
}
```
**Request Body:**  
```json
{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "summary": "A story of wealth, love, and the American Dream.",
  "publication_year": 1925
}
```
**Response:**  
```json
{
  "id": 2,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "summary": "A story of wealth, love, and the American Dream.",
  "publication_year": 1925
}
```

---

## **6. Update a Book (Full Update)**
**Endpoint:**  
```
PUT /books/{id}
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/books/{id}
```
**Request Body:**  
```json
{
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "summary": "An updated summary of wealth, love, and the American Dream.",
  "publication_year": 1925
}
```
**Response:**  
```json
{
  "id": 2,
  "title": "The Great Gatsby (Updated)",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "summary": "An updated summary of wealth, love, and the American Dream.",
  "publication_year": 1925
}
```

---

## **7. Update a Book (Partial Update)**
**Endpoint:**  
```
PATCH /books/{id}
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/books/{id}
```
**Request Body:**  
```json
{
  "summary": "A newly updated summary of Gatsby's journey."
}
```
**Response:**  
```json
{
  "id": 2,
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "genre": "Classic",
  "summary": "A newly updated summary of Gatsby's journey.",
  "publication_year": 1925
}
```

---

## **8. Delete a Book**
**Endpoint:**  
```
DELETE /books/{id}
```
**Complete Reference Link:**  
```
https://books-own-api.onrender.com/books/{id}
```
**Example Request:**  
```
https://books-own-api.onrender.com/books/2
```
**Response:**  
```json
{
  "message": "Book deleted"
}
```

---

## **Error Handling**
### **404 - Not Found**
- **When an invalid book ID is requested**
- **When filtering for a non-existent author**

**Response:**  
```json
{
  "message": "Book not found"
}
```

---

## **Setup & Deployment**

### **1. Install Dependencies**
Run the following command to install the required dependencies:
```sh
npm install express cors fs
```

### **2. Start the Server Locally**
Run the following command to start the server:
```sh
node server.js
```
The API will run on:
```
http://localhost:3000/
```

### **3. Deploying to Render**
- Push your project to GitHub
- Connect GitHub to **Render**
- Deploy as a Node.js application

---

## **Conclusion**
This API provides full CRUD (Create, Read, Update, Delete) functionality for managing books. It is deployed on **Render** and can be accessed globally.

**Happy Coding! 🚀**

