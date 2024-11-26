const express = require("express");
const cors = require("cors");
const connectDB = require("./db/config.db");
const app = express();
app.use(express.json());
app.use(cors({ origin: true, credentials: true }));
const {logger, loggerJSON} = require("./service/logger")

const PORT = process.env.PORT || 4000;

connectDB()

logger.error("Logger error")
logger.info("logger info")
logger.debug("logger debug")
logger.warn("logger warn")
loggerJSON.info("loggerjson info")
loggerJSON.error("loggerJson error")

app.listen(PORT, () => {
  console.log(`Server is running on the port:${PORT}`);
});
