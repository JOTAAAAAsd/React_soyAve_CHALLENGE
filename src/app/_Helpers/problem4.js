
const arrNums = () => {
    let arr = [];
    for (let i = 1; i <= 1999; i++) {
        arr.push(i);
    }
    return arr;
}


export const problem4 = () => {

    let par = 0;
    let impar = 0;
    let arrtotalNum1000 = [];

    for (let i = 0; i < arrNums().length; i++) {
        if (arrNums()[i] % 2 === 0) {
            par++;
        } else {
            impar++;
        }

        if (i > 1000) {
            arrtotalNum1000.push(i)
        }
    }

    return {
        totalItems: arrNums().length,
        parPercentage: (par / arrNums().length * 100).toFixed(2),
        imparPercentage: (impar / arrNums().length * 100).toFixed(2),
        numMax: Math.max(...arrNums()),
        numMin: Math.min(...arrNums()),
        numMax1000Percentage: (arrtotalNum1000.length / arrNums().length * 100).toFixed(2)
    }
}