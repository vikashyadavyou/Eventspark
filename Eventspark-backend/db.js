const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://meet:oJ40SCa7RTIxvKjX@cluster0.owqfz94.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Define the database name you created in Atlas (e.g., 'eventspark')
const dbName = 'eventspark';

let db;

async function connectToMongo() {
  try {
    await client.connect();
    db = client.db(dbName);
    console.log('✅ Connected to MongoDB Atlas');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err);
  }
}

function getDb() {
  if (!db) {
    throw new Error('DB not connected. Please call connectToMongo first.');
  }
  return db;
}

module.exports = {
  connectToMongo,
  getDb,
};
