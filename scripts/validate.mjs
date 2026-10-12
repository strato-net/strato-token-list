import { readFileSync } from "node:fs";
import Ajv from "ajv";
import addFormats from "ajv-formats";
import { createRequire } from "node:module";
const schema = createRequire(import.meta.url)("@uniswap/token-lists/src/tokenlist.schema.json");
import { getAddress } from "viem";

const list = JSON.parse(readFileSync(new URL("../tokenlist.json", import.meta.url)));
const ajv = new Ajv({ allErrors: true });
addFormats(ajv);
const validate = ajv.compile(schema);

if (!validate(list)) {
  console.error(validate.errors);
  process.exit(1);
}
for (const t of list.tokens) {
  if (t.address !== getAddress(t.address)) {
    console.error(`address not checksummed: ${t.symbol} ${t.address}`);
    process.exit(1);
  }
}
console.log(`ok: ${list.tokens.length} tokens, schema valid, addresses checksummed`);
