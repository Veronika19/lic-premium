import express from 'express';
const app = express();

import './config/index.js';
import routes from './routes/index.js';

// parse incoming request
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/premium', routes.Premium);
app.use('/user', routes.Users);

console.log('=======', process.env.NODE_ENV);

if (process.env.NODE_ENV === 'production') {
  console.log('=======', process.env.NODE_ENV);
  // server static assets files
  app.use(express.static('client/build'));

  // serve index.html i any route is not found
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => console.log('app started at ' + PORT));
