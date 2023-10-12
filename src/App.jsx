import "./App.css";
import Cell from "./components/Cell/Cell";
import Grid from "./components/Grid/Grid";
import Row from "./components/row/Row";
import Ships from "./components/ships/ships";
import { StatusContext } from "../StatusContext";
import { useEffect, useState } from "react";
import Alert from "./components/alert/Alert";

function App() {
  const [shipStatus, setShipStatus] = useState({
    status: false,
    name: "",
  });
  const [attemptcount, setAttemptCount] = useState(0);
  const [hitCount, setHitCount] = useState(0);
  const [isrestarting, setIsRestarting] = useState(false);
  const statusContext = {
    shipStatus: shipStatus,
    setShipStatus: setShipStatus,
    attemptcount: attemptcount,
    setAttemptCount: setAttemptCount,
    setHitCount: setHitCount,
    hitCount: hitCount,
    setIsRestarting: setIsRestarting,
    isrestarting: isrestarting,
  };
  function restart() {
    setHitCount(0);
    setAttemptCount(0);
    setShipStatus({
      status: false,
      name: "",
    });
    setIsRestarting(true);
  }

  return (
    <>
      {hitCount >= 17 ? (
        <Alert handleClick={restart} attempts={attemptcount} />
      ) : null}
      <StatusContext.Provider value={statusContext}>
        <Grid />
        <Ships />
      </StatusContext.Provider>
    </>
  );
}

export default App;
