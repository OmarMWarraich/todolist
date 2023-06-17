const express = require('express');
const app = express();

/* Middleware */
app.use(express.static('./public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
    }
);


app.listen(5000, () => console.log('Server running on port 5000'));