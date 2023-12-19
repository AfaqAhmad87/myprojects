import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [initialvalue, setvalue] = useState("");
  const handle = (value) => {
    if (value === "c") {
      setvalue("");
    } else if (value === "m-1") {
      setvalue(initialvalue.slice(0, -1));
    } else if (value === "=") {
      try {
        setvalue(eval(initialvalue));
      } catch {
        alert("please put correct values ");
        setvalue("");
      }
    } else {
      setvalue((prevvalue) => prevvalue + value);
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="input">
          <input type="text" id="" value={initialvalue} />
        </div>
        <div className="input-buttons">
          <button onClick={() => handle("c")} style={{ outline: "none" }}>
            c
          </button>
          <button onClick={() => handle("m-1")} style={{ outline: "none" }}>
            -1
          </button>
          <button onClick={() => handle("%")} style={{ outline: "none" }}>
            %
          </button>
          <button onClick={() => handle("/")} style={{ outline: "none" }}>
            /
          </button>
        </div>
        <div className="input-buttons">
          <button onClick={() => handle("7")} style={{ outline: "none" }}>
            7
          </button>
          <button onClick={() => handle("8")} style={{ outline: "none" }}>
            8
          </button>
          <button onClick={() => handle("9")} style={{ outline: "none" }}>
            9
          </button>
          <button onClick={() => handle("*")} style={{ outline: "none" }}>
            *
          </button>
        </div>
        <div className="input-buttons">
          <button onClick={() => handle("4")} style={{ outline: "none" }}>
            4
          </button>
          <button onClick={() => handle("5")} style={{ outline: "none" }}>
            5
          </button>
          <button onClick={() => handle("6")} style={{ outline: "none" }}>
            6
          </button>
          <button onClick={() => handle("-")} style={{ outline: "none" }}>
            -
          </button>
        </div>
        <div className="input-buttons">
          <button onClick={() => handle("1")} style={{ outline: "none" }}>
            1
          </button>
          <button onClick={() => handle("2")} style={{ outline: "none" }}>
            2
          </button>
          <button onClick={() => handle("3")} style={{ outline: "none" }}>
            3
          </button>
          <button onClick={() => handle("+")} style={{ outline: "none" }}>
            +
          </button>
        </div>
        <div className="input-buttons">
          <button onClick={() => handle("0")} style={{ outline: "none" }}>
            0
          </button>
          <button onClick={() => handle("00")} style={{ outline: "none" }}>
            00
          </button>
          <button onClick={() => handle(".")} style={{ outline: "none" }}>
            .
          </button>
          <button onClick={() => handle("=")} style={{ outline: "none" }} sss>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
