import { Link } from "react-router-dom";
import millify from "millify";
import { Card } from "antd";

export default function CoinCard({ coin }) {
  return (
    <Link to={`cryptos/${coin.uuid}`} className="coin-link">
      <Card
        bordered
        className="coin-display"
        cover={<img className="coin-img" src={coin?.iconUrl} alt="" />}
      >
        <Card.Meta
          title={
            <>
              <p className="coin-name">{coin.name}</p>
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
  );
}
