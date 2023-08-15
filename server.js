import express from "express";
const app = express();
const port = 5100;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5100, () => {
  console.log(`server is running on port ${port}`);
});
