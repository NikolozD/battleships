import { ShipsData } from "../../mocks";
import Ship from "./ship";
import "./ships.css";

function Ships() {
  const { layout } = ShipsData;
  const icon = <img src="\assets\miss_small.png" alt="" />;
  return (
    <>
      {layout.map((ship) => (
        <Ship name={ship.ship} positions={ship.positions} icon={icon} />
      ))}
    </>
  );
}
export default Ships;

{
}
