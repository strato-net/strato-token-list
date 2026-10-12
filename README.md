# STRATO Token List

Canonical token list for the STRATO mainnet (chain ID `123354377739506`), in the [Uniswap Token List](https://github.com/Uniswap/token-lists) format.

- List: `https://raw.githubusercontent.com/strato-net/strato-token-list/main/tokenlist.json`
- Logos: `logos/<SYMBOL>.png`

## Tokens

| Symbol | Name | Address |
|---|---|---|
| USDST | USDST | `0x937efa7e3A77E20BBdBD7C0d32b6514f368C1010` |
| STRATO | STRATO | `0x2Ca3E170E6714282da77815F7864B17f612F5f83` |
| GOLDST | GOLDST | `0xCDc93d30182125e05eEC985b631c7c61B3F63FF0` |
| SILVST | SILVST | `0x2c59EF92D08EfdE71fe1A1CB5b45f4F6d48fCc94` |
| USDC | STRATO USDC | `0x6aeaCAA19c68E53035Bf495d15e0A328fc600BA8` |
| USDT | STRATO USDT | `0x5ED0BDFb378aC0D06249D70759536D7a41906216` |
| ETH | STRATO ETH | `0x93fb7295859B2d70199e0A4883b7C320Cf874e6c` |
| WBTC | STRATO WBTC | `0x7a99b5BA11Ac280cDD5CAF52c12FE89Fb1b8D2f9` |
| NVDA | STRATO Robinhood NVDA | `0xb8fA2dB41236b1421EB8AEa8A52826ba32096fBf` |
| SPY | STRATO Robinhood SPY | `0x19A7EbEe83Ed53CB5917AaD3f2b1c2Cd37Da771D` |

All tokens use 18 decimals.

## Network

- RPC: `https://app.strato.nexus/rpc`
- Explorer: `https://stratoscan.strato.nexus`
- Chain registry: [ethereum-lists/chains `eip155-123354377739506`](https://github.com/ethereum-lists/chains)

## Validate

```bash
npm install
npm run validate
```

Checks the list against `tokenlist.schema.json` and that every address is EIP-55 checksummed.

## Updating

Bump `version` per the token-list semver rules (major: tokens removed, minor: tokens added, patch: metadata only), update `timestamp`, run `npm run validate`, then open a PR.
