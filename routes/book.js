const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);
router.post('/', bookController.createBook);

router.get('/:id', bookController.getBook);
router.put('/:id', bookController.updateBook);
router.delete('/:id', bookController.deleteBook);

//get Book here is a middleware
// async function getBook(req, res, next) {
//     try {
//       const book = await Book.findById(req.params.id);
//       if (!book) {
//           return res.status(404).json({ message: 'Book not found' });
//           }
//           res.book = book;
//           next();
//           } catch (err) {
//                return res.status(500).json({ message: err.message });
//       }
//   }
        
module.exports = router;
