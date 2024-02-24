const express = require('express');
const app = express();
const swaggerUI = require('swagger-ui-express');

const PORT = 8080;

const { dbConnection } = require('./config/config');
const routes = require('./routes/tasks');
const docs = require('./docs/index');

app.use(express.json());

app.use('/', routes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs));

dbConnection();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));