const express = require('express');
const app = express();
const notFound = require('./middleware/not-found');
const errorMiddleware = require('./middleware/errorHandlerMiddleware');

/* Middleware */
app.use(express.static('./public'));
app.use(express.json());

/* Routes */

app.use('/api/v1/tasks', require('./routes/tasks'));

/* Middleware */

app.use(notFound);
app.use(errorMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();