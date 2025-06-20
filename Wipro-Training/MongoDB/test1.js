const { MongoClient } = require('mongodb');

// Replace the URL with your MongoDB connection string
const url = 'mongodb://localhost:27017'; // Default MongoDB URL

// Database name
const dbName = 'myNewDatabase';

async function createDatabase() {
    const client = new MongoClient(url);

    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("Connected to MongoDB!");

        // Create or use the database
        const db = client.db(dbName);
        console.log(`Database created: ${dbName}`);

        // Create a collection
        const collection = await db.createCollection('myNewCollection');
        console.log("Collection created: myNewCollection");

        // Add 5 random documents to the collection
        const users = [
            { id: 101, name: 'Emma Watson', age: 25, city: 'San Francisco' },
            { id: 102, name: 'Liam Williams', age: 32, city: 'Miami' },
            { id: 103, name: 'Olivia Johnson', age: 27, city: 'Seattle' },
            { id: 104, name: 'Noah Davis', age: 29, city: 'Denver' },
            { id: 105, name: 'Sophia Lee', age: 22, city: 'Boston' }
        ];

        // Insert the documents into the collection
        const result = await collection.insertMany(users);
        console.log(`Inserted ${result.insertedCount} users`);

    } catch (err) {
        console.error(err);
    } finally {
        // Close the connection
        await client.close();
    }
}

createDatabase();
