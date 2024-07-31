import millify from "millify";
import "../styles/GlobalStatsCard.css";

interface GlobalStatsProps {
  title: string;
  isFetching: boolean;
  value: number;
  large: boolean;
}

export default function GlobalStatCard({ title, isFetching, value, large=false }: GlobalStatsProps) {
  return (
    <div className="stat-cell-container">
      <p className="stat-title">
        Total
        {large && (<br/>)}
        <span> {title}</span>
      </p>
      {!isFetching && (
        <p className="stat-value">{millify(value)}</p>
      )}
    </div>
  );
}
