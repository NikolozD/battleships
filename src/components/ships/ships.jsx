import { ShipsData } from "../../mocks";
import Ship from "./ship";
import "./ships.css";

function Ships() {
  const { layout } = ShipsData;
  const icon = (
    <img className="status_icon" src="\assets\miss_small.png" alt="" />
  );
  return (
    <div className="status_board">
      {layout.map((ship) => (
        <Ship name={ship.ship} positions={ship.positions} icon={icon} />
      ))}
    </div>
  );
}
export default Ships;

{
}
