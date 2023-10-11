import { useContext, useState } from "react";
import "./Cell.css";
import { ShipsData } from "../../mocks/index";
import { StatusContext } from "../../../StatusContext";
function Cell({ x, y }) {
  const [hit, sethit] = useState({ status: false, name: "" });
  const [miss, setMiss] = useState(false);
  const cellPosition = [x, y];
  const { layout } = ShipsData;
  const { setShipStatus, setAttemptCount, setHitCount } =
    useContext(StatusContext);

  function checkHit() {
    for (const ship of layout) {
      for (const shipPosition of ship.positions) {
        if (shipPosition.join() == cellPosition.join()) {
          return (
            sethit({ status: true, name: ship.ship }),
            setShipStatus({ status: true, name: ship.ship }),
            setHitCount((curHitCount) => {
              return curHitCount + 1;
            })
          );
        }
      }
    }
    return (
      setMiss(true),
      setShipStatus({ status: false, name: "" }),
      sethit({ status: false, name: "" })
    );
  }

  function handleClick() {
    checkHit();
    setAttemptCount((curHitCount) => curHitCount + 1);
  }
  if (hit.status) {
    return <div className="cell">X</div>;
  } else if (miss) {
    return <div className="cell">Y</div>;
  } else {
    return <div onClick={handleClick} className="cell"></div>;
  }
}

export default Cell;
