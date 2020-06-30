# Counter smart contract on Harmony
A simple counter smart contract ported to [Harmony](http://harmony.one) blockchain

## Install instructions

### Requirements 

* nodejs 
* truffle
* solidity (solc)

### Commands

* Fetch repo 

```
git clone https://github.com/gupadhyaya/counter.git
```

* Install dependencies

```
npm install
```

* Compile Counter smart contract

```
truffle compile
```

* Deploy Counter smart contract

```
truffle migrate --reset --network testnet
```

* Running counter example using truffle.

```
truffle exec examples/truffle/counter_test.js --network testnet
```

* Running counter example using js-sdk
```
node examples/js-sdk/counter_test.js 
```

* Output
```
counter value before increment 0
counter value after increment 1
counter value after decrement 0
```