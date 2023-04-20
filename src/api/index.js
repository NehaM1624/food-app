// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// //const bodyParser = require("body-parser");
// const RouterPath = require("./router");

// const app= express();

// const port = 7000;

// app.use(bodyParser.json());
// app.use(cors());
// //app.use("/",RouterPath);
// //app.use("/api/status",RouterPath);
// app.use("/api/card_details",RouterPath);

// app.listen(port, ()=>console.log("Server running on port 7000"));

const express = require("express");
const cors = require("cors");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const app = express();
const port = 7000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "neha123",
  database: "grey_goose",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.post("/api/card_details", (req, res) => {
  const name = req.body["name"];
  const cardNumber = req.body["card-number"];
  const cvv = req.body["cvv"];
  const expiryDate = req.body["expiry-date"] + "-01";
  console.log(`Card details saved for ${name}`);
  const sql = `INSERT INTO payment_details (\`CardHolder Name\`, \`Card Number\`,\`CVV\`, \`Expiry Date\`) VALUES (?, ?, ?, ?)`;
  const values = [name, cardNumber, cvv, expiryDate];
  console.log(req);

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error saving card details");
    }
    console.log(`Card details saved for ${name}`);
    res.status(200).send(`Card details saved for ${name}`);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
