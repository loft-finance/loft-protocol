// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

import '../dependencies/openzeppelin/contracts/IERC20.sol';

interface IMintableToken is IERC20 {
  function mint(address _receiver, uint256 _amount) external returns (bool);

  function setMinter(address _minter) external returns (bool);
}
