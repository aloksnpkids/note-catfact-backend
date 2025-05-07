const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const noteRoutes = require('./routes/noteRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');


const app = express();

app.use(cors({
    origin: '*'
  }));
  
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/notes', noteRoutes);

module.exports = app;
