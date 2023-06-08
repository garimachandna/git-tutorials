express = require("express");
colors = require("colors");
dotenv = require("dotenv");
morgan = require("morgan");
connectDB = require("./config/db.js");
authRoutes = require("./routes/authRoute.js");
cors = require("cors");

//configure env
dotenv.config();

//database config
connectDB();

const app = express();

// app.use(express.static('public'));

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api", authRoutes);

//rest api
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//port
const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(
    `Server started on ${process.env.DEV_MODE} mode on port ${port}`.bgCyan
      .white
  )
);
