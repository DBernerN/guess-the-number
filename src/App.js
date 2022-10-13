//Guess the number
import "./App.css";
import "./styling.css";

import { useEffect, useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";
import Modal from "./Modal";

const logoImg = require("../src/Logo/logo.png");

const App = () => {
  const [randomnumber, setRandomnumber] = useState(
    Math.floor(Math.random() * 1001)
  );
  const [guessed, setGuessed] = useState(false);
  const [gamedone, setgamedone] = useState(false);
  const [formerguesses, setFormerguesses] = useState([]);
  const [val, setVal] = useState("");
  const [error, seterror] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(undefined);

  const onValueChange = (typedIn) => {
    if (Math.floor(typedIn) <= 1000 && Math.floor(typedIn) >= 0) {
      setVal(typedIn);
    }
  };

  const handlekeydown = async (e) => {
    if (e.key === "Enter") {
      const number = Math.floor(val);
      if (number === randomnumber) {
        setGuessed(true);
        setIsModalOpen({ status: "right" });
      } else {
        if (number < randomnumber) {
          seterror("Det rigtige tal er højere");
        }
        if (number > randomnumber) {
          seterror("Det rigtige tal er lavere");
        }

        setFormerguesses((prev) => [number, ...prev]);
        setVal("");
      }
    }
  };

  useEffect(() => {
    if (formerguesses.length === 10) {
      setgamedone(true);
      setIsModalOpen({ status: "wrong" });
    }
    console.log(randomnumber);
  }, [formerguesses]);

  return (
    <body>
      {isModalOpen && (
        <Modal rightOrWrong={isModalOpen.status} randomNumber={randomnumber} />
      )}

      <div id="parchment" className="App">
        <img
          class="img"
          src={logoImg}
          width="250"
          height="250"
          style={{ borderRadius: "50px", marginTop: "20px" }}
        />
        <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
          <div style={{ flex: 1 }}>
            <h1 class="Test">Velkommen til!</h1>
            <h1>Gæt et tal fra 1-1000</h1>

            <label>
              <strong>Skriv dit gæt her:</strong>
            </label>
            <input
              class="felt"
              value={val}
              onChange={(e) => onValueChange(e.target.value)}
              type="number"
              name="guessed"
              onKeyDown={handlekeydown}
            />

            <p>
              {formerguesses.length !== 0
                ? guessed
                  ? "Rigtigt!"
                  : "Øv! Prøv igen"
                : ""}
            </p>

            <p>{error} </p>
          </div>
          <a
            href="https://www3.nd.edu/~lemmon/courses/ee224/web-manual/web-manual/lab6/node4.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Her kan du se reglerne
          </a>
          <div class="gætteliste" style={{ flex: 1 }}>
            <div>
              <p>Du har {10 - formerguesses.length} gæt tilbage</p>
            </div>
            <h3>Her er dine tidigere gæt:</h3>
            {formerguesses.map((n, i) => (
              <p key={i}>
                {n}{" "}
                {n > randomnumber
                  ? "er højere end det rigtige tal"
                  : "er lavere end det rigtige tal"}
              </p>
            ))}
          </div>
        </div>
      </div>
    </body>
  );
};

export default App;
