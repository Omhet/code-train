const nthAtTheEnd = (arr, nth) => { // pretend it's a single linked list
    let resInd = 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (i >= nth) {
            resInd++;
        }
    }

    return arr[resInd];
}

console.log(nthAtTheEnd([1, 2, 3, 4, 5, 6], 0));
console.log(nthAtTheEnd([1, 2, 3, 4, 5, 6], 1));
console.log(nthAtTheEnd([1, 2, 3, 4, 5, 6], 4));