const joinSimple = (separator, ...args) => Array.prototype.join.call(args, separator);

const join = (separator, ...args) => args.reduce((acc, cur, i) =>
    i < args.length - 1
        ? acc + cur + separator
        : acc + cur, '');

console.log(join('!', 4, 5, 6, 8));