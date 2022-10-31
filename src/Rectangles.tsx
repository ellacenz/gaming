import "./main.css";

interface colorRectanglesInterface {
  boxIndex: number;
  activeIndex: number;
  getClickedCallback: (index: number) => void;
  activeBoxColor: string
}

function ColorRectangles({
  boxIndex,
  activeIndex,
  getClickedCallback,
  activeBoxColor
}: colorRectanglesInterface) {
  const handleClick = () => {
    getClickedCallback(boxIndex);
  };

  return (
    <div>
      <div className="rectangle"
        style={{
          backgroundColor: boxIndex === activeIndex ? activeBoxColor : "#7393B3",
          height: "calc(16vh)",
          width: "calc(13.8vw)",
          position: "relative",
          float: "left",
          border: "1px solid",
          padding: "0px 15px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      ></div>
    </div>
  );
}

export default ColorRectangles;
