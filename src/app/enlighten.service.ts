import Dexie from 'dexie';
import { ElectricityData } from './model';
import { WaterHeaterData } from './model';
import { DryerData } from './model';
import { CarData } from './model';

export class EnlightenService {


    db = new Dexie('enlightendb');



    constructor() {
        console.info('in create db')
        this.db.version(1).stores({
            //Schema - one for each category - go and delete the database
            electricity: "name,ACqty, AChrs,ACkWH, monthlyTotal, yearlyTotal, co2",
            waterHeater: "name, WHqty, WHhrs, WHkWH, WHmonthlyTotal, WHyearlyTotal,WHco2",
            dryer: "name, CDqty, CDhrs, CDkWH, CDmonthlyTotal, CDyearlyTotal,CDco2",
            car: "name,Cqty, Chrs, CmonthlyTotal, CyearlyTotal, Cco2",

        });
        //this.db.open();
    }

    updateCar(data:CarData): Promise<any> {
        return(this.db['car'].put(data));
    }
    getCar():Promise<CarData[]>{
        return(
            this.db['car']
                .where('name').equals('car')
                .toArray()
                .then(result => {
                    if (!result.length)
                        result.push({
                            name: 'car',
                            Cqty: 0,
                            Chrs: 0,
                            CmonthlyTotal: 0,
                            CyearlyTotal: 0,
                            Cco2: 0,
                            
                        })
                    return (result);    
            })
        );
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
                .then(result => {
                    if (!result.length)
                        result.push({
                            name: 'electricity',
                            ACqty: 0,
                            AChrs: 0,
                            ACkWH: 0,
                            monthlyTotal: 0,
                            yearlyTotal: 0,
                            co2: 0
                        })
                    return (result);
                })
        );

       
    }
    updateWaterHeater(data: WaterHeaterData): Promise<any> {
        //insert the data if the rec does not exists - if no primary key matches
        //if exists, update the record - if primary key matches our data
        return (this.db['waterHeater'].put(data));
        //add() only insert/create new - primary key (identity) must be unique
        //return (this.db['electricity'].add(data));
    }
    getWaterHeater(): Promise<WaterHeaterData[]> {
        return (
            //query the electricity table, return the records, if any as any array
            this.db['waterHeater']
                .where('name').equals('waterHeater') //this is the query
                .toArray() //analogy carpark, default each - highway
                .then(result => {
                    if (!result.length)
                        result.push({
                            name: 'waterHeater',
                            WHqty: 0,
                            WHhrs: 0,
                            WHmonthlyTotal: 0,
                            WHyearlyTotal: 0,
                            WHco2: 0
                        })
                    return(result);
                })
        );

       
    }
    updateDryer(data: DryerData): Promise<any> {
        //insert the data if the rec does not exists - if no primary key matches
        //if exists, update the record - if primary key matches our data
        return (this.db['dryer'].put(data));
        //add() only insert/create new - primary key (identity) must be unique
        //return (this.db['electricity'].add(data));
    }
    getDryer(): Promise<WaterHeaterData[]> {
        return (
            //query the electricity table, return the records, if any as any array
            this.db['dryer']
                .where('name').equals('dryer') //this is the query
                .toArray() //analogy carpark, default each - highway
                .then(result => {
                    if (!result.length)
                        result.push({
                            name: 'dryer',
                            CDqty: 0,
                            CDhrs: 0,
                            CDmonthylTotal: 0,
                            CDyearlyTotal: 0,
                            CDco2: 0
                        })
                    return (result);
                })
        );

       
    }

	getAllData(): Promise<any> {

		//Each return a promise, call their respective get methods
		//and save the promise in an array
		const promises = [];
		promises.push(this.getElectricity())
		promises.push(this.getWaterHeater())
        promises.push(this.getDryer())
        promises.push(this.getCar())

			//Now wait for all the promises to resolve. See 
			//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
			//When all the promises resolve, you'll get an array. The data in the array 
			//is in the same sequence as we queried them above
		const allResults = Promise.all(promises)
				.then(results => {
					//results is an array of [ electricity, water heater, dryer ]
					//Since each of them is an array, we 'flatten' the result by
					//retrieving the data and placing them in an array
					//We now return the array. 
					//If you return something from within a promise (then), you'll get another
					//promise
					const data = []
					for (var i of results)
						data.push(i[0])
					//This will be wrapped in a promise
					return (data)
                })

        return (allResults);
	}
}