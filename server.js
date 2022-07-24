const app = require('./src/app');
require('dotenv').config();

const PORT = process.env.API_PORT || 3000;

app.get('/', (_req, res) => {
  res.send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
