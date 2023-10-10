import { useState } from "react";
import "./AppXY.css";

function AppXY() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div
        className="container"
        onPointerMove={(e) => {
          console.log(e.clientX, e.clientY);
          // setPosition({ x: e.clientX, y: e.clientY });
          //x좌표만 이동시키려면?
          setPosition((prev) => ({ ...prev, x: e.clientX }));
        }}>
        <div
          className="pointer"
          style={{
            transform: `translate(${position.x}px,${position.y}px)`,
          }}></div>
      </div>
    </>
  );
}

export default AppXY;
