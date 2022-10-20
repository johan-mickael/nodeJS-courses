import mongoose from 'mongoose';

const URI = `${process.env.MONGO_DRIVER}://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/${process.env.MONGO_DATABASE}`;
const connection = () => {
    mongoose.connect(URI)
        .then(() => {
            console.log(`You are now connected to ${process.env.MONGO_DATABASE} database.`);
        }, (err) => {
            console.error(`An error occured when trying to connect to ${process.env.MONGO_DATABASE} database.\n${err}`);
        });
}

const db = mongoose.connection;

export { connection, db }