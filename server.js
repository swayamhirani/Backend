const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
   res.json({ message: "Welcome to My App" });
});

app.post('/submit', (req, res) => {
   const { name, email } = req.body;

   res.json({
      msg: "Data received successfully",
      name,
      email
   });
});

app.listen(30505, () => {
   console.log("Server running on port http://localhost:30505");
});