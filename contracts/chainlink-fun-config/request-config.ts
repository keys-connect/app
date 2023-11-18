import * as fs from 'fs';
import { Location, ReturnType, CodeLanguage, SimulationInput } from '@chainlink/functions-toolkit';

// const requestConfig: SimulationInput = {
const requestConfig: any = {
  // String containing the source code to be executed
  source: fs.readFileSync('./chainlink-fun/graphquery.js').toString(),
  // source: fs.readFileSync("./API-request-example.js").toString(),
  // Location of source code (only Inline is currently supported)
  codeLocation: Location.Inline,
  // Optional. Secrets can be accessed within the source code with `secrets.varName` (ie: secrets.apiKey). The secrets object can only contain string values.
  secrets: { graphKey: process.env.GRAPH_KEY ?? '' },
  // Optional if secrets are expected in the sourceLocation of secrets (only Remote or DONHosted is supported)
  secretsLocation: Location.DONHosted,
  // Args (string only array) can be accessed within the source code with `args[index]` (ie: args[0]).
  args: ['1', 'bitcoin', 'btc-bitcoin', 'btc', '1000000', '450'],
  // Code language (only JavaScript is currently supported)
  codeLanguage: CodeLanguage.JavaScript,
  // Expected type of the returned value
  expectedReturnType: ReturnType.uint256,
};

module.exports = requestConfig;