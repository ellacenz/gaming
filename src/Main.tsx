/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
/* eslint-disable jsx-a11y/anchor-has-content */
import "./main.css";
import { useCallback, useEffect } from "react";
import Modal from "./Modal";
import SettingsSideBar from "./Settings";
import { PlayerDetailsInterface } from "./App";
import { saveGameDetail } from "./Request";
import FirstApp from "./App1";
import { GameController } from "./containers/GameContainer";
import { useParams } from "react-router-dom";
import SecondApp from "./App2";

export function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Main() {
  const {
    score,
    setScore,
    gameSpeed,
    setGameSpeed,
    count,
    setCount,
    gameLimit,
    setGameLimit,
    setGameObjectColor,
    showSetting,
    setShowSetting,
    setShowGameObject,
    gameOn,
    setGameOn,
    startTime,
    setStartTime,
    endMessage,
    setEndMessage,
    showModal, 
    setShowModal
  } = GameController.useContainer();

  const {gameType } = useParams();

  const closeNav = () => {
    setShowSetting("0px");
  };
  const openSidebar = () => {
    setShowSetting("450px");
  };

  const playGame = () => {
    setTimeout(() => {
      setShowGameObject(true);
      setGameOn(true);
      setCount(count === 0 ? 1 : count);
      setStartTime(new Date());
    }, 1000);
  };

  const pauseGame = () => {
    setGameOn(false);
  };

  const stopGame = () => {
    setShowGameObject(false);
    setGameOn(false);
    setCount(0);
    setScore(0);
  };



  useEffect(() => {
    if (count >= gameLimit) {
      setGameOn(false);
      if (score > count / 2) {
        setEndMessage(
          `Congratulations, You Passed!  You scored ${score}/${count}.`
        );
      } else {
        setEndMessage(`Failed! You scored ${score}/${count}. Try again`);
      }
    }
  }, [count, score]);

  useEffect(() => {}, [startTime]);

  useEffect(() => {
    if (!gameOn && count === gameLimit) {
      setTimeout(() => {
        setShowModal("block");
      }, gameSpeed + 500);
    }
  }, [gameOn]);

  const changeColorCallback = useCallback((color: string) => {
    setGameObjectColor(color);
  }, []);

  const setGameSpeedCallback = useCallback((speed: number) => {
    setGameSpeed(speed);
  }, []);

 

  const setGameLimitCallback = useCallback((limit: number) => {
    setGameLimit(limit);
  }, []);

  const restartGameCallback = useCallback(() => {
    setShowModal("none");
    setTimeout(() => {
      setCount(1);
      setScore(0);
      setShowGameObject(true);
      setGameOn(true);
    }, 1000);
  }, []);

  const closeModalCallback = useCallback(() => {
    setShowModal("none");
    setCount(0);
    setScore(0);
  }, []);

  const saveScoreCallback = useCallback(
    (name: string) => {
      const gameDetails: PlayerDetailsInterface = {
        player: name,
        game: gameType,
        beginTime: startTime,
        endTime: new Date(),
        limit: gameLimit,
        speed: gameSpeed,
        score: score,
      };
      saveGameDetail(gameDetails);
    },
    [gameLimit, gameSpeed, score, startTime]
  );

  return (
    <div style={{padding: '0px 10px'}}>
      <div className="header">
        <div style={{ alignItems: "center", alignContent: "center" , padding: "0px 16px"}}>
          <button className="openbtn" onClick={openSidebar}>
            ☰ Game Settings
          </button>

          <span
            style={{
              margin: "0px 10px",
              paddingBottom: "100px",
              fontSize: "0.85em",
            }}
          >
            Your Score
          </span>
          <progress
            id="file"
            value={score}
            style={{ width: "300px", height: "30px" }}
            max={gameLimit}
          >
            {" "}
            32%{" "}
          </progress>
          <span
            style={{
              margin: "0px 10px",
              paddingBottom: "100px",
              fontSize: "0.85em",
            }}
          >
            Game Progress
          </span>
          <progress
            id="file"
            value={count}
            style={{ width: "300px", height: "30px", margin: 0 }}
            max={gameLimit}
          >
            32%
          </progress>
        </div>
        <div style={{ fontWeight: "bolder" }} id="scoreCont">
          Score{" "}
          <span style={{ padding: "10px" }}>
            {score}/{count}
          </span>
          <button
            style={{
              backgroundColor: "blue",
              border: "0px",
              padding: "5px 15px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
            onClick={playGame}
          >
            Play
          </button>
          <button
            style={{
              backgroundColor: "white",
              border: "0px",
              padding: "5px 15px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
            onClick={pauseGame}
          >
            Pause
          </button>
          <button
            style={{
              backgroundColor: "red",
              border: "0px",
              padding: "5px 15px",
              fontWeight: "bolder",
              cursor: "pointer",
            }}
            onClick={stopGame}
          >
            Stop
          </button>
        </div>
      </div>
      <div
        id="mySidebar"
        className="sidebar"
        style={{ width: showSetting, backgroundColor: "white" }}
      >
        <div>
          <a href="#" className="closebtn" onClick={closeNav}>
            x
          </a>
          <SettingsSideBar
            changeColorCallback={changeColorCallback}
            setGameSpeedCallback={setGameSpeedCallback}
            setGameLimitCallback={setGameLimitCallback}
            gameSpeed={gameSpeed}
            score={score}
            count={count}
            gameLimit={gameLimit}
          />
        </div>
      </div>
      <Modal
        display={showModal}
        message={endMessage}
        changeShowModal={restartGameCallback}
        endGameModal={closeModalCallback}
        saveGameModal={saveScoreCallback}
      />
      {gameType === "game1" ? <FirstApp/> : <SecondApp/> }
      
    </div>
  );
}

export default Main;
