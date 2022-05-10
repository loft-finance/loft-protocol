import BN from 'bn.js';
import { toBN, toWei, fromWei, hexToAscii, rightPad, asciiToHex } from 'web3-utils';

export const toUnit = (amount) => toBN(toWei(amount.toString(), 'ether').toString());
export const fromUnit = (amount) => fromWei(amount, 'ether');
export const ZERO_ADDRESS = '0x' + '0'.repeat(40);
