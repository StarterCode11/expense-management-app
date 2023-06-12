const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");
const connectDb = require("./config/ConnectDb");

dotenv.config();
const app = express();

connectDb

//middlewares

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/users", require("./routes/userRoute"));
app.use("/api/v1/transcation", require("./routes/transcationRoutes"));


const PORT = 8080|| process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});