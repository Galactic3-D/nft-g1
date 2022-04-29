// SPDX-License-Identifier: UNLICENSED 
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

import "./library/AddressString.sol";
import "hardhat/console.sol";


contract BattlePass is Ownable, ERC721A, ReentrancyGuard {
  uint256 public immutable maxPerAddressDuringMint;
  uint256 public immutable amountForDevs;
  uint256 public immutable amountForSaleAndDev;

  struct SaleConfig {
    uint32 whitelistSaleStartTime;
    uint64 whitelistPriceWei;

    uint32 publicSaleStartTime;
    uint64 publicPriceWei;

    address whitelistSigner;
  }

  SaleConfig public config;
  uint256 internal immutable collectionSize;
  uint256 internal immutable maxBatchSize;

  constructor(
    string memory name_,
    string memory symbol_,
    uint256 maxBatchSize_,
    uint256 collectionSize_,
    uint256 amountForSaleAndDev_,
    uint256 amountForDevs_
  )
  ERC721A(name_, symbol_)
  {
    maxPerAddressDuringMint = maxBatchSize_;
    amountForSaleAndDev = amountForSaleAndDev_;
    amountForDevs = amountForDevs_;
    maxBatchSize = maxBatchSize_;
    collectionSize = collectionSize_;
    require(
      amountForSaleAndDev_ <= collectionSize_,
      "larger collection size needed"
    );
  }

  modifier callerIsUser() {
    require(tx.origin == msg.sender, "The caller is another contract");
    _;
  }

  function whitelistMint(
      uint256 quantity,
      uint256 maxPerWhitelistDuringMint,
      bytes memory signature
  )
    external
    payable
    callerIsUser
  {
    uint256 whitelistPrice = uint256(config.whitelistPriceWei);
    uint256 whitelistSaleStartTime = uint256(config.whitelistSaleStartTime);

    require(
      isSaleOn(whitelistPrice, whitelistSaleStartTime),
      "whitelist sale has not begun yet"
    );

    require(
      totalSupply() + quantity <= amountForSaleAndDev,
      "not enough remaining reserved for sale to support desired mint amount"
    );

    require(
      maxPerWhitelistDuringMint <= maxPerAddressDuringMint &&
      numberMinted(msg.sender) + quantity <= maxPerWhitelistDuringMint,
      "can not mint this many"
    );

    bytes memory data = abi.encodePacked(
        AddressString.toAsciiString(msg.sender),
        ":",
        Strings.toString(maxPerWhitelistDuringMint)
    );
    bytes32 hash = ECDSA.toEthSignedMessageHash(data);
    address signer = ECDSA.recover(hash, signature);

    require(
        signer == config.whitelistSigner,
        "wrong sig"
    );

    uint256 totalCost = getPrice() * quantity;
    _safeMint(msg.sender, quantity);
    refundIfOver(totalCost);
  }

  function mint(uint256 quantity)
    external
    payable
    callerIsUser
  {
    uint256 publicPrice = uint256(config.publicPriceWei);
    uint256 publicSaleStartTime = uint256(config.publicSaleStartTime);

    require(
      isSaleOn(publicPrice, publicSaleStartTime),
      "sale has not begun yet"
    );
    require(totalSupply() + quantity <= collectionSize, "reached max supply");
    require(
      numberMinted(msg.sender) + quantity <= maxPerAddressDuringMint,
      "can not mint this many"
    );
    _safeMint(msg.sender, quantity);
    refundIfOver(publicPrice * quantity);
  }

  function refundIfOver(uint256 price)
    private
  {
    require(msg.value >= price, "Need to send more ETH.");
    if (msg.value > price) {
      payable(msg.sender).transfer(msg.value - price);
    }
  }

  function isSaleOn(uint256 _price, uint256 _startTime)
    public
    view
    returns (bool)
  {
    return _price != 0 && _startTime != 0 && block.timestamp >= _startTime;
  }

  function getPrice()
    public
    view
    returns (uint256)
  {
    if(config.publicSaleStartTime > 0 && config.publicSaleStartTime < block.timestamp) {
      return uint256(config.publicPriceWei);
    }

    return uint256(config.whitelistPriceWei);
  }

  function setWhitelistSaleConfig(uint32 timestamp, uint64 price, address signer)
    external
    onlyOwner
  {
    config.whitelistSaleStartTime = timestamp;
    config.whitelistPriceWei = price;
    config.whitelistSigner = signer;
  }

  function setPublicSaleConfig(uint32 timestamp, uint64 price)
    external
    onlyOwner 
  {
      config.publicSaleStartTime = timestamp;
      config.publicPriceWei = price;
  }

  // For marketing etc.
  function reserve(uint256 quantity)
    external
    onlyOwner
  {
    require(
      totalSupply() + quantity <= amountForDevs,
      "too many already minted before dev mint"
    );
    require(
      quantity % maxBatchSize == 0,
      "can only mint a multiple of the maxBatchSize"
    );
    uint256 numChunks = quantity / maxBatchSize;
    for (uint256 i = 0; i < numChunks; i++) {
      _safeMint(msg.sender, maxBatchSize);
    }
  }

  // // metadata URI
  string private _baseTokenURI;

  function _baseURI()
    internal
    view
    virtual
    override
    returns (string memory)
  {
    return _baseTokenURI;
  }

  function setBaseURI(string calldata baseURI)
    external
    onlyOwner
  {
    _baseTokenURI = baseURI;
  }

  function withdraw()
    external
    onlyOwner
    nonReentrant
  {
    (bool success, ) = msg.sender.call{value: address(this).balance}("");
    require(success, "Transfer failed.");
  }

  function numberMinted(address owner)
    public
    view
    returns (uint256)
  {
    return _numberMinted(owner);
  }

  function getOwnershipData(uint256 tokenId)
    external
    view
    returns (TokenOwnership memory)
  {
    return _ownershipOf(tokenId);
  }

  function totalMinted()
    public
    view
    returns (uint256)
  {
      // Counter underflow is impossible as _currentIndex does not decrement,
      // and it is initialized to _startTokenId()
      unchecked {
          return _currentIndex - _startTokenId();
      }
  }
}
