export interface IDuck {
    name: string,
    noOfLegs: number,
    makeSound: (sound: string | number) => void
}

const duck1: IDuck = {
    name: 'Duck 1',
    noOfLegs: 2,
    makeSound: (sound: any) => {
        console.log(sound);
    }
}

const duck2: IDuck = {
    name: 'Duck 3',
    noOfLegs: 22,
    makeSound: (sound: any) => {
        console.log(sound);
    }    
}

duck2.noOfLegs = 3;

duck1.makeSound!(1);

export const ducks = [duck1, duck2];