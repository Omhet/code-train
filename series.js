const fn1 = function (arg, cb) {
    setTimeout(() => {
        if (!arg) {
            arg = 'hello';
        }
        console.log('First fn', arg);
        cb(arg);
    }, 1000);
}

const fn2 = function (arg, cb) {
    setTimeout(() => {
        arg += ' world';
        console.log('Second fn', arg);
        cb(arg);
    }, 1000);
}

const fn3 = function (arg, cb) {
    setTimeout(() => {
        if (arg === 'hello worlsd') {
            throw new Error('Hello error!')
        }
        console.log('Second fn', arg);
        cb(arg);
    }, 1000);
}


const tasks = [fn1, fn2, fn3];

async function series(tasks, cb) {
    const results = [];
    let curRes;
    try {
        for (const task of tasks) {
            curRes = await promisify(task)(curRes);
            results.push(curRes);
        }
        cb(results);
    } catch (err) {
        cb(err);
    }
}

function promisify(fn) {
    return function (arg) {
        return new Promise((resolve, reject) => {
            try {
                fn(arg, resolve);
            } catch (err) {
                reject(err);
            }
        })
    }
}


series(tasks, res => {
    if (res instanceof Error) {
        console.log('Error: ', res.message)
        return;
    }
    console.log(res);
})