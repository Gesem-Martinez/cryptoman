import { useGetCryptosQuery } from "../services/cryptoApi";
import "../styles/Home.css";
import GlobalStatCard from "./GlobalStatCard";
import Cryptocurrencies from "./Cryptocurrencies";

export default function Home() {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;


  return (
    <>
      <div className="home-section">
        <h2 className="section-title">Global Crypto Stats</h2>
        <div className="global-stats-container">
          <GlobalStatCard title="Cryptocurrencies" isFetching={isFetching} value={globalStats?.total}/>
          <GlobalStatCard title="Market Cap" isFetching={isFetching} value={globalStats?.totalMarketCap} large/>
          <GlobalStatCard title="24h Volume" isFetching={isFetching} value={globalStats?.total24hVolume}/>
          <GlobalStatCard title="Markets" isFetching={isFetching} value={globalStats?.totalMarkets}/>
          <GlobalStatCard title="Exchanges" isFetching={isFetching} value={globalStats?.totalExchanges}/>
        </div>
      </div>

      <Cryptocurrencies simplified />
    </>
  );
}
