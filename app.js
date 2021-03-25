import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();

const handleHome = (req, res) => res.send("hello from home");

const handleProfile = (req, res) => res.send("You are on my profile");

app.use(helmet());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/profile", handleProfile);
app.get("/", handleHome);

export default app;
