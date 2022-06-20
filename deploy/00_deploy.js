// deploy/00_deploy_my_contract.js
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  await deploy('NftG1', {
    from: deployer,
    args: ["NFTG0RARE", "RARES", 100, 10000, 90],
    log: true,
  });
};
module.exports.tags = ['nft'];
