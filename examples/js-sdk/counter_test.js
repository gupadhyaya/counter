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
  gasPrice: process.env.GAS_PRICE,
  gas: process.env.GAS_LIMIT,
  from: "0xc162199cDaeAa5a82f00651dd4536F5d2d4277C5",
};

const methods = contract.methods;

async function test() {
  let count = await methods.getCount().call(options);
  console.log("counter value before increment " + count);
  await methods.incrementCounter().send(options);
  count = await methods.getCount().call(options);
  console.log("counter value after increment " + count);
  await methods.decrementCounter().send(options);
  count = await methods.getCount().call(options);
  console.log("counter value after decrement " + count);
}
test().then(() => {
  process.exit(0);
});
