import { useEffect, useState } from "react";
import card from "./assets/absorbing-man.jpg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Tooltip } from "react-tooltip";
import { dataArray } from "../array";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  const [rowS, setRowS] = useState([]);
  const [rowA, setRowA] = useState([]);
  const [rowB, setRowB] = useState([]);
  const [rowC, setRowC] = useState([]);
  let deck = "Absorbing Man";
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  useEffect(() => {
    dataArray.forEach((deck) => {
      if (deck.tier === "S") {
        setRowS((rowS) => [...rowS, deck]);
      } else if (deck.tier === "A") {
        setRowA((rowA) => [...rowA, deck]);
      } else if (deck.tier === "B") {
        setRowB((rowB) => [...rowB, deck]);
      } else if (deck.tier === "C") {
        setRowC((rowC) => [...rowC, deck]);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="parent">
        <Tooltip id="my-tooltip" />
        <div
          className="flexbox"
          style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="row S"
            style={{ display: "flex", flexDirection: "row" }}>
            {rowS.map((deck) => (
              <div className="deck">
                <div className="deck-name">{deck.name}</div>
                <div className="deck-tier">{deck.tierScore.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div
            className="row A"
            style={{ display: "flex", flexDirection: "row" }}>
            {rowA.map((deck) => (
              <div className="deck">
                <div className="deck-name">{deck.name}</div>
                <div className="deck-tier">{deck.tierScore.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div
            className="row B"
            style={{ display: "flex", flexDirection: "row" }}>
            {rowB.map((deck) => (
              <div className="deck">
                <div className="deck-name">{deck.name}</div>
                <div className="deck-tier">{deck.tierScore.toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div
            className="row C"
            style={{ display: "flex", flexDirection: "row" }}>
            {rowC.map((deck) => (
              <div className="deck">
                <div className="deck-name">{deck.name}</div>
                <div className="deck-tier">{deck.tierScore.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
