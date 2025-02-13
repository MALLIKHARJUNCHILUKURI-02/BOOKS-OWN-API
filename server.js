import express from "express";
import cors from "cors";
import fs from "fs";

const app = express();
const PORT = 3000;
const DATA_FILE = "books.json";

app.use(cors());
app.use(express.json());

// Read books data
const readBooks = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

// GET all books
app.get("/books", (req, res) => {
  res.json(readBooks());
});

// GET a book by ID
app.get("/books/:id", (req, res) => {
  const books = readBooks();
  const book = books.find((b) => b.id === parseInt(req.params.id));
  book ? res.json(book) : res.status(404).json({ message: "Book not found" });
});

app.get("/filter", (req,res) =>{
    const books = readBooks();
    const author = req.query.author;

    if(!author){
        return res.status(400).json({ message: "Author query parameter is required" });
    }

    const filteredAuthor = books.filter((b) => b.author.toLowerCase() === author.toLowerCase());
   
    if(filteredAuthor.length > 0){
        res.json(filteredAuthor);
    } else{
        res.status(404).json({ message: "author not found" });
    }
});

// POST a new book
app.post("/books", (req, res) => {
  const books = readBooks();
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
  res.status(201).json(newBook);
});

// PUT (Update a book)
app.put("/books/:id", (req, res) => {
  let books = readBooks();
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books[index] = { id: parseInt(req.params.id), ...req.body };
  fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
  res.json(books[index]);
});

// PATCH (Partially update a book)
app.patch("/books/:id", (req, res) => {
  let books = readBooks();
  const index = books.findIndex((b) => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Book not found" });

  books[index] = { ...books[index], ...req.body };
  fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
  res.json(books[index]);
});

// DELETE a book
app.delete("/books/:id", (req, res) => {
  let books = readBooks();
  const bookId = parseInt(req.params.id)
  books = books.filter((b) => b.id !== bookId);
  fs.writeFileSync(DATA_FILE, JSON.stringify(books, null, 2));
  res.json({ message: `Book Id ${bookId} deleted` });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
