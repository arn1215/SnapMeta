import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";

function App() {
  const [greetMsg, setGreetMsg] = useState("");
  const [name, setName] = useState("");

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke("greet", { name }));
  }

  return (
    <div className="container">
      <div className="parent">
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
          <a
            href="https://vitejs.dev"
            target="_blank">
            <img
              src="/vite.svg"
              className="logo vite"
              alt="Vite logo"
            />
          </a>
          <a
            href="https://tauri.app"
            target="_blank">
            <img
              src="/tauri.svg"
              className="logo tauri"
              alt="Tauri logo"
            />
          </a>
          <a
            href="https://reactjs.org"
            target="_blank">
            <img
              src={reactLogo}
              className="logo react"
              alt="React logo"
            />
          </a>
        </div>
        <h1>Hello world!</h1>
        <p>Click on the Tauri, Vite, and React logos to learn more.</p>

        <form
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
        </form>

        <p>{greetMsg}</p>
      </div>
    </div>
  );
}

export default App;
