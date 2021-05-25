import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRouter from "./src/routers/userRouter";
import videoRouter from "./src/routers/videoRouter";
import globalRouter from "./src/routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.use(helmet());
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy",
    "script-src 'self' https://archive.org"
  );
  return next();
});
app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
// 주어진 directory에서 file을 전달하는 middleware function
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger);

app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;
