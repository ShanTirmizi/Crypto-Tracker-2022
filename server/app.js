const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const port = 8080;

app.use(cors());

app.get("/", async (req, res, next) => {
  await axios
    .get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    .then((data) => res.send(data.data))
    .catch((err) => next(err));
});

app.get("/:id", async (req, res, next) => {
  const { id } = req.params;

  await axios
    .get(
      `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`
    )
    .then((data) => res.send(data.data))
    .catch((err) => next(err));
});

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`);
});
