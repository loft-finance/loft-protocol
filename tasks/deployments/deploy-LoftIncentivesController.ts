import { BigNumberish } from 'ethers';
import { task } from 'hardhat/config';
import { deployLoftIncentivesController } from '../../helpers/contracts-deployments';
import { eContractid, eEthereumNetwork, eNetwork, ePolygonNetwork } from '../../helpers/types';
import { fromUnit, toUnit } from '../helpers/utils';

task(
  `deploy-${eContractid.LoftIncentivesController}`,
  `Deploys the LoftIncentivesController contract`
)
  .addParam('rewardminter', 'Reward Minter Address')
  .addFlag('verify', 'Verify LoftIncentivesController contract via Etherscan API.')
  .setAction(async ({ rewardminter, verify }, localBRE) => {
    await localBRE.run('set-DRE');

    if (!localBRE.network.config.chainId) {
      throw new Error('INVALID_CHAIN_ID');
    }

    console.log(`\n- LoftIncentivesController deployment`);
    const startTimeOffset = ['864000', '8640000'];
    const rewardsPerSecond = [toUnit('1').toString(), toUnit('2').toString()];
    const rewardMinter = rewardminter;
    const maxMintable = toUnit('10000000').toString();

    const LoftIncentivesController = await deployLoftIncentivesController(
      startTimeOffset,
      rewardsPerSecond,
      rewardMinter,
      maxMintable,
      verify
    );

    console.log('LoftIncentivesController deployed at:', LoftIncentivesController.address);
    console.log(`\tFinished LoftIncentivesController deployment`);
  });
