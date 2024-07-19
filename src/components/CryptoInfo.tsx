import { useParams } from "react-router-dom";

export default function CryptoInfo() {
  const { cryptoSymbol } = useParams();

  return (
    <div className="container">
      <div>{cryptoSymbol}</div>
    </div>
  );
}
