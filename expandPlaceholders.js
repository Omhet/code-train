function expandPlaceholders(str, data, brackets) {
    for (const key of Object.keys(data)) {
        const reg = new RegExp(`${brackets[0]} ${key} ${brackets[1]}`);
        str = str.replace(reg, data[key]);
    }

    return str;
}

const data = {
    first: 1,
    second: true
};
console.log(expandPlaceholders('1 === { first }, { second } is second, { third }', data, ['{', '}']));
console.log(expandPlaceholders('1 === {{ first }}, { second } is second, { third }', data, ['{{', '}}']));