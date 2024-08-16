import express from 'express';
import empleadosRoutes from './routes/empleadoRoutes.js';

const app = express();

app.use(express.json());
app.use('/api/empleado', empleadosRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})