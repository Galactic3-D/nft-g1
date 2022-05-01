// deploy/00_deploy_my_contract.js
module.exports = async ({getNamedAccounts, deployments}) => {
  const {deploy} = deployments;
  const {deployer} = await getNamedAccounts();
  await deploy('BattlePass', {
    from: deployer,
    args: ["NAME#2", "SYMBOL#2", 5, 2000, 50],
    log: true,
  });
};
module.exports.tags = ['nft'];
