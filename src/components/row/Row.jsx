import Cell from "../Cell/Cell";
import "./Row.css";

function Row({ y }) {
  const cellRow = Array(10).fill();
  console.log(cellRow);
  return (
    <div className="cellRow">
      {cellRow.map((_, index) => (
        <Cell x={index} y={y} />
      ))}
    </div>
  );
}

export default Row;
