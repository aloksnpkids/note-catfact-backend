// swagger.js
const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Note-CatFact API',
      version: '1.0.0',
      description: 'API documentation for Note-CatFact App',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to route files for annotations
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
