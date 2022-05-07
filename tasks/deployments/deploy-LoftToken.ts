import { BigNumberish } from 'ethers';
import { task } from 'hardhat/config';
import { deployLoftToken } from '../../helpers/contracts-deployments';
import { eContractid, eEthereumNetwork, eNetwork, ePolygonNetwork } from '../../helpers/types';

task(`deploy-${eContractid.LoftToken}`, `Deploys the LoftToken contract`)
  .addFlag('verify', 'Verify LoftToken contract via Etherscan API.')
  .setAction(async ({ verify }, localBRE) => {
    await localBRE.run('set-DRE');

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    console.log(`\n- LoftToken deployment`);

    const LoftToken = await deployLoftToken('1000000000000000000000000000');

    console.log('LoftToken deployed at:', LoftToken.address);
    console.log(`\tFinished LoftToken deployment`);
  });
