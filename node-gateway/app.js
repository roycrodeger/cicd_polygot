const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from node service');
});

app.get('/gateway/status', (req, res) => {
    res.join({
        service: 'node-gateway',
        status: 'running',
        timestamp: new Date().toISOString()
    });

});
  

module.exports = app;