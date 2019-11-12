import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Portis from "@portis/web3";
import Web3 from "web3";
import { TerminalHttpProvider, SourceType } from "@terminal-packages/sdk";

const apiKey = "Z0CsA9B5xAkCjfw0kcKh6g==";
const projectID = "bYzPZdjZezVQKvLA";

const portis = new Portis("e26d94e6-f26d-46f4-9c22-cea6b186bb55", "kovan");
const web3 = new Web3(
  new TerminalHttpProvider({
    apiKey: apiKey,
    projectId: projectID,
    source: SourceType.Portis,
    customHttpProvider: portis.provider
  })
);

function App() {
  const sendTrx = () => {
    web3.eth.getAccounts().then(accounts => {
      web3.eth.sendTransaction({
        from: accounts[0],
        value: web3.utils.toWei(".0001", "ether"),
        to: accounts[0]
      });
    });
  };

  return (
    <div>
      <button onClick={() => sendTrx()}>Send Transaction</button>
    </div>
  );
}

export default App;
