import express from 'express';
import { v1ProductsRouter } from './v1/routes/productsRoutes.js'

const app = express();
const PORT = process.env.PORT || 3030;

app.use(express.json());
app.use("/api/v1", v1ProductsRouter);

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});