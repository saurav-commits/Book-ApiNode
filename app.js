const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const bookRoutes = require('./routes/book');

const app = express();

// Connect to database
mongoose.connect(config.dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Connected to database'))
.catch((err) => console.error(err));

// Middleware
app.use(express.json());

// Routes
app.use('/books', bookRoutes);

// Error handling
app.use((err, req, res, next) => {
console.error(err.stack);
res.status(500).json({ message: 'Something went wrong' });
});

// Start server
app.listen(config.port, () => console.log(`Server started on port ${config.port}`));


