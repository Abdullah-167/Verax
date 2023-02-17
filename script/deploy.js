const hre = require("hardhat");
const { MerkleTree } = require("merkletreejs");
const keccak256 = require("keccak256");
const tokens = require("../tokens.json");

async function main() {
  let tab = [];
  tokens.map((token) => {
    tab.push(token.address);
  });
  const leaves = tab.map((address) => keccak256(address));
  const tree = new MerkleTree(leaves, keccak256, { sort: true });
  const root = tree.getHexRoot();

  let team = ["0x36Abb520Ec21444E7Bc785DbE0ACDc1d64c87128"];
  let teamShares = [100];
  let baseURI = "";

  const Raffle = await hre.ethers.getContractFactory("VeraxERC721A");
  const raffle = await Raffle.deploy(team, teamShares, root, baseURI);

  await raffle.deployed();

  console.log("VeraxERC721A deployed to :" + raffle.address);
  console.log(team, teamShares, root, baseURI);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
