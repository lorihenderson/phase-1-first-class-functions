function callback() {
    return callback();
}

function receivesAFunction(callback) {
    return callback();
}
receivesAFunction();

function returnsANamedFunction() {
    return function namedFunction() {
        return 'works';
    }
}

function returnsAnAnonymousFunction() {
    return function() {
        "hello"
    };
};
