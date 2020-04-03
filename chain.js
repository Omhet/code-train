const fn1 = function (input) {
    input++;
    console.log('first', input);
    return input;
}

const fn2 = function (input) {
    input *= 10;
    console.log('second', input);
}

const fn3 = function (input) {
    if (!input) {
        input = 'str';
    }
    console.log('third', input);
    return input;
}

function chain(tasks, input, timeout) {
    if (tasks.length === 0) {
        return;
    }

    setTimeout(() => {
        const task = tasks.shift();
        input = task(input);
        chain(tasks, input, timeout);
    }, timeout);
}

const tasks = [fn1, fn2, fn3];

chain(tasks, 0, 1000);