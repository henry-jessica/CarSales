export interface ICar {
    make: string; 
    model: string; 
    year: string; 
    imageURL: string;
    price: string; 
    description:string; 
}

export class Car{
    make: string; 
    model: string; 
    year: string; 
    imageURL: string; 
    price: string; 
    description:string; 

    constructor(make: string, model: string, year: string, imageURL: string, price:string, description:string) {
        this.make = make; 
        this.model = model; 
        this.year = year; 
        this.imageURL = imageURL; 
        this.price = price;  
        this.description = description; 
    }
}