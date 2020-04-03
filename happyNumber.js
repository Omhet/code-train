const isHappy = (n) => {
    if (n === 1) {
        return true;
    }

    try {
        const next = n.toString().split('').reduce((acc, cur) => acc + cur * cur, 0);
        return isHappy(next);
    } catch {
        return false;
    }
    
};

console.log(isHappy(1)); // true
console.log(isHappy(7)); // true
console.log(isHappy(19)); // true
console.log(isHappy(3)); // false