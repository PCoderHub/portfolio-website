require('dotenv').config();

require('./db/conn');
const express = require('express');
const app = express();
const routes = require('./routes/route');

app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})
app.use('/api', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on ${process.env.PORT}`);
})