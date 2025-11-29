#![no_std]
use soroban_sdk::{contract, contractimpl, contracttype, Env, Symbol, symbol_short};

// --- VERİ YAPISI (Struct) ---
// Tehdit raporunun detaylarını tutan yapı
#[contracttype]
#[derive(Clone, Debug, Eq, PartialEq)]
pub struct ThreatReport {
    pub category: Symbol, // Örn: PHISH, DRAIN
    pub risk_score: u32,  // 0-100 arası puan
    pub reporter: Symbol, // Raporlayan (SENTINEL)
}

#[contract]
pub struct SoroShield;

#[contractimpl]
impl SoroShield {
    
    // 1. TEHDİT RAPORLA (Yazma Fonksiyonu)
    // Veritabanına yeni bir zararlı adres ekler
    pub fn report_threat(env: Env, target: Symbol, category: Symbol, score: u32, reporter: Symbol) {
        let report = ThreatReport {
            category: category,
            risk_score: score,
            reporter: reporter,
        };
        // Veriyi blockchain'e kalıcı olarak işle (Persistent Storage)
        env.storage().persistent().set(&target, &report);
    }

    // 2. CÜZDAN SORGULA (Okuma Fonksiyonu)
    // Bir adresin temiz olup olmadığını kontrol eder
    pub fn check_wallet(env: Env, target: Symbol) -> ThreatReport {
        if env.storage().persistent().has(&target) {
             // Kayıt varsa raporu döndür
             env.storage().persistent().get(&target).unwrap()
        } else {
            // Kayıt yoksa "TEMİZ" raporu döndür
            ThreatReport {
                category: symbol_short!("CLEAN"),
                risk_score: 0,
                reporter: symbol_short!("SYSTEM"),
            }
        }
    }
}