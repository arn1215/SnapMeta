import { useState } from "react";
import card from "./assets/absorbing-man.jpg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import { Tooltip } from "react-tooltip";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");
  let deck = "Absorbing Man";
  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <div className="parent">
        <Tooltip id="my-tooltip" />
        <div class="div1">
          <h1>S</h1>
        </div>
        <div class="div3">
          <h1>A</h1>
        </div>
        <div class="div5">
          <h1>B</h1>
        </div>
        <div class="div7">
          <h1>C</h1>
        </div>
        <div class="div9">
          <h1>D</h1>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
          <p>Absorbing Man</p>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo tauri"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo vite"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>{" "}
        <div className="row">
          <div
            href="https://reactjs.org"
            target="_blank"
            className="deckContainer"
            data-tooltip-id="my-tooltip"
            data-tooltip-content={deck}
            style={{ pointer: "cursor" }}>
            <img
              src={card}
              className="logo react"
              alt="React logo"
            />
          </div>
        </div>
        {/* <form
          className="row"
          onSubmit={(e) => {
            e.preventDefault();
            greet();
          }}>
          <input
            id="greet-input"
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Enter a name..."
          />
          <button type="submit">Greet</button>
        </form> */}
        <p>{greetMsg}</p>
      </div>
    </div>
  );
}

export default App;
