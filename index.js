import 'dotenv/config';
import express from 'express';
import pictureRoutes from "./routes/pictures.js"


const app = express();
const port = 8000;

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.use("/", pictureRoutes);

app.get('/', (req, res) => {
    res.send("root")
})

app.listen(port, () => {
    console.log('App listening on a port ' + port)
})