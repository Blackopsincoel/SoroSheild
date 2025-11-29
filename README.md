# 🛡️ SoroShield: Decentralized Threat Intelligence for Stellar

> **SoroShield**, Stellar ağını kötü niyetli aktörlerden (Phishing, Wallet Drainers) koruyan, topluluk destekli ve yapay zeka entegreli bir güvenlik kalkanıdır.

![SoroShield Dashboard](https://github.com/Blackopsincoel/SoroShield/assets/placeholder) 
*(Buraya ekran görüntülerinden birini GitHub'a yükleyip linkini koyabilirsin, opsiyonel)*

## 🌟 Proje Özeti
Blockchain kullanıcılarının en büyük korkusu dolandırılmaktır. SoroShield, **Soroban Akıllı Sözleşmeleri** üzerinde çalışan değiştirilemez bir "Tehdit Veritabanı" oluşturur.
* **Backend:** Rust & Soroban (Veri saklama)
* **AI Agent:** Python (Otomatik tehdit avcılığı ve veri girişi)
* **Frontend:** React + Vite + Tailwind CSS (Kullanıcı arayüzü)

## 🏗️ Mimari & Teknolojiler
Bu proje 3 ana katmandan oluşur:
1.  **On-Chain (Zincir Üstü):**
    * **Technology:** Stellar Soroban SDK (Rust)
    * **Contract ID:** `CBQYNJSEVTCIQQ5IUVBUSGZXXMMRUBS4UR5ZP35FKD6SPNQ2C2WFRXUA`
    * **Network:** Testnet
2.  **Off-Chain (Zincir Dışı Ajan):**
    * **Technology:** Python Script (`sentinel.py`)
    * **Görevi:** Siber istihbarat verilerini analiz edip akıllı sözleşmeye işler.
3.  **Client (Kullanıcı Arayüzü):**
    * **Technology:** React, Vite, Tailwind CSS
    * **Görevi:** Son kullanıcının cüzdan adreslerini sorgulayıp risk skorunu görmesini sağlar.

## 🚀 Kurulum ve Çalıştırma

### 1. Akıllı Sözleşme (Backend)
```bash
soroban contract build
soroban contract deploy --wasm target/wasm32-unknown-unknown/release/soroshield.wasm --source admin --network testnet