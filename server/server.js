const dotenv = require("dotenv");
const express = require("express");
const errorHandler = require("./server/middleware/error-handling");
const cors = require("./server/middleware/cors");
const logger = require("./server/middleware/logger");

const dotenv = require("dotenv");
const express = require("express");
const errorHandler = require("./server/middleware/error-handling");
const cors = require("./server/middleware/cors");
const logger = require("./server/middleware/logger");

const ApiRouter = require("./server/routes/api");
const AuthRouter = require("./server/routes/api/auth");
const ImageRouter = require("./server/routes/images");

dotenv.config();

const APP_PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

const app = express();

app.use([errorHandler, logger, cors, express.json()]);

app.use("/api", ApiRouter);
app.use("/auth", AuthRouter);
app.use("/images", ImageRouter);

process.on("unhandledRejection", (reason, promise) => {
  // console.log("Unhandled Rejection", reason.message);
  throw reason;
});

process.on("uncaughtException", (error) => {
  console.log("Uncaught Exception", error.stack);
  // process.exit(1);
});

app.listen(APP_PORT, () => console.log(`app listening on port ${APP_PORT}`));
