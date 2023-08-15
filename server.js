import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";

// different methods for fetching data in node
// number 1
const getData = async () => {
  const response = await fetch(
    "https://www.course-api.com/react-useReducer-cart-project"
  );
  const cartData = await response.json();
  console.log(cartData);
};
getData();

// number 2
fetch("https://www.course-api.com/react-useReducer-cart-project")
  .then((res) => res.json())
  .then((data) => console.log(data));

//number 3

try {
  const response = await fetch(
    "https://www.course-api.com/react-useReducer-cart-project"
  );
  const cartData = await response.json();
  console.log(cartData);
} catch (error) {
  console.log(error);
}

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
dotenv.config();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`server is running on PORT ${port}`);
});
