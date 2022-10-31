import { useState } from "react";
import GameTypes from "../GameTypes";
import { createContainer } from "unstated-next"

const useGaming = () => {
  const [gameType, setGameType] = useState(GameTypes.Game1);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [gameLimit, setGameLimit] = useState(10);
  const [gameSpeed, setGameSpeed] = useState(1000);
  const [gameOn, setGameOn] = useState(false);
  const [gameObjectColor, setGameObjectColor] = useState("brown");
  const [endMessage, setEndMessage] = useState("");
  const [showModal, setShowModal] = useState("none");
  const [showSetting, setShowSetting] = useState("0px");
  const [startTime, setStartTime] = useState(new Date());
  const [showGameObject, setShowGameObject] = useState(false);
  const [clickable, setClickable] = useState(true);

 

  return {
    score,
    setScore,
    count,
    setCount,
    gameLimit,
    gameSpeed,
    setGameLimit,
    setGameSpeed,
    gameOn,
    setGameOn,
    gameObjectColor,
    setGameObjectColor,
    endMessage,
    setEndMessage,
    showModal,
    setShowModal,
    showSetting,
    setShowSetting,
    startTime,
    setStartTime,
    gameType,
    setGameType,
    showGameObject,
    setShowGameObject,
    clickable,
    setClickable
  };
};

export const GameController = createContainer(useGaming);
