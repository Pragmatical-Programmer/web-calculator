function add(...args) {
    return args.reduce(function (total, item) {
        return total + item;
    }, 0);
}

function subtract(...args) {
    return args.reduce(function (total, item) {
        return total - item;
    });
}

function multiply(...args) {
    return args.reduce(function (total, item) {
        return total * item;
    });
}

function divide(...args) {
    return args.reduce(function (total, item) {
        return total / item;
    });
}

function operate(num1, num2, operator) {

}

console.log(add(1, 2));
console.log(subtract(1, 2, 4));
console.log(multiply(1, 2, 4, 3));
console.log(divide(8, 2, 2))