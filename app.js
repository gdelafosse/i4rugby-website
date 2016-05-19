'use strict'

const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 8080))

app.use(express.static('www'));

app.listen(app.get('port'), () => {
  console.log('i4rugby website is running!');
});
