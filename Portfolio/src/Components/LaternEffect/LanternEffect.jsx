import React, { useEffect, useState } from "react";

export const LanternEffect = () => {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="lantern-overlay"
      style={{ "--x": mousePos.x, "--y": mousePos.y }}
    ></div>
  );
};
