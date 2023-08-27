import { useEffect, useState } from "react";
import "./App.css";
import { Tooltip } from "react-tooltip";
import { dataArray } from "../array";
import snapMeta from "./assets/7ea38ddff2fb409483bc51b0d11bb6e6.png";
function Row({ data, header }) {
  return (
    <div
      className="row"
      style={{ display: "flex", flexDirection: "row" }}>
      <div className={`tier-header ${header.toLowerCase()}-header`}>
        {header}
      </div>
      {data.map((deck, index) => (
        <div
          key={index}
          className="deck"
          data-tooltip-id="my-tooltip"
          data-tooltip-content={deck.name}>
          <div className="deck-name">{deck.name}</div>
          <div className="deck-tier">{deck.tierScore.toFixed(2)}</div>
        </div>
      ))}
    </div>
  );
}

function App() {
  const [rows, setRows] = useState({ S: [], A: [], B: [], C: [] });

  const addToRow = (existingRow, newItem) => {
    if (
      !existingRow.some((existingDeck) => existingDeck.name === newItem.name)
    ) {
      return [...existingRow, newItem];
    }
    return existingRow;
  };

  useEffect(() => {
    dataArray.forEach((deck) => {
      const tier = deck.tier;
      if (["S", "A", "B", "C"].includes(tier)) {
        setRows((prevRows) => ({
          ...prevRows,
          [tier]: addToRow(prevRows[tier], deck),
        }));
      }
    });
  }, []);

  return (
    <>
      <img
        src={snapMeta}
        alt="Logo"
      />
      <div className="container">
        <Tooltip
          id="my-tooltip"
          effect="solid"
          place="bottom"
        />
        <div className="parent">
          <div
            className="flexbox"
            style={{ display: "flex", flexDirection: "column" }}>
            {Object.keys(rows).map((tier) => (
              <Row
                key={tier}
                header={tier}
                data={rows[tier]}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
