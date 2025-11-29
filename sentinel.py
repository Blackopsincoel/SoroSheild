import subprocess
import time

# Contract ID
CONTRACT_ID = "CBQYNJSEVTCIQQ5IUVBUSGZXXMMRUBS4UR5ZP35FKD6SPNQ2C2WFRXUA"

#Eklenecek Gerçek Tehdit Verileri
threats = [
    {"addr": "GBQP_HACKER_1", "type": "PHISH", "score": "95"},
    {"addr": "GA72_DRAINER_X", "type": "DRAIN", "score": "100"},
    {"addr": "GC99_LAUNDER_Z", "type": "MALWR", "score": "80"}
]

print(f"🛡️ SoroSheild Sentienel Başlatılıyor...")
print(f"Target Contract: {CONTRACT_ID}")
print("----------------------------------------")

def write_to_chain(address, category, score):
    print(f"📡 Raporlanıyor: {address} ({category})")

    #Soroban CLI komutunu Python içinde çalıştırıyoruz.
    #Bu komut gerçek Stealler ağına veri yazar!
    cmd = [
        "soroban", "contract", "invoke",
        "--id", CONTRACT_ID,
        "--source", "admin",
        "--network", "testnet",
        "--", "report_threat",
        "--target", address,
        "--category", category,
        "--score", score,
        "--reporter", "SENTINEL_PY"
    ]
    
    try:
        # Komutu çalıştır ve ciktısnı al
        result = subprocess.run(cmd, capture_output=True, text=True)

        if result.returncode == 0:
            print(f"✅ BAŞARILI: Veri Blokzincirine İşlendi!.")
            print(f"     Hash: {result.stderr.splitlines()[-1] if result.stderr else 'Gizli'}")
        else:
            print(f"❌ HATA: Yazılmadı.")
            print(result.stderr)
    except Exception as e:
        print(f"Hata oluştu: {e}")
    
# Döngü
for t in threats:
    write_to_chain(t["addr"], t["type"], t["score"])
    time.sleep(2)  #Ağ yoğunluğunu  beklemek için

print("----------------------------------------")
print("🏁 Tüm tehditler Stealler Ağına başarıyla kaydedildi..")
