const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Example route
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// Feature routes (example)
const userManagementRoutes = require('./routes/user-management');
app.use('/api/user-management', userManagementRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});