// Collection Functions (Arrays or Objects)

function myEach(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let val of values) {
        callback(val);
    }
    return collection;
}

function myMap(collection, callback) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let val of values) {
        result.push(callback(val));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let startIndex = 0;
    if (acc === undefined) {
        acc = values[0];
        startIndex = 1;
    }
    for (let i = startIndex; i < values.length; i++) {
        acc = callback(acc, values[i], collection);
    }
    return acc;
}

function myFind(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let val of values) {
        if (predicate(val)) return val;
    }
    return undefined;
}

function myFilter(collection, predicate) {
    let values = Array.isArray(collection) ? collection : Object.values(collection);
    let result = [];
    for (let val of values) {
        if (predicate(val)) result.push(val);
    }
    return result;
}

function mySize(collection) {
    return Array.isArray(collection) ? collection.length : Object.keys(collection).length;
}

// Object Functions

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

// Array Functions

function myFirst(array, n) {
    return n ? array.slice(0, n) : array[0];
}

function myLast(array, n) {
    return n ? array.slice(-n) : array[array.length - 1];
}

// Bonus Function

function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
        let valA = callback(a);
        let valB = callback(b);
        return valA > valB ? 1 : valA < valB ? -1 : 0;
    });
}
