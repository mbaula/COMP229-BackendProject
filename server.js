import config from './config/config.js';
import app from './server/express.js';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;

mongoose.connect(config.mongoUri, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
})
.then(() => console.log("Connected to the database!"))
.catch(err => console.error(`Failed to connect to database: ${err.message}`));

mongoose.connection.on('error', err => {
    throw new Error(`unable to connect to database: ${config.mongoUri}`);
});

app.get("/", (req, res) => {
    res.json({ message: "Welcome to COMP 229: Assigment 2." });
});

// Start the server and listen on the configured port
app.listen(config.port, (err) => {
    if (err) {
        console.log(err);
    }
    console.info('Server started on port http://localhost:%s.', config.port);
});
