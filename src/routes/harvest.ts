import express from 'express';
import multer from 'multer';
import * as harvestServices from '../services/harvestService';
import {parseFile} from '../services/csvServices';
import { HarvestIn, NewHarvestInformation } from '../models/harvest/harvestInputModel';


const router = express.Router();
const upload = multer({dest: 'tmp/csv'});

router.get('/', async (_req, res) =>{
    try{
        const harvests = await harvestServices.getAllHarvest();
        res.json(harvests);
    } catch(err: any){
        res.status(400).json({"error": err.message})
    }
    
});

router.post('/', async (req, res) =>{
    const newHarvest = new NewHarvestInformation(
        req.body.farmerEmail,
        req.body.farmerName,
        req.body.farmerLastName,
        req.body.clientEmail,
        req.body.clientName,
        req.body.clientLastName,
        req.body.fieldName,
        req.body.fieldLocation,
        req.body.fruit,
        req.body.harvestVariety
    )

    try {
        await harvestServices.insertHarvest(newHarvest)
        res.send("the new haverst information was sucessfully created!");
    } catch (error: any){
        res.status(400).json({"error": error.message})
    }
    
});

router.post('/csv', upload.single('file'),async (req, res) => {
    const fileContents: Array<HarvestIn> = await parseFile((req as any).file.path);
    try {
        await harvestServices.insertMany(fileContents);
        res.send("the data from the file was sucessfully saved!")
    }catch (error: any){
        res.status(400).json({"error": error.message})
    }
    
})

export default router;