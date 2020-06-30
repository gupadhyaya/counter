require("dotenv").config();
const { Harmony } = require("@harmony-js/core");
const { ChainID, ChainType } = require("@harmony-js/utils");
const hmy = new Harmony("https://api.s0.b.hmny.io", {
  chainType: ChainType.Harmony,
  chainId: ChainID.HmyTestnet,
});
const contractJson = require("../../build/contracts/Counter.json");
const contractAddr = "0x19f64050e6b2d376e52AC426E366c49EEb0724B1";

const contract = hmy.contracts.createContract(contractJson.abi, contractAddr);
// needed for contractMethod.send
contract.wallet.addByPrivateKey(
  "1f054c21a0f57ebc402c00e14bd1707ddf45542d4ed9989933dbefc4ea96ca68"
);

const options = {
  gasPrice: '0x3B9ACA00', // decimal: 1000000000
  from: "0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5",
};

const methods = contract.methods;

async function test() {
  let gas = await methods.getCount().estimateGas(options);
  console.log("gas for getCount " + gas);
  gas = await methods.incrementCounter().estimateGas(options);
  console.log("gas for incrementCounter " + gas);
  gas = await methods.decrementCounter().estimateGas(options);
  console.log("gas for decrementCounter " + gas);
}
test().then(() => {
  process.exit(0);
});
