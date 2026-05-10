const swaggerJsDoc = require('swagger-jsdoc');


const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'iPhone Sales API',
            version: '1.0.0',
            description: 'Kaggle iPhone eladások - Teljes CRUD és Aggregáció',
        },
        servers: [{ url: 'http://localhost:3000' }],
        tags: [
            { name: 'CRUD műveletek', description: 'Adatok kezelése (Hozzáadás, Listázás, Módosítás, Törlés)' },
            { name: 'Statisztika', description: 'Aggregált adatok lekérdezése' }
        ],
        paths: {
            '/api/iphones': {
                get: {
                    tags: ['CRUD műveletek'],
                    summary: 'Összes eladás listázása',
                    responses: { 200: { description: 'Sikeres' } }
                },
                post: {
    tags: ['CRUD műveletek'],
    summary: 'Új iPhone eladás rögzítése',
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        orderId: { type: 'number', example: 2001 },
                        customerName: { type: 'string', example: 'Kovács János' },
                        country: { type: 'string', example: 'Hungary' },
                        iphoneModel: { type: 'string', example: 'iPhone 15 Pro' },
                        storage: { type: 'string', example: '256GB' },
                        color: { type: 'string', example: 'Titanium' },
                        quantity: { type: 'number', example: 1 },
                        price: { type: 'number', example: 999 },
                        saleDate: { type: 'string', example: '2024-03-10' },
                        paymentMethod: { type: 'string', example: 'Credit Card' }
                    }
                }
            }
        }
    },
    responses: { 
        201: { description: 'Sikeresen létrehozva' },
        400: { description: 'Hibás adatok' }
    }
}
            },
            '/api/iphones/{id}': {
      put: {
    tags: ['CRUD műveletek'],
    summary: 'Eladás módosítása ID alapján',
    parameters: [
        { 
            name: 'id', 
            in: 'path', 
            required: true, 
            description: 'A MongoDB által generált egyedi azonosító (_id)',
            schema: { type: 'string', example: '65f123abc456def789012345' } 
        }
    ],
    requestBody: {
        required: true,
        content: {
            'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                        iphoneModel: { type: 'string', example: 'iPhone 15 Pro Max' },
                        storage: { type: 'string', example: '512GB' },
                        price: { type: 'number', example: 1199 },
                        color: { type: 'string', example: 'Natural Titanium' }
                    }
                }
            }
        }
    },
    responses: { 
        200: { description: 'Sikeres frissítés' },
        404: { description: 'A megadott ID nem található' },
        400: { description: 'Hiba a módosítás során' }
    }
},
                delete: {
                    tags: ['CRUD műveletek'],
                    summary: 'Eladás törlése ID alapján',
                    parameters: [{ name: 'id', in: 'path', required: true, schema: { type: 'string' } }],
                    responses: { 200: { description: 'Sikeres törlés' } }
                }
            },
            '/api/iphones/stats': {
                get: {
                    tags: ['Statisztika'],
                    summary: 'Országonkénti összesített adatok (Aggregáció)',
                    responses: { 200: { description: 'Sikeres aggregáció' } }
                }
            }
        }
    },
    apis: [],
};

module.exports = swaggerJsDoc(swaggerOptions);