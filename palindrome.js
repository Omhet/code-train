const isPalindrome = str => {
    str = str.replace(/\W/g, '').toLowerCase();
    
    for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - i - 1]) {
            return false;
        }
    }

    return true;
};

console.log(isPalindrome('Ш4л4ш'));
console.log(isPalindrome('Yandex'));
console.log(isPalindrome('Eva, can I see bees in a cave?'));
