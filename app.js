// Review Callstack, Node APIs (setTimeout), and Event loop and how they work
console.log('Starting');

setTimeout(() => {
    console.log('2 second timer');

}, 2000);

setTimeout(() => {
    console.log('0 Second Timer');
}, 0)

console.log('Stopping');