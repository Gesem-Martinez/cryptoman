import { useParams } from "react-router-dom";

export default function CryptoInfo() {
  const { cryptoUUID } = useParams();

  return (
    <div className="container">
      <div>{cryptoUUID}</div>
    </div>
  );
}
