pragma solidity 0.6.12;

// SPDX-License-Identifier: MIT

import '../dependencies/openzeppelin/contracts/ERC20.sol';
import '../dependencies/openzeppelin/contracts/Ownable.sol';
import '../interfaces/IMintableToken.sol';

contract LoftToken is ERC20, Ownable, IMintableToken {
  // Maximum Total Supply 1 B
  uint256 constant maxTotalSupply = 1e9 ether;

  address public minter;

  constructor(uint256 initialSupply) public ERC20('Loft Protocol', 'LOFT') {
    _mint(msg.sender, initialSupply);
  }

  function _mint(address account, uint256 amount) internal override {
    uint256 totalSupply = super.totalSupply();
    require(maxTotalSupply >= totalSupply + amount, 'Max total supply over');

    super._mint(account, amount);
  }

  function setMinter(address _minter) external override onlyOwner returns (bool) {
    minter = _minter;
    return true;
  }

  function mint(address account, uint256 amount) external override returns (bool) {
    require(msg.sender == minter || msg.sender == owner());
    _mint(account, amount);
    return true;
  }
}
