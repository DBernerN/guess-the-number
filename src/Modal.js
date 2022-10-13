import NativeModal from "react-modal";

NativeModal.setAppElement("#root");

export default function Modal({ rightOrWrong, randomNumber }) {
  // rightOrWrong = 'right' 'wrong'
  // randomnumber = ie 23
  const startNewGame = () => {
    window.location.reload();
  };
  return (
    <NativeModal isOpen={true} contentLabel="My modal">
      <div id="parchment">
        {rightOrWrong === "right" && (
          <div>Godt klaret, du svarede rigtigt! </div>
        )}

        {rightOrWrong === "wrong" && <div>Øv! Du svarede forkert</div>}
        <button onClick={startNewGame}>Klik her for at spille igen</button>
      </div>
    </NativeModal>
  );
}
