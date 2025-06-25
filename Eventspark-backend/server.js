// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectToMongo from './db.js';
import authRoutes from './routes/auth.js';
import organizerRoutes from './routes/OrganizerAuth.js';
import eventRoutes from './routes/organizersEvents.js'; // ✅ Add event routes

dotenv.config(); // ✅ Load environment variables

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/organizer', organizerRoutes);
app.use('/api/organizer', eventRoutes); // ✅ Mount event routes

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
