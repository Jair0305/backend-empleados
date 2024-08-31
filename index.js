import express from 'express';
import empleadosRoutes from './routes/empleadoRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

const corsOptions = {
  origin: '*',
  optionSuccessStatus: 200
}

app.use(cors(corsOptions)); // Use the cors middleware
app.use(express.json());
app.use('/api/empleado', empleadosRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});