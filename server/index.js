import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import postRouter from "./routes/postsRouter.js"
import userRouter from "./routes/userRouter.js"
import dotenv from "dotenv"
const app = express()
dotenv.config()
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use("/posts", postRouter)
app.use("/users", userRouter)
 const CONNECTION_URL =  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/postsMessages?retryWrites=true&w=majority`

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`server running on port:${PORT}`) }))
    .catch((err) => console.log(err.message));