const express = require('express');
const cors = require('cors');

const app = express();

// ✅ Dynamic PORT for deployment (Render/Heroku)
const PORT = process.env.PORT || 30505;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Root route (check server quickly)
app.get('/', (req, res) => {
   res.send("Backend is running 🚀");
});

// ✅ GET API
app.get('/message', (req, res) => {
   res.json({ message: "Welcome to My App" });
});

// ✅ POST API with validation
app.post('/submit', (req, res) => {
   const { name, email } = req.body;

   // Validation
   if (!name || !email) {
      return res.status(400).json({
         error: "Name and Email are required"
      });
   }

   res.json({
      msg: "Data received successfully",
      name,
      email
   });
});

// ✅ Error handling middleware
app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).json({
      error: "Something went wrong"
   });
});

// ✅ Start server
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});