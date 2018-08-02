import Dexie from 'dexie';
import { ElectricityData } from './model';

export class EnlightenService {

    db = new Dexie('enlightendb');

    constructor() {
        this.db.version(1).stores({
            //Schema - one for each category - go and delete the database
            electricity: "name,ACqty,AChrs,ACkWH,monthlyTotal,yearlyTotal,co2",
            car: "name,mph"
        });
        this.db.open();
    }

    updateElectricity(data: ElectricityData): Promise<any> {
        //insert the data if the rec does not exists - if no primary key matches
        //if exists, update the record - if primary key matches our data
        return (this.db['electricity'].put(data));
        //add() only insert/create new - primary key (identity) must be unique
        //return (this.db['electricity'].add(data));
    }
    
    getElectricity(): Promise<ElectricityData[]> {
        return (
            //query the electricity table, return the records, if any as any array
            this.db['electricity']
                .where('name').equals('electricity') //this is the query
                .toArray() //analogy carpark, default each - highway
        );
    }

}