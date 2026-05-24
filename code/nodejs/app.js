import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from './swagger.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

console.log(process.env.MONGO_CONNECTION_STRING);
console.log(process.env.DATABASE_NAME);

mongoose.connect(process.env.MONGO_CONNECTION_STRING, { family:4, dbName: process.env.DATABASE_NAME })
        .then(() => console.log('Successfully connected to MongoDB.'))
        .catch(err => console.error(`Connection error: ${err}`));

mongoose.connection.once('open', () => {
  app.use(express.json());
  app.use('/api/users', userRoutes);
  app.listen(3000, () => console.log('Server listening at http://localhost:3000'));
});