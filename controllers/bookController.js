const Book = require('../models/book');

exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if(!book) return res.status(404).json("Book not found");
  res.status(200).json(book);
};



exports.createBook = async (req, res) => {
  const book = new Book({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    author: req.body.author,
    pages: req.body.pages,
    price: req.body.price
  });

  try {
    const newBook = await book.save();
    res.status(201).json(newBook);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateBook = async (req, res) => {
  
  let book = await Book.findById(req.params.id);

  if (!book) return res.status(404).json({ message: 'Book not found' });

  book = await Book.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json(book);
};

exports.deleteBook = async (req, res) => {
  try{
    const book = await Book.findById(req.params.id);

    if(!book) return res.status(404).json({ message: 'Book not found'});
    
    await book.deleteOne();
    
    res.status(200).json({ message: 'Book deleted' });
  } catch (err) {
    res.status(404).json({ message: err.message});
  }
   
} ;
