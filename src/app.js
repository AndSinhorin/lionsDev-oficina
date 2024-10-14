import express from 'express';
import connectDB from './config/db.js';
import oficinaRouter from './routers/oficinaRouter.js'
import veiculoRouter from './routers/veiculoRouter.js'
import manutencaoRouter from './routers/manutecaoRouter.js'

connectDB();

const app = express();
app.use(express.json());

app.use('/oficina', oficinaRouter)
app.use('/veiculo', veiculoRouter)
app.use('/manutencao', manutencaoRouter)

app.listen(3000, () => console.log('Server running on port 3000'));