import React, { useEffect, useState } from "react";
export const Loading = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Ocultar el texto después de 1.5 segundos
    const timer = setTimeout(() => setShow(false), 1700);
    return () => clearTimeout(timer);
  }, []);

  return (
    show && (
      <div className="loading">
        <div className="loadingP">Bienvenido</div>
      </div>
    )
  );
};
