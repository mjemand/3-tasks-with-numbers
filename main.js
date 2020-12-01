/* 1. 
Írj egy függvényt, ami a paraméterként kapott tetszőleges darabszámú, tetszőlegesen méretű egész számot összead,
és visszatér az összeadás végeredményével! A paraméterként kapott értékek egyszerű number típusúak legyenek!
Amennyiben bármelyik paraméter értéke, vagy a részeredmény meghaladja a biztonságos tartomány,
automatikusan konvertáljad BigIntbe, és így számoljunk tovább, és természetesen a visszatérési érték is BigInt legyen!
*/

// saját nekifutás:

function addition (x, y, ...z) {
    [x, y, ...z].forEach(function (item) {
        if (Number.isSafeInteger(item)) {
            console.log('safe');
        } else {
            [x, y, ...z].map(item => item = BigInt(item))
            console.log(x,y, ...z);
        }
    })
    return [x, y, ...z].reduce((previousValue, currentValue) => previousValue + currentValue);
}

console.log(addition((Math.pow(2, 53)), 1, 2, 3, 4, 5, 6, ));

/* 2.
Módosítsd úgy a függvényed, hogy paraméterként mind number, mind BigInt típusú adatokat is elfogadjon!
Amennyiben valamelyik paraméter BigInt, úgy a number-eket is automatikusan konvertálja BigInt-é! */

// pryann (Training360/js-halado-consultations/2020-11-26/js/numbers.js 

const firstLesson = (...numbers) => {
    let sum = 0;
    let big = false;
    for (let i = 0; i < numbers.length; i += 1) {
        big = typeof numbers[i] === 'bigint' || !Number.isSafeInteger(numbers[i]) || !Number.isSafeInteger(sum);
        sum = big ? BigInt(sum) : sum;
        sum += big ? BigInt(numbers[i]) : numbers[i];
    }
    console.log(typeof sum, sum);
    return sum;
}

firstLesson(1, 2, 3);
firstLesson(1, 2, 3n, 4, 5);

/* 3.
Írj egy függvényt, ami a paraméterként megadott tízes számrendszerbeli számot átkonvertálja kettes, nyolcas,
és tizenhatos számrendszerbe is! Ezeket az értékeket pedig egy objectbe adja vissza!
A property-k neve legyen: binary, octal, hexa. */

const converter = (number) => ({
    binary: number.toString(2),
    octal: number.toString(8),
    hexa: number.toString(16)
})

console.log(converter(16));