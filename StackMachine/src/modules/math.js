const return20 = () => {
    let stack = [];

    // Add an item to the stack
    stack.push(20);

    // A return will always pop the last value from the stack
    return stack.pop();
};

console.log("----------- Fixed values ----------- ");

console.log('return20()\t->', return20()); // 20

const echo = (p1) => {
    let stack = [];

    stack.push(p1);

    return stack.pop();
}

console.log("----------- Parameters ----------- ");

console.log('echo(10)\t->', echo(10)); // 10
console.log('echo("test")\t->', echo("test")); // test

const square = (p1) => {
    let stack = [];

    stack.push(p1);
    stack.push(p1);

    stack.push(stack.pop() * stack.pop());

    return stack.pop();
}

const add = (p1, p2) => {
    let stack = [];

    stack.push(p1);
    stack.push(p2);

    stack.push(stack.pop() + stack.pop());

    return stack.pop();
}

const multiply = (p1, p2) => {
    let stack = [];

    stack.push(p1);
    stack.push(p2);

    stack.push(stack.pop() * stack.pop());

    return stack.pop();
}

console.log("----------- Calculations ----------- ");

console.log('square(5)\t->', square(5)); // 25
console.log('add(10, 5)\t->', add(10, 5)); // 15
console.log('multiply(10, 5)\t->', multiply(10, 5)); // 50
