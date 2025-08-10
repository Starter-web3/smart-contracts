# StrataForge No-Code Token Platform — Hardhat Smart Contracts

Transform your vision into digital assets—without writing code. StrataForge empowers creators, entrepreneurs, and businesses to mint NFTs and launch tokens in minutes, with zero technical knowledge required.

## Project Overview

This repository contains the smart contracts and deployment scripts powering the StrataForge no-code platform. Our unified solution enables users to deploy multiple token standards, manage campaigns, and handle whitelists—all without blockchain development expertise.

### Key Features

- **One-Click Token Deployment:**  
  Deploy ERC-20, ERC-721, and ERC-1155 tokens with just a few clicks. No coding required.

- **Campaign Management:**  
  Create, manage, and track airdrops and marketing campaigns with integrated tools.

- **Whitelist Management:**  
  Easily manage token distribution using CSV uploads, manual address addition, and wallet verification.

- **Specialized Token Templates:**  
  Ready-to-deploy memecoin and stablecoin contracts, featuring anti-whale mechanisms and collateralization.

- **Drag & Drop Simplicity:**  
  Build NFT collections and launch tokens with a visual editor. Upload art, set parameters, and go live in under 10 minutes.

- **Complete Web3 Ecosystem:**  
  Manage the entire token lifecycle—from creation to airdrops and campaigns—in one platform.

## Smart Contract Folder Structure

- `contracts/`  
  Contains Solidity smart contracts for token standards (ERC-20, ERC-721, ERC-1155), campaign management, whitelisting, and specialized templates (memecoin, stablecoin).

- `test/`  
  Automated tests for all contracts using Hardhat and Chai.

- `ignition/`  
  Hardhat Ignition modules for streamlined deployment.

- `artifacts/`  
  Compiled contract artifacts.

- `typechain-types/`  
  TypeScript typings for contracts.

- `hardhat.config.ts`  
  Hardhat configuration, including Core Blockchain Testnet settings.

## Supported Networks

- **Core Blockchain Testnet (ERC-1155 deployed)**
- Base Sepolia (configurable)
- Local Hardhat Network

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

```sh
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```
CORE_TESTNET_RPC=your_core_testnet_rpc_url
ACCOUNT_PRIVATE_KEY=your_private_key
BASESCAN_API_KEY=your_basescan_api_key
CORESCAN_API_KEY=your_corescan_api_key
```

### Compile Contracts

```sh
npx hardhat compile
```

### Run Tests

```sh
npx hardhat test
```

### Deploy Contracts

Deploy to Core Blockchain Testnet (ERC-1155 example):

```sh
npx hardhat ignition deploy ./ignition/modules/Lock.ts --network coreTestnet
```

## Usage

- **Token Deployment:**  
  Use the platform UI or scripts to deploy ERC-20, ERC-721, ERC-1155, memecoin, or stablecoin contracts.

- **Campaigns & Airdrops:**  
  Manage campaigns and airdrops via smart contracts and integrated management tools.

- **Whitelist Management:**  
  Add addresses manually or via CSV for controlled token distribution.

## Security & Best Practices

- All contracts are tested and audited for security.
- Anti-whale and collateralization features are available for specialized tokens.
- Whitelist and campaign management ensure fair and transparent distribution.

## Deployed Contracts

### === Deployment Summary ===

Network: Core Testnet (1115)
Deployer: 0x0eE1F2b663547dAa487F57C517C7563AdCf86da0

Contract Addresses:
├── StrataForgeAdmin: 0x52CD9E0eb7863Ee69e951f78fD3cfFe7967d7B90
├── StrataForgeERC20Implementation: 0xaF21C8C1F730c1004F7e84b806629F4A7838F461
├── StrataForgeERC721Implementation: 0xf8cEb019C9e68C00c5Edf7AcFD14d917e77db5B2
├── StrataForgeERC1155Implementation: 0x18aD38501d3dEAdDE288476aa2c3a42906Ee5961
├── StrataForgeMemecoinImplementation: 0x1deDc0F6DB748c3060Fe7f9562294c1270eaa3B3
├── StrataForgeStablecoinImplementation: 0xcedbd489DEbf2e13ED1D76475dE34c6fF504A556
├── StrataForgeProxyFactory: 0xDcA0A7B7Bf11D1105A68f752c7f47320aba351af
├── StrataForgeFactory: 0x4A620e8C10514c7EE20ad27Df361a605236B1f21
└── StrataForgeAirdropFactory: 0x8284386B664D1e3838A1fB7403af9c0b4478E70E

## License

- Product of Strataforge 2025
