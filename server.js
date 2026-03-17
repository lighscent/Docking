const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
require("dotenv").config();

const containersRouter = require("./routes/containers");
const imagesRouter = require("./routes/images");
const uiRouter = require("./routes/ui");

const app = express();
const PORT = process.env.PORT || 1703;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.use("/api/containers", containersRouter);
app.use("/api/images", imagesRouter);
app.use("/ui", uiRouter);

app.get("/", (req, res) => res.redirect("/ui/containers"));

app.listen(PORT, () => {
    console.log(`docker-board listening on http://0.0.0.0:${PORT}`);
});
