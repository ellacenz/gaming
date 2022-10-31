import { useState, useEffect } from "react";
import { GameController } from "./containers/GameContainer";
import { randomInteger } from "./Main";
import { saveGameDetail } from "./Request";

function FirstApp() {
  const {
    score,
    setScore,
    gameSpeed,
    setCount,
    count,
    gameOn,
    gameLimit,
    gameObjectColor,
    showGameObject,
    setShowGameObject,
    clickable,
    setClickable,
  } = GameController.useContainer();
  const windowHeight: number = window.innerHeight;
  const windowWidth: number = window.innerWidth;

  const [gameObjectPosition, setGameObjectPosition] = useState({
    x: randomInteger(100, windowHeight - 600),
    y: randomInteger(50, windowWidth - 150),
  });

  const handleClick = () => {
    if (clickable) {
      setScore(score + 1);
      setClickable(false);
    }
  };
  useEffect(() => {
    if (gameOn) {
      setTimeout(() => {
        setShowGameObject(!showGameObject);
        if (!showGameObject) {
          setGameObjectPosition({
            x: randomInteger(50, windowWidth - 200),
            y: randomInteger(100, windowHeight - 600),
          });
          count < gameLimit ? setCount(count + 1) : setCount(gameLimit);
          setClickable(true);
        }
      }, gameSpeed);
    }
  }, [
    count,
    gameLimit,
    gameOn,
    gameSpeed,
    setClickable,
    setCount,
    setShowGameObject,
    showGameObject,
    windowHeight,
    windowWidth,
  ]);

  return (
    <div>
      <div className="container">
        <div id="playGround">
          <div
            style={{
              display: showGameObject ? "block" : "none",
              position: "absolute",
              height: "150px",
              width: "150px",
              left: gameObjectPosition.x,
              top: gameObjectPosition.y,
              backgroundColor: gameObjectColor,
              cursor: "pointer",
            }}
            onClick={handleClick}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default FirstApp;
