const express = require("express");
const app = express();
const port = 3000;
const resumeController = require("./Controllers/resumeController");

app.use(express.static("public"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", resumeController.index);

app.post("/generate", resumeController.resume);

app.listen(port, () => {
  console.log(`App listening on port ${port}!`);
});
