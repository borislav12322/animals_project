import React from 'react';
import data from '../data.json';

export interface AnimalsType {
    "name": string,
    "age": number,
    "type": string,
    "gender": string,
    "breed": boolean,
    "features": string[]
}


const Task01 = () => {

    // 1.1 Необходимо посчитать количество кошек, количество собак и средний целочисленный возраст животных.
    const task11Result = (animals: AnimalsType[]) => {
        const catsArray = animals.filter(animal => animal.type === 'cat');
        const dogsArray = animals.filter(animal => animal.type === 'dog');

        const catsCount = catsArray.length;
        const dogsCount = dogsArray.length;

        const allCatsAverageAge = catsArray.map(animal => animal.age).reduce((a, b) => a + b, 0) / catsCount;
        const allDogsAverageAge = dogsArray.map(animal => animal.age).reduce((a, b) => a + b, 0) / dogsCount;

        const averageAge = Math.floor(allCatsAverageAge + allDogsAverageAge);

        return {"dogs": dogsCount, "cats": catsCount, "average": averageAge};
    };
    console.log('Task 1.1');
    console.log(task11Result(data));

    // 1.2 Необходимо посчитать, сколько черных породистых собак находится среди предоставленных данных.
    const task12Result = (animals: AnimalsType[]) => {
        const dogsArray = animals.filter(dog => dog.type === 'dog');
        const breedDogs = dogsArray.filter(dog => dog.breed);
        return breedDogs.filter(dog => dog.features.includes('black')).length;
    };
    console.log('Task 1.2');
    console.log(`Black Breed Dogs are ${task12Result(data)}`);

    // 1.3 Необходимо отфильтровать предоставленные данные, оставить только черных кошек и белых собак.
    const task13Result = (animals: AnimalsType[]) => {
        const catsArray = animals.filter(animal => animal.type === 'cat');
        const dogsArray = animals.filter(animal => animal.type === 'dog');

        const blackCats = catsArray.filter(cat => cat.features.includes('black'));
        const whiteDogs = dogsArray.filter(dog => dog.features.includes('white'));

        let result: AnimalsType[] = [];
        result = result.concat(blackCats, whiteDogs)
        return result;
    };
    console.log('Task 1.3');
    console.log(task13Result(data));

    //1.4 Необходимо отсортировать исходный массив данных по критериям:
    // Все кошки по возрасту (по убыванию)
    // Все собаки по возрасту (по возрастанию)
    const task14Result = (animals: AnimalsType[]) => {

        const catsArray = animals.filter(animal => animal.type === 'cat');
        const dogsArray = animals.filter(animal => animal.type === 'dog');

        const sortedCats = catsArray.sort((a, b) => a.age < b.age ? 1 : -1);
        const sortedDogs = dogsArray.sort((a, b) => a.age > b.age ? 1 : -1);
        console.log(sortedCats);
        console.log(sortedDogs);

        const result: AnimalsType[] = [];
        return result.concat(sortedCats, sortedDogs);
    };
    console.log('Task 1.4');
    console.log(task14Result(data));
    return (
        <div>

        </div>
    );
};

export default Task01;