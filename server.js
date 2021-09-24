const app = require('./app');
const port = require('./config').PORT;

app.listen(port, () => {
  console.log('Welcome to Sun Mobility');
  console.log(`Server running on port: ${port}`);
});
