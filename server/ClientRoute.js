const express = require('express');
const router = express.Router();
const db = require('mongodb');

router.get('/fetch', async (req, res) => {
    try {
        const client = await db.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const dbInstance = client.db(dbName);
        const collection = dbInstance.collection('user');

        // Fetch all user documents
        const users = await collection.find({}).toArray();

        res.json({ success: true, users });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

router.post('/login', async (req, res) => {
    try {
        const client = await db.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        const dbInstance = client.db(dbName);
        const collection = dbInstance.collection('user');
        const userData = req.body;
        const result = await collection.insertOne(userData);

        console.log('User inserted with _id:', result.insertedId);
        res.json({ success: true, message: 'User data saved successfully' });
    } catch (error) {
        console.error('Error saving user data:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

router.use((req, res) => {
    res.status(404).json({ success: false, message: 'Not Found' });
});

module.exports = router;
