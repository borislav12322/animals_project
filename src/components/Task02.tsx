import React from 'react';

const Task02 = () => {
    // 2.1. Напишите свою реализацию функции возведения в степень.
    const customPow = (base: number, exponent: number) => {
        let arr = []
        for (let i = 0; i < exponent; i++) {
            arr.push(base)
        }
        return arr.reduce((a,b) => a * b)
    }
    console.log('Task 2.1');
    console.log(customPow(6,2));
    console.log(customPow(10,2));
    console.log(customPow(4,5));
    console.log(customPow(11,2));

    // 2.2. Напишите свою реализацию функции flat для массива неограниченной вложенности.
    const customFlat = (newArray: any) => {
        const stringNumbers = newArray.join(',').split(',');
        return stringNumbers.map((el: string) => Number(el));
    }
    console.log('Task 2.2');
    console.log(customFlat([1, 2, [3, [[[[[[[[[[[[[[[[[[[[[[[[4]]]]]]]]]]]]]]]]]]]]]]]]], 5, 6, [7, [8, 9]]]));
    console.log(customFlat([1, 2, [3, 4, [5, 6, [7, 8, [9, [[[[[[[[[[[[[[[[[[[[[10]]]]]]]]]]]]]]]]]]]]]]]]]]));
    console.log(customFlat([1, 2, [[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]], 4, [5, 6, [7, 8, [9, 10]]]]]));
    console.log(customFlat([[1, 2, 3, [4, 5, [6, 7]]], [8, [9, 10]]]));
    console.log(customFlat([1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]]));

    return (
        <div>

        </div>
    );
};

export default Task02;