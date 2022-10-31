import { useState } from "react";

interface showModalInterface {
  display: string;
  message: string;
  changeShowModal: () => void;
  endGameModal: () => void;
  saveGameModal: (name: string) => void;
}

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const consonant = [
  "b",
  "c",
  "d",
  "f",
  "g",
  "h",
  "j",
  "k",
  "l",
  "m",
  "n",
  "p",
  "q",
  "r",
  "s",
  "t",
  "v",
  "w",
  "x",
  "y",
  "z",
];
const vowel = ["a", "e", "i", "o", "u"];

const generateName = (() => {
  const secondConsIndex = randomInteger(0, consonant.length - 1);
  const firstConsIndex = randomInteger(0, consonant.length - 1);
  const vowIndex = randomInteger(0, vowel.length - 1);

  const firstLetter = consonant[firstConsIndex].toUpperCase();
  const secondLetter = vowel[vowIndex];
  const thirdLetter = consonant[secondConsIndex];
  return `${firstLetter}${secondLetter}${thirdLetter}`;
})();

function Modal({
  display,
  message,
  changeShowModal,
  endGameModal,
  saveGameModal,
}: showModalInterface) {
  const [player, setPlayer] = useState(generateName);

  return (
    <div
      style={{
        borderRadius: "10px",
        maxHeight: "200px",
        width: "300px",
        position: "absolute",
        zIndex: "2",
        boxShadow: "3px 3px lightgrey",
        backgroundColor: "white",
        display: display,
        top: "35%",
        left: "35%",
        padding: "10px",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid",
          textAlign: "center",
        }}
      >
        <h5>Game Over</h5>
      </div>
      <div
        style={{
          minHeight: "80px",
          borderBottom: "1px solid",
          textAlign: "center",
        }}
      >
        <h3>{message}</h3>

        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={player}
            onChange={(event) => setPlayer(event.target.value)}
            style={{ borderRadius: "5px", padding: "5px" }}
          />
        </div>
      </div>
      <div
        style={{
          float: "right",
          width: "250px",
          padding: "5px",
        }}
      >
        <button
          style={{
            margin: "5px",
            fontSize: "70%",
            padding: "2px",
          }}
          onClick={() => saveGameModal(player)}
        >
          Save Score
        </button>
        <button
          style={{
            margin: "5px",
            fontSize: "70%",
            padding: "2px",
          }}
          onClick={changeShowModal}
        >
          Play Again
        </button>
        <button
          style={{
            margin: "5px",
            fontSize: "70%",
            padding: "2px",
          }}
          onClick={endGameModal}
        >
          End Game
        </button>
      </div>
    </div>
  );
}

export default Modal;
