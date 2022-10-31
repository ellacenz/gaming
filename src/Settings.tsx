import ColorBox from "./ColorBox";
import "./main.css";

interface SettingsInput {
  changeColorCallback: (color: string) => void;
  setGameSpeedCallback: (speed: number) => void;
  setGameLimitCallback: (limit: number) => void;
  gameSpeed: number;
  score: number;
  count: number;
  gameLimit: number;
}
function SettingsSideBar({
  gameSpeed,
  changeColorCallback,
  setGameSpeedCallback,
  score,
  count,
  gameLimit,
  setGameLimitCallback,
}: SettingsInput) {
  return (
    <div>
      <div >
        <div>
          <h3>Game Settings</h3>
          <ColorBox color={"brown"} changeColorCallback={changeColorCallback} />
          <ColorBox color={"red"} changeColorCallback={changeColorCallback} />
          <ColorBox color={"green"} changeColorCallback={changeColorCallback} />
          <ColorBox color={"blue"} changeColorCallback={changeColorCallback} />
          <ColorBox color={"pink"} changeColorCallback={changeColorCallback} />
          <ColorBox color={"grey"} changeColorCallback={changeColorCallback} />
        </div>
        <div style={{ clear: "both" }}></div>
        <div>
          <h5>Game Speed</h5>
          <input
            type="range"
            value={gameSpeed}
            min="400"
            max="2000"
            step="200"
            style={{ width: "300px" }}
            onChange={(event) =>
              setGameSpeedCallback(Number(event.target.value))
            }
          />
          <span>{gameSpeed}</span>
        </div>
        <div>
          <h5>Your Score</h5>
          <progress
            id="file"
            value={score}
            style={{ width: "300px", height: "30px", margin: 0 }}
            max={gameLimit}
          >
            {" "}
            32%{" "}
          </progress>
        </div>
        <div>
          <h5>Game Progress</h5>
          <progress
            id="file"
            value={count}
            style={{ width: "300px", height: "30px", margin: 0 }}
            max={gameLimit}
          >
            32%
          </progress>
        </div>
        <div>
          <h5>Game Limit</h5>
          <span style={{ fontSize: "0.875em" }}>Enter game limit: </span>
          <input
            type="number"
            style={{ width: "50px", border: "1px solid", padding: "5px" }}
            value={gameLimit}
            onChange={(event) =>
              setGameLimitCallback(Number(event.target.value))
            }
          />
        </div>
      </div>
    </div>
  );
}

export default SettingsSideBar;
