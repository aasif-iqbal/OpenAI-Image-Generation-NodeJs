import express from "express";
import cors from "cors";
import 'dotenv/config'
import aiRoute from "./routes/aiRoutes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(express.static('src/public'));

app.use('/image', aiRoute);

const PORT = process.env.PORT;

app.listen(PORT,()=>{
    console.log(`Listening on port:`, PORT);
})