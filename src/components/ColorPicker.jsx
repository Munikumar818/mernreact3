import React, { useState } from "react";

export default function ColorPicker(props) {
  const clrs = props.colors;
  const [boardColor, setBoardColor] = useState("#24f5f6"); // Initialize with the default color

  function changecolor(e) {
    const newColor = e.target.style.backgroundColor;
    console.log("Button background color:", newColor);
    setBoardColor(newColor);
  }

  return (
    <div >
        <div className="board" style={{ backgroundColor: boardColor }}>
      <div className="boxes">
        {clrs.map((c, index) => (
          <button
            key={index}
            style={{ backgroundColor: `#${c}` }}
            className="box"
            onClick={changecolor}
          ></button>
        ))}
      </div>
    </div>
    </div>
  );
}
