// db.js
import mongoose from 'mongoose';

async function connectToMongo() {
  try {
    await mongoose.connect(
      'mongodb+srv://meet:oJ40SCa7RTIxvKjX@cluster0.owqfz94.mongodb.net/eventspark?retryWrites=true&w=majority'
    );
    console.log('✅ Connected to MongoDB');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
    throw err;
  }
}

export default connectToMongo; // ✅ this exports the function directly
