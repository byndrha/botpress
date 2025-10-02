const express = require('express');
const bp = require('botpress');

const app = express();

// Start Botpress
bp.start().then(() => {
  app.use('/botpress', bp.http.middleware());
  app.listen(3000, () => {
    console.log('Botpress is running!');
  });
});
