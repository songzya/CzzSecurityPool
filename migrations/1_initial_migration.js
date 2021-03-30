const HecoPool = artifacts.require("HecoPool");

module.exports = function (deployer) {
  deployer.deploy(HecoPool,'0xFE2D1B313E220C9F8Df4BC73D5F8730b880ddC28',0,0);
};
