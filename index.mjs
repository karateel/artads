import express from 'express';
import mongoose from 'mongoose';
import router from "./public/js/router.mjs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 5000;

const DB_URL = `mongodb+srv://user:user@cluster0.zimhd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const app = express();

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/artads/public'));
app.use('/', router)
app.use(express.json())


app.post('/')

async function startApp() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log('server 5000'))
  } catch (e) {
    console.log(e)
  }
}

startApp()