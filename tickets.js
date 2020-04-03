function getPartRouteFromMap(map, firstKey) {
    let val = map.get(firstKey);
    const part = [val];

    while (true) {
        val = map.get(val);
        if (!val) return part;
        part.push(val);
    }
}

function getRoute(tickets = []) {
    const fromMap = new Map();
    const toMap = new Map();

    for (const { from, to } of tickets) {
        fromMap.set(from, to);
        toMap.set(to, from);
    }

    const firstPart = getPartRouteFromMap(fromMap, tickets[0].from);
    const lastPart = getPartRouteFromMap(toMap, tickets[0].to);

    return lastPart.concat(firstPart);
}


const tickets = [
    {
        from: 'Moscow',
        to: 'London'
    },
    {
        from: 'NY',
        to: 'SPB'
    },
    {
        from: 'Kazan',
        to: 'Lipetsk'
    },
    {
        from: 'London',
        to: 'NY'
    },
    {
        from: 'SPB',
        to: 'Kazan'
    },
];
console.log(getRoute(tickets));