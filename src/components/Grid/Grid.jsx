import Row from "../row/Row";
import "./Grid.css";
function Grid() {
  const rowColumns = Array(10).fill();
  console.log(rowColumns);
  return (
    <div className="grid">
      {rowColumns.map((_, index) => (
        <Row y={index} />
      ))}
    </div>
  );
}

export default Grid;
