const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

const AuthRoutes = require('./routes/auth');

app.use('/auth', AuthRoutes);

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
