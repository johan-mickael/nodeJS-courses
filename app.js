const express = require('express');
const mongoose = require('mongoose');
const app = express();

const URI = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0.5wbmgio.mongodb.net/${process.env.MONGO_DATABASE}`;

const connection = async () => {
  await mongoose.connect(URI);
  console.log(`You are now connected to ${process.env.MONGO_DATABASE} database.`)
}

const db = mongoose.connection;

app.use((req, res, next) => {
  console.log('Request sent.');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Request received.' });
  next();
});

app.use((req, res, next) => {
  console.log('Response sent successfully.');
});

module.exports = {
  app: app,
  connection: connection,
  db: db
};