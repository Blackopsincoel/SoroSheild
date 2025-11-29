# 🛡️ SoroShield: Decentralized Threat Intelligence for Stellar

> **Protecting the Stellar Ecosystem, one block at a time.**

**SoroShield** is a decentralized security layer and firewall built on **Stellar Soroban**. It acts as an on-chain threat intelligence database that flags malicious wallet addresses (phishing, drainers, malware) to prevent users from losing funds.

---

## 🚧 The Problem
As the Stellar ecosystem grows, so do cyber threats. Users often blindly sign transactions without knowing the reputation of the recipient address. 
* **Phishing attacks** mimic legitimate projects.
* **Wallet Drainers** empty user funds instantly.
* **Lack of Data:** There is no centralized, immutable source of truth for "bad actors" on the Stellar network.

## 💡 The Solution
**SoroShield** solves this by moving threat intelligence **on-chain**.
1.  **Immutable Registry:** Malicious addresses are recorded on the Soroban smart contract.
2.  **Risk Scoring:** Every address gets a "Risk Score" (0-100) and a threat category (e.g., `PHISHING`).
3.  **Community & AI Driven:** Data is fed by security agents (Python bots) and can be queried by any wallet or dApp.

---

## 🏗️ System Architecture

Our architecture consists of three main pillars:

### 1. The Brain (Smart Contract) 🧠
* **Language:** Rust (Soroban SDK)
* **Network:** Stellar Testnet
* **Function:** Stores the "Blacklist" and "Risk Scores" in persistent storage.
* **Contract ID:** `CBQYNJSEVTCIQQ5IUVBUSGZXXMMRUBS4UR5ZP35FKD6SPNQ2C2WFRXUA`

### 2. The Agent (Cyber Sentinel) 🕵️
* **Language:** Python
* **Function:** Simulates a cyber security agent that scans off-chain threat feeds and pushes verified data to the Stellar Blockchain automatically.

### 3. The Dashboard (Frontend) 💻
* **Tech Stack:** React + Vite + Tailwind CSS
* **Function:** A cyberpunk-themed user interface where anyone can scan a wallet address to check its safety status in real-time.

---

## 🚀 Key Features

* ✅ **Real-Time Verification:** Instant lookup on the Stellar Blockchain.
* ✅ **Risk Visualization:** Visual progress bars indicating threat levels.
* ✅ **Detailed Taxonomy:** Categorizes threats (e.g., Wallet Drainer, Money Laundering).
* ✅ **Decentralized:** Data lives on Soroban, not on a central server.

---

## 🛠️ Installation & Setup

If you want to run SoroShield locally, follow these steps:

### Prerequisites
* Rust & Soroban CLI
* Node.js & NPM
* Python 3.x

### 1. Smart Contract (Backend)
```bash
# Build the contract
soroban contract build

# Deploy to Testnet (Already deployed)
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/soroshield.wasm --source admin --network testnet

2. Python Sentinel (Data Agent)
Running this script will populate the blockchain with simulation threat data.
Bash

python3 sentinel.py

3. Frontend Dashboard
Bash

cd frontend
npm install
npm run dev

Open http://localhost:5173 to view the dashboard.

🏆 Hackathon Context
This project was built from scratch in 48 hours for the Stellar Hackathon Istanbul Edition.

Team: Solo Developer

Focus: Security & Usability

📄 License
This project is licensed under the Apache 2.0 License.