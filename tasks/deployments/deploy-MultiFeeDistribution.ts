import { task } from 'hardhat/config';
import { eContractid, eEthereumNetwork, eNetwork, ePolygonNetwork } from '../../helpers/types';
import { deployMultiFeeDistribution } from '../../helpers/contracts-deployments';
import { exit } from 'process';

task(`deploy-${eContractid.MultiFeeDistribution}`, `Deploys the MultiFeeDistribution contract`)
  .addParam('token', 'Staking Token Address')
  .addFlag('verify', 'Verify MultiFeeDistribution contract via Etherscan API.')
  .setAction(async ({ token, verify }, localBRE) => {
    await localBRE.run('set-DRE');

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    console.log(`\n- MultiFeeDistribution deployment`);

    const MultiFeeDistribution = await deployMultiFeeDistribution(token, verify);

    console.log('MultiFeeDistribution deployed at:', MultiFeeDistribution.address);
    console.log(`\tFinished MultiFeeDistribution deployment`);
  });
