module.exports = {
  network: 'harmony',
  miso: {
    accessControls: { address: '0x863956314860f86f8B45da47c93637af09addB01', startBlock: 22978623 },
    market: { address: '0x00bF5E70805038245BE24fA95164Ca9Dc3791fA4', startBlock: 22981443 },
  },
  furo: {
    stream: { address: '0x4ab2fc6e258a0ca7175d05ff10c5cf798a672cae', startBlock: 27490820 },
    vesting: { address: '0x0689640d190b10765f09310fcfe9c670ede4e25b', startBlock: 27490879 },
  },
  auctionMaker: { address: '0x0000000000000000000000000000000000000000', startBlock: 0 },
  staking: { address: '0x0000000000000000000000000000000000000000', startBlock: 0 },
  blocks: {
    address: '0x0000000000000000000000000000000000000000',
    startBlock: 0,
  },
  bentobox: {
    address: '0xa28cff72b04f83a7e3f912e6ad34d5537708a2c2',
    startBlock: 18507285,
  },
  legacy: {
    factory: {
      address: '0xc35dadb65012ec5796536bd9864ed8773abc74c4',
      startBlock: 11256061,
    },
    whitelist: [
      '0xcf664087a5bb0237a0bad6742852ec6c8d69a27a',
      '0x6983d1e6def3690c4d616b13597a09e6193ea013',
      '0x3095c7557bcb296ccc6e363de01b760ba031f2d9',
      '0x985458e523db3d53125813ed68c274899e9dfab4',
      '0x3c2b8be99c50593081eaa2a724f0b8285f5aba8f',
      '0xe176ebe47d621b984a73036b9da5d834411ef734',
      '0xef977d2f931c1978db5f6747666fa1eacb0d0339',
    ],
    minimumNativeLiquidity: 50000,
    minimumUsdThresholdNewPairs: 1000
  },
}
