// SPDX-License-Identifier: agpl-3.0
pragma solidity 0.6.12;

interface IOnwardIncentivesController {
  function handleAction(
    address _token,
    address _user,
    uint256 _balance,
    uint256 _totalSupply
  ) external;
}
