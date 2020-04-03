function compress(arr) {
    const sortedArr = arr.sort((a, b) => a - b);

    const result = [];
    let position = 0;

    for (let i = 1; i <= sortedArr.length; i++) {
        const cur = sortedArr[i];
        const prev = sortedArr[i - 1];
        const atPosition = sortedArr[position];

        if (cur - i + position !== atPosition) {
            if (prev === atPosition) {
                result.push(atPosition.toString());
            } else {
                result.push(atPosition + '-' + prev);
            }
            position = i;
        }
    }

    return result;
}

console.log(compress([3, 2, 1, 5, 6, -1, 10]));
console.log(compress([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(compress([1, 2, 3, 4, 6, 7, 8]));
console.log(compress([1, 2, 3, 4, 6, 8, 9]));
console.log(compress([4, 5, 6, 8, 9]));