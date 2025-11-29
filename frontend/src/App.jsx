import { useState } from 'react'
import './index.css' // CSS dosyasını bağladık

function App() {
  const [address, setAddress] = useState('')
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  // DEMO VERİSİ
  const blockchainData = {
    "GBQP_HACKER_1": { type: "PHISHING", score: 95, detail: "Outgoing tx to known phishing address." },
    "GA72_DRAINER_X": { type: "WALLET DRAINER", score: 100, detail: "Interaction with malicious contract." },
    "GC99_LAUNDER_Z": { type: "MALWARE", score: 80, detail: "Funds linked to Tornado Cash." }
  };

  const handleScan = () => {
    if (!address) return;
    setLoading(true);
    setResult(null);

    setTimeout(() => {
      setLoading(false);
      if (blockchainData[address]) {
        setResult({ status: 'DANGER', data: blockchainData[address] });
      } else {
        setResult({ status: 'SAFE', data: null });
      }
    }, 1500);
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-x-hidden p-4 sm:p-6 lg:p-8 bg-[#0b0e11] text-gray-200 font-sans">
      
      {/* Fontları buradan çekiyoruz */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Fira+Code:wght@400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-mono { font-family: 'Fira Code', monospace; }
      `}</style>

      {/* Arka Plan Efekti */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute -top-1/4 left-1/4 w-1/2 h-1/2 bg-[#7c3bed]/20 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-[#00f5d4]/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center">
        
        {/* Header */}
        <header className="flex w-full items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6 mb-16">
          <div className="flex items-center gap-3 text-white">
            <div className="text-[#7c3bed] text-3xl">🛡️</div>
            <h2 className="text-white text-xl font-bold">SoroShield</h2>
          </div>
          <button className="px-5 py-2 rounded-lg bg-[#7c3bed]/20 text-white text-sm font-bold border border-[#7c3bed] hover:bg-[#7c3bed] transition-all">
            Connect Wallet
          </button>
        </header>

        {/* Hero Section */}
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <h1 className="text-white text-4xl font-bold sm:text-5xl lg:text-6xl font-display" style={{textShadow: '0 0 20px rgba(124, 59, 237, 0.7)'}}>
            Decentralized Threat Intelligence
          </h1>
          <p className="max-w-2xl text-lg text-gray-400">
            Protecting the Stellar Network from malicious actors and smart contract vulnerabilities.
          </p>
        </div>

        {/* Search Section */}
        <div className="w-full max-w-2xl flex flex-col items-center gap-4 mb-8">
          <input 
            type="text"
            className="w-full h-16 rounded-lg bg-black/30 border border-white/20 text-white p-4 text-center text-lg font-mono focus:outline-none focus:border-[#7c3bed] transition-colors placeholder-gray-600"
            placeholder="Enter Stellar Wallet Address (e.g., GBQP...)"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          
          <button 
            onClick={handleScan}
            disabled={loading}
            className="w-full max-w-xs h-14 rounded-lg bg-[#7c3bed] text-white text-base font-bold hover:bg-purple-600 transition-all shadow-[0_0_15px_rgba(124,59,237,0.4)] disabled:opacity-50"
          >
            {loading ? 'SCANNING CHAIN...' : 'SCAN NOW'}
          </button>
        </div>

        {/* RESULT SECTION */}
        {result && (
          <div className="w-full max-w-4xl p-1 mt-8 animate-pulse">
            <div className={`flex flex-col items-stretch justify-start rounded-xl border ${result.status === 'DANGER' ? 'border-red-500/50 shadow-[0_0_30px_rgba(255,0,0,0.2)]' : 'border-green-500/50 shadow-[0_0_30px_rgba(0,255,0,0.2)]'} bg-black/40 backdrop-blur-md overflow-hidden`}>
              
              <div className="flex flex-col items-start gap-4 p-6 sm:p-8 font-mono text-left w-full">
                <p className="text-white text-lg font-bold font-display w-full border-b border-white/10 pb-4">
                  Scan Results for <span className="text-[#7c3bed]">{address}</span>
                </p>

                {result.status === 'DANGER' ? (
                  // TEHLİKELİ SONUÇ
                  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-sm font-semibold text-gray-400">Risk Score</h3>
                      <div className="relative w-full h-4 bg-gray-700 rounded-full overflow-hidden">
                        <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 to-red-600" style={{width: `${result.data.score}%`}}></div>
                      </div>
                      <p className="text-2xl font-bold text-red-500">{result.data.score} / 100</p>
                    </div>

                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-sm font-semibold text-gray-400">Threat Type</h3>
                      <span className="inline-block px-3 py-1 text-xs font-bold text-red-900 bg-red-500 rounded-full w-fit">
                        {result.data.type}
                      </span>
                    </div>

                    <div className="flex flex-col gap-2 p-4 rounded-lg bg-white/5 border border-white/10">
                      <h3 className="text-sm font-semibold text-gray-400">Details</h3>
                       <p className="text-xs text-yellow-400">{result.data.detail}</p>
                    </div>
                  </div>
                ) : (
                  // GÜVENLİ SONUÇ
                  <div className="w-full p-8 text-center">
                    <h2 className="text-3xl font-bold text-[#00f5d4] mb-2">✅ SAFE WALLET</h2>
                    <p className="text-gray-400">No threats found in SoroShield database.</p>
                  </div>
                )}
                
              </div>
            </div>
          </div>
        )}

        <footer className="w-full text-center py-6 border-t border-white/10 mt-12">
          <p className="text-sm text-gray-500 font-mono">© 2025 SoroShield. Powered by Soroban & Rust.</p>
        </footer>

      </div>
    </div>
  )
}

export default App