import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import "../styles/Home.css";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;
  const coinsArr = data?.data?.coins;

  console.log(coinsArr);

  return (
    <>
      <div className="home-section">
        <h2 className="section-title">Global Crypto Stats</h2>
        <div className="global-stats-container">
          <div className="stat-cell-container">
            <p className="stat-title">
              Total <span>Cryptocurrencies</span>
            </p>
            {!isFetching && (
              <p className="stat-value">{millify(globalStats?.total)}</p>
            )}
          </div>
          <div className="stat-cell-container">
            <p className="stat-title">
              Total <br />
              <span>Market Cap</span>
            </p>
            {!isFetching && (
              <p className="stat-value">
                ${millify(globalStats?.totalMarketCap)}
              </p>
            )}
          </div>
          <div className="stat-cell-container">
            <p className="stat-title">
              Total <span>24h Volume</span>
            </p>
            {!isFetching && (
              <p className="stat-value">
                ${millify(globalStats?.total24hVolume)}
              </p>
            )}
          </div>
          <div className="stat-cell-container">
            <p className="stat-title">
              Total <span>Markets</span>
            </p>
            {!isFetching && (
              <p className="stat-value">{millify(globalStats?.totalMarkets)}</p>
            )}
          </div>
          <div className="stat-cell-container">
            <p className="stat-title">
              Total <span>Exchanges</span>
            </p>
            {!isFetching && (
              <p className="stat-value">
                {millify(globalStats?.totalExchanges)}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="home-section">
        <h2 className="section-title">Top 10 Coins</h2>
        <div className="coins-container">
          {coinsArr &&
            coinsArr.map((coin) => (
              <Link
                key={coin.uuid}
                to={`cryptos/${coin.symbol}`}
                className="coin-link coin-display"
              >
                <img className="coin-img" src={coin?.iconUrl} alt="" />
                <p className="coin-name">{coin.name}</p>
                <p className="coin-symbol">{coin.symbol}</p>
                <div className="coin-info">
                  <p className="coin-price">
                    Price: <br />
                    <span>${millify(coin.price)}</span>
                  </p>
                  <p className="coin-market">
                    Market<br/>Cap: <br />
                    <span>${millify(coin.marketCap)}</span>
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
