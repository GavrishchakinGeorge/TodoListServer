import express from 'express';
import mongoose from 'mongoose';
import router from "./router.js";
import fileUpload from 'express-fileupload';
import cors from 'cors';

const PORT = process.env.PORT || 8000;
const DB_URL = `mongodb+srv://user:eVisCsD5@cluster0.a5s5s.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
app.use('/', router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true});
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
    } catch (e) {
        console.log(e);
    }
}

startApp();
