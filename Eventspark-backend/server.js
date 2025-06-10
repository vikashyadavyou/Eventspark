const express = require('express');
const cors = require('cors');
const { connectToMongo } = require('./db');
const authRoutes = require('./routes/auth'); // If you have auth routes

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

const PORT = 5000;

connectToMongo().then(() => {

    app.get('/', (req, res) => {
        res.send('✅ Eventspark API is running');   
    });

    
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
});
