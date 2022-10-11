//Guess the number
import "./App.css";
import { useEffect, useState } from "react";
import { clear } from "@testing-library/user-event/dist/clear";

/**
 * 
 * Feltet bliver tomt og nedenunder får man og videre om gættet ligger under
 * eller over det rigtige gæt
 *
 */

const App = () => {
  const [randomnumber, setRandomnumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guessed, setGuessed] = useState(false);
  const [gamedone, setgamedone] = useState(false)
  const [formerguesses, setFormerguesses] = useState([]);
    const[val, setVal] = useState("")
    const[error, seterror] = useState("")


  const handlekeydown = (e) => {
    if (e.key === "Enter") {
      const number = Math.floor(val);
      if (number === randomnumber) {
        setGuessed(true);
        alert("Well done!")
      } else {
        if (number<randomnumber) {
          seterror("The right number is higher")
        } 
        if (number>randomnumber) {
          seterror("The right number is lower")
        }
        
        setFormerguesses((prev) => ([number, ...prev]));
        setVal("")
      }
    }
  };

  useEffect(() => {
    if (formerguesses.length === 10) {
      setgamedone(true)
      alert("Game Over")
    }



  }, [formerguesses])

  return (
    <div className="App">
      <h1>Velkommen til!</h1>
      <h1>Gæt et tal fra 1-100</h1>
      <label>Skriv dit gæt her: </label>
      <input value={val} onChange={(e) => setVal(e.target.value)}     type="number" name="guessed" onKeyDown={handlekeydown}/>
      <p>{guessed ? "You guessed it" : "You didnt get it"}</p>
      <p>{error} </p>
    
      {formerguesses.map((n, i) => (
        <p key={i}>{n}</p>
      ))}
    </div>
  );
};




export default App;
