console.log('Start');

setTimeout(() => {
    console.log('Timeout 1');
}, 0);

setTimeout(() => {
    console.log('Timeout 2');
}, 100);

setImmediate(() => {
    console.log('Immediate 1');
});

process.nextTick(() => {
    console.log('Next Tick 1');
});

process.nextTick(() => {
    console.log('Next Tick 2');
});

console.log('End');