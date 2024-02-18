import { ChainId, Currency, Ether } from '@monoswap-labs/sdk-core';
import {
  DAI_MAINNET,
  ExtendedEther,
  UNI_MAINNET,
  USDC_MAINNET,
  USDC_ON,
  USDT_MAINNET,
  WETH9,
  WNATIVE_ON,
} from '../../src';

export const WHALES = (token: Currency): string => {
  switch (token) {
    case Ether.onChain(ChainId.MAINNET) as Currency:
      return '0x0716a17FBAeE714f1E6aB0f9d59edbC5f09815C0';
    case ExtendedEther.onChain(ChainId.MAINNET):
      return '0x0716a17FBAeE714f1E6aB0f9d59edbC5f09815C0';
    case WETH9[1]:
      return '0x06920c9fc643de77b99cb7670a944ad31eaaa260';
    case WNATIVE_ON(ChainId.MAINNET):
      return '0xf04a5cc80b1e94c69b48f5ee68a08cd2f09a7c3e';
    case WNATIVE_ON(ChainId.BLAST_SEPOLIA):
      return '0x4200000000000000000000000000000000000023';
    case USDC_MAINNET:
      return '0x8eb8a3b98659cce290402893d0123abb75e3ab28';
    case UNI_MAINNET:
    case DAI_MAINNET:
    case USDT_MAINNET:
      return '0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503';
    case USDC_ON(ChainId.BLAST_SEPOLIA):
      return '0xda9C093a7D9e41d21Dc9A7ff5601A3FD02111d95';
    default:
      return '0xf04a5cc80b1e94c69b48f5ee68a08cd2f09a7c3e';
  }
};
