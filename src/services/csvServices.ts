import fs from 'fs';
import csv from 'csv-parser';
import { HarvestIn, NewHarvestInformation } from '../models/harvest/harvestInputModel';

const readFile = (fileName: string) => new Promise<any[]>((resolve, _reject) => {
    const stream: any = [];
     
    fs.createReadStream(fileName).pipe(csv()) 
      .on('data', (data: any) => stream.push(data))
      .on('end', () => {
         resolve(stream)
    });
});

export const parseFile = async (fileName: string) => {
  const fileContents: any[] = await readFile(fileName);
  const newHarvestInfo: Array<HarvestIn> = [];
  fileContents.map((dataObject)=> {
    const key:string = Object.keys(dataObject)[0];
    const harvestValue: Array<string>= dataObject[key].split(";");
    newHarvestInfo.push(new NewHarvestInformation(
      harvestValue[0],
      harvestValue[1],
      harvestValue[2],
      harvestValue[3],
      harvestValue[4],
      harvestValue[5],
      harvestValue[6],
      harvestValue[7],
      harvestValue[8],
      harvestValue[9]
    ))

  })
  return newHarvestInfo;


}
