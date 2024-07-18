import { useGetCryptosQuery } from "../services/cryptoApi";
import millify from "millify";
import "../styles/Home.css";

export default function Home() {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats = data?.data?.stats;

  console.log(globalStats);

  return (
    <div className="global-stats-section">
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
            Total <br /><span>Market Cap</span>
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
            <p className="stat-value">{millify(globalStats?.totalExchanges)}</p>
          )}
        </div>
      </div>
    </div>
  );
}
