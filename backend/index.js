import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose'; // for MongoDB database connection
// import loginRoute from './routes/auth.js';
// import signupRoute from './routes/auth.js';

// import details from  './routes/update.js';
// import about from  './routes/update.js';
// import web from  './routes/update.js';
// import personalInfo from  './routes/update.js';
// import password from  './routes/update.js';
// import interest from  './routes/update.js';

// import profileUpload from './constants/multer.js';


const app = express();
// app.use(express.json());

dotenv.config();

const PORT=5000;

mongoose
    .connect(process.env.DB_URL,) // using the MONGO_URL variable from environment variables
    .then(() => console.log("DBconnection successful")) // If connection successful, log to console
    .catch((err) => { // If connection fails, log error to console
        console.log(err);
    });


// app.use("/login", loginRoute);
// app.use("/signup", signupRoute);
// app.use("/updateUser/details", profileUpload.single("profile"), details);
// app.use("/updateUser/about", about);
// app.use("/updateUser/web", web);
// app.use("/updateUser/personalInfo", personalInfo);
// app.use("/updateUser/password", password);
// app.use("/updateUser/interest", interest);

app.listen(PORT, ()=> console.log(`listening on port ${PORT}`));
