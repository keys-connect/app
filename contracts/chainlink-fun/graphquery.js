const graphKey = secrets.graphKey;
const address = args[0];

const graphRequest = Functions.makeHttpRequest({
  url: `https://api-v2-mumbai.lens.dev`,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },

  data: `
    {
      "operationName":"LensProfiles",
      "variables": {
        "address":"${address}"},
        "query": "query LensProfiles($address: EvmAddress!) {
          profiles( request: { where: { ownedBy: [$address]}}) {
            items {
              id
              createdAt
              handle {
                fullHandle
              }
            }
          }
        }
    }`,
});

const [graphResponse] = await Promise.all([graphRequest]);

let liquidities = [];
if (!graphResponse.error) {
  for (let i = 0; i < 3; i++) {
    liquidities.push(graphResponse.data.data.poolDayDatas[i].liquidity);
  }
} else {
  console.log('graphReponse Error, ', graphResponse);
}

// check if liquidity is increasing
// if it is increasing, return 1 and functionsConsumer trigger the function to swap WMATIC to WETH.
// if it is not, return 0 and functionsConsumer does nothing.
if (liquidities[0] > liquidities[1] && liquidities[0] > liquidities[2]) {
  console.log('liquidity is increasing');
  return Functions.encodeUint256(0);
}
return Functions.encodeUint256(1);
