import express from 'express';
import harvestRouter from './routes/harvest'
import { initializeDatabase } from './database/createTables';


const app = express();


app.use(express.json());

initializeDatabase();

const PORT = 3000; 


app.get('/', (_req, res) => {
    res.send('welcome!');
});

app.use('/harvest', harvestRouter);

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
});

