const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'LFCKW8 - Pokemon API',
      version: '1.0.0',
      description: 'Pokémon statisztikai API dokumentáció',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  
  apis: ['./routes/*.js'], 
};

try {
    const swaggerSpec = swaggerJsdoc(options);
    module.exports = swaggerSpec;
} catch (error) {
    console.error('Swagger konfigurációs hiba:', error);
    module.exports = {};
}