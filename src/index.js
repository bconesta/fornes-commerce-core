import express from 'express';
import { v1ProductsRouter } from './v1/routes/productsRoutes.js'
import { PORT } from './config.js';

const app = express();

app.use(express.json());
app.use("/api/v1", v1ProductsRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});