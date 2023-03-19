import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
const httpServer = http.createServer(app);

//imports files
import connectdb from "./src/config_db/db.js";
import { loginRouter } from "./src/routes/loginRoute.js";
import { userRouter } from "./src/routes/userRoute.js";

//cors
app.use(cors());

// cookie parser middleware
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Router
app.use("/", loginRouter);
app.use("/", userRouter);

//Database connection
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://127.0.0.1:27017";
connectdb(DATABASE_URL);

//server
const port = process.env.PORT || 7000;
httpServer.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
