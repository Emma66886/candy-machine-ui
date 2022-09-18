import React from "react";
import Home from "../Home.tsx";
import Header from "./components/header";

function Websiterender({
  candyMachineId,
  connection,
  txTimeout,
  rpcHost,
  network,
  error,
}) {
  return (
    <>
      <Header />
      <Home
        candyMachineId={candyMachineId}
        connection={connection}
        txTimeout={txTimeout}
        rpcHost={rpcHost}
        network={network}
        error={error}
      />
    </>
  );
}

export default Websiterender;
