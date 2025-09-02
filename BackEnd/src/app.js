// const express = require('express');
// const aiRoutes = require('./routes/ai.routes')
// const cors = require('cors')

// const app = express()

// app.use(cors())


// app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('Hello World')
// })

// app.use('/ai', aiRoutes)

// module.exports = app
// src/app.js

const express = require('express');
const cors = require('cors');
const aiRoutes = require('./routes/ai.routes');

const app = express();

// Enable CORS only for your frontend URL
app.use(cors({
    origin: 'https://code-reviewer-using-ai.vercel.app', // Vercel frontend
    methods: ['GET', 'POST']
}));

// Middleware to parse JSON bodies
app.use(express.json());

// Health check route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// AI routes
app.use('/ai', aiRoutes);

module.exports = app;
