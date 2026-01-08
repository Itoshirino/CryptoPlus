const MARKET_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,tether,binancecoin&vs_currencies=usd";

const cryptoList = document.querySelector(".cryptoList");

function CryptoPlus() {
  fetch(MARKET_API)
    .then((response) => response.json())
    .then((data) => {
      const binanceCoin = data.binancecoin.usd;
      const bitcoin = data.bitcoin.usd;
      const ethereum = data.ethereum.usd;
      const tether = data.tether.usd;

      cryptoList.innerHTML = `
        <div class="market__box">
          <span class="market__title"><i class="ri-eth-line"></i> ETH/USD</span>
          <span class="market__money"> $${ethereum}</span>
        </div>
         <div class="market__box">
          <span class="market__title"> <i class="ri-btc-fill"></i> BTC/USD</span>
          <span class="market__money"> $${bitcoin}</span>
        </div>
        <div class="market__box">
          <span class="market__title"><i class="ri-bnb-line"></i> USDT/USD</span>
          <span class="market__money">$${tether}</span>
        </div>
        <div class="market__box">
          <span class="market__title"><i class="ri-nft-line"></i> BNB/USD</span>
          <span class="market__money">$${binanceCoin}</span>
        </div>
      `;
    });
}

CryptoPlus();
setInterval(CryptoPlus, 10000);
