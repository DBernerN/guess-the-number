//Guess the number
import "./App.css";
import { useEffect, useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

/**
 *
 *
 *
 */

const App = () => {
  const [randomnumber, setRandomnumber] = useState(
    Math.floor(Math.random() * 1000) + 1
  );
  const [guessed, setGuessed] = useState(false);
  const [gamedone, setgamedone] = useState(false);
  const [formerguesses, setFormerguesses] = useState([]);
  const [val, setVal] = useState("");
  const [error, seterror] = useState("");

  const handlekeydown = async (e) => {
    if (e.key === "Enter") {
      const number = Math.floor(val);
      if (number === randomnumber) {
        setGuessed(true);
        await alert("Godt klaret, du gættede rigtigt!");
        window.location.reload();
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
      alert("Game Over, det rigtige svar var " + randomnumber);
      window.location.reload();
    }
    console.log(randomnumber);
  }, [formerguesses]);

  return (
    <body>
      <div className="App">
        <h1>Velkommen til!</h1>
        <h1>
          <em>Gæt et tal fra 1-1000</em>
        </h1>
        <label>
          <strong>Skriv dit gæt her:</strong>
        </label>
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
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
        <img
          src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png"
          width="500"
        />
        {formerguesses.map((n, i) => (
          <p key={i}>{n}</p>
        ))}
      </div>
    </body>
  );
};

export default App;
