// server.js
import express from 'express';
import cors from 'cors';
import connectToMongo from './db.js';
import authRoutes from './routes/auth.js';
import organizerRoutes from './routes/OrganizerAuth.js';


const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/organizer', organizerRoutes);


app.get('/', (_req, res) => res.send('✅ Eventspark API is running'));

connectToMongo()
  .then(() => {
    app.listen(PORT, () =>
      console.log(`🚀 Server running at http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.error('❌ Failed to connect to MongoDB:', err);
    process.exit(1);
  });
