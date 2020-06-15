import express from "express"
import mongoose from "mongoose";
import bodyparser from "body-parser";
import cors from "cors";

import routes from "./routes/schoolRoute";

const app = express()
const PORT = 3100

// Mongo connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/schoolDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

//Body Parser

app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

routes(app)

// CORS fix

app.use(cors())

app.get('/', (req, res) => {
    res.send(`This is running on ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Running here on ${PORT}`);
})