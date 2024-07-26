import { useGetCryptosQuery } from "../services/cryptoApi";
import "../styles/Cryptos.css";
import { Link } from "react-router-dom";
import millify from "millify";
import { Card, Input } from "antd";
import { useState, useEffect } from "react";

export default function Cryptocurrencies({ simplified = false }) {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [coinsArr, setCoinsArr] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredData = cryptosList?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    setCoinsArr(filteredData);
  }, [cryptosList, searchTerm]);

  return (
    <div className="cryptos-container">
      {simplified ? (
        <h2 className="section-title">Top 10 Coins</h2>
      ) : (
        <div className="coin-search">
          <Input
            type="search"
            size="middle"
            placeholder="Search Cryptos"
            style={{
              fontSize: "1.3rem",
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      {isFetching ? (
        <p>Loading...</p>
      ) : (
        <div
          className={`coins-container ${simplified ? "coins-container-simple" : "coins-container-large"}`}
        >
          {coinsArr &&
            coinsArr?.map((coin) => (
              <Link
                key={coin.uuid}
                to={`/cryptos/${coin.uuid}`}
                className="coin-link"
              >
                <Card
                  bordered
                  className="coin-display"
                  cover={
                    <img className="coin-img" src={coin?.iconUrl} alt="" />
                  }
                >
                  <Card.Meta
                    title={
                      <>
                        <div className="coin-name">{coin.name}</div>
                        <p className="coin-symbol">{coin.symbol}</p>
                      </>
                    }
                  />
                  <p className="coin-price">
                    Rank: <span>{coin.rank}</span>
                  </p>
                  <p className="coin-price">
                    Price: <span>${millify(coin.price)}</span>
                  </p>
                  <p className="coin-market">
                    Market Cap: <span>${millify(coin.marketCap)}</span>
                  </p>
                </Card>
              </Link>
            ))}
        </div>
      )}
    </div>
  );
}
