import NativeModal from "react-modal";
import "./modalDesign.css";

NativeModal.setAppElement("#root");

const style = {
  content: {
    border: "0",
    borderRadius: "4px",
    bottom: "auto",
    height: "200px", // set height
    left: "50%",
    padding: "2rem",
    position: "fixed",
    right: "auto",
    top: "50%", // start from center
    transform: "translate(-50%,-" + "50%" + ")", // adjust top "up" based on height
    width: "60%",
    maxWidth: "40rem",
  },
};

export default function Modal({ rightOrWrong, randomNumber }) {
  // rightOrWrong = 'right' 'wrong'
  // randomnumber = ie 23
  const startNewGame = () => {
    window.location.reload();
  };
  return (
    <NativeModal isOpen={true} contentLabel="My modal" style={style}>
      <div id="parchment">
        {rightOrWrong === "right" && (
          <div class="svar">Godt klaret, du svarede rigtigt! </div>
        )}

        {rightOrWrong === "wrong" && (
          <div class="svar">
            Øv! Du gættede den ikke på de 10 første gæt. Prøv igen. Det rigtige
            svar var {randomNumber}
          </div>
        )}
        <button onClick={startNewGame} class="knapGrafik">
          Klik her for at spille igen
        </button>
      </div>
    </NativeModal>
  );
}
