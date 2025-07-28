const express = require('express');
const app = express();
const port = 3000

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
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

