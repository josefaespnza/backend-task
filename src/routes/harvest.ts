import express from 'express';
import * as harvestServices from '../services/harvestService';
const router = express.Router();

router.get('/', async (_req, res) =>{
    try{
        const harvests = await harvestServices.getAllHarvest();
        res.send(harvests);
    } catch(err: any){
        res.status(400).json({"error": err.message})
    }
    
});

router.post('/', async (req, res) =>{
    const {
        farmerEmail,
        farmerName,
        farmerLastName,
        clientEmail,
        clientName,
        clientLastName,
        fieldName,
        fieldLocation,
        fruit,
        harvestVariety
    } = req.body;
    try {
        await harvestServices.insertHarvest(
            farmerEmail,
            farmerName,
            farmerLastName,
            clientEmail,
            clientName,
            clientLastName,
            fieldName,
            fieldLocation,
            fruit,
            harvestVariety
        )
        res.send("the new haverst information was sucessfully created!");
    } catch (error: any){
        res.status(400).json({"error": error.message})
    }
    
});



export default router;