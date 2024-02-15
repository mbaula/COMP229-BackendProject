import express from 'express';
import cors from 'cors';
import productRoutes from './routes/product.routes.js'; 
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Marketplace App Running' });
});

app.use('/api', productRoutes);

export default app
