// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface IMultiFeeDistribution {
  function addReward(address rewardsToken) external;

  function mint(
    address user,
    uint256 amount,
    bool withPenalty
  ) external;
}
