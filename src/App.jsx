import "./App.css";
import Cell from "./components/Cell/Cell";
import Grid from "./components/Grid/Grid";
import Row from "./components/row/Row";
import Ships from "./components/ships/ships";
import { StatusContext } from "../StatusContext";
import { useState } from "react";

function App() {
  const [shipStatus, setShipStatus] = useState({
    status: false,
    name: "",
  });
  const [attemptcount, setAttemptCount] = useState(0);
  const [hitCount, setHitCount] = useState(0);
  const statusContext = {
    shipStatus: shipStatus,
    setShipStatus: setShipStatus,
    attemptcount: attemptcount,
    setAttemptCount: setAttemptCount,
    setHitCount: setHitCount,
    hitCount: hitCount,
  };

  return (
    <>
      <StatusContext.Provider value={statusContext}>
        {hitCount >= 17 ? alert("You Win") : null}
        <Grid />
        <Ships />
      </StatusContext.Provider>
    </>
  );
}

export default App;
