import { useEffect, useState } from "react";

export interface colorBoxInterface {
  color: string;
  changeColorCallback: (color: string) => void
}
function ColorBox({ color, changeColorCallback }: colorBoxInterface): JSX.Element {
  return (
    <div
    onClick={()=>changeColorCallback(color)}
      style={{
        backgroundColor: color,
        height: "40px",
        width: "40px",
        float: "left",
        margin: "5px",
      }}
    ></div>
  );
}

export default ColorBox;
