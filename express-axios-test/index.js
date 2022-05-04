import express from "express";
import cors from "cors";
import axios from "axios";
const app = express();

app.use(cors());
async function getData() {
  const { data } = await axios.get("http://backend:8080/hello");
  console.log({ data });
  return data;
}

app.listen(8081, () => {
  getData();
});
