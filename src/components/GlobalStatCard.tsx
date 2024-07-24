import millify from "millify";

export default function GlobalStatCard({ title, isFetching, value, large=false }) {
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
