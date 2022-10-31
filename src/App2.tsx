import { useCallback, useEffect, useState } from "react";
import { GameController } from "./containers/GameContainer";
import { randomInteger } from "./Main";
import ColorRectangles from "./Rectangles";

function SecondApp() {
  const items = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30,
  ];

  const [currentBox, setCurrentBox] = useState(0);
  const {
    score,
    setScore,
    gameSpeed,
    setCount,
    count,
    gameOn,
    gameLimit,
    gameObjectColor,
    clickable,
    setClickable
  } = GameController.useContainer();

  useEffect(() => {
    if(gameOn){
    setTimeout(() => {
      setCurrentBox(randomInteger(1, 30));
      count < gameLimit ? setCount(count + 1) : setCount(gameLimit);
      setClickable(true);
    }, gameSpeed);
    
}
  }, [count, currentBox, gameLimit, gameOn, gameSpeed, setClickable, setCount]);

  const colorCallback = useCallback(
    (boxClicked: number) => {
      if (clickable && boxClicked === currentBox) {
        setScore(score + 1);
        setClickable(false);
      }
    },
    [clickable, currentBox, score, setClickable, setScore]
  );
  
  return (
    <div style={{ backgroundColor: "wheat", height: "620px" }}>
      <div
        style={{
          padding: "5px 16px",
          backgroundColor: "yellowgreen",
          height: "calc(80vh)",
          justifyItems: 'center',  textAlign: 'center'
        }}
      >
        {items.map((num) => (
          <ColorRectangles
            key={num}
            boxIndex={num}
            activeIndex={currentBox}
            getClickedCallback={colorCallback}
            activeBoxColor={gameObjectColor}
          />
        ))}
      </div>
    </div>
  );
}

export default SecondApp;
