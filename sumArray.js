const sumArray = arr => {
    return arr.reduce((acc, cur) => {
        if (Array.isArray(cur)) {
            return acc + sumArray(cur);
        }
        const parsed = parseFloat(cur);
        return isNaN(parsed) ? acc : acc + parsed;
    }, 0)
};

console.log(sumArray(([1, 2, 'x3'])));
console.log(sumArray(([1, [1, 2], 2])));
console.log(sumArray(([1, [1, 'x2', [1, ['1x', 2]]], 2])));