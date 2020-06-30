var counter = artifacts.require("Counter");

module.exports = function() {
    async function testCounter() {
        let instance = await counter.deployed();
        let count = await instance.getCount();
        console.log("counter value before increment " + count);
        await instance.incrementCounter();
        count = await instance.getCount();
        console.log("counter value after increment " + count);
        await instance.decrementCounter();
        count = await instance.getCount();
        console.log("counter value after decrement " + count);
    }
    testCounter();
};
