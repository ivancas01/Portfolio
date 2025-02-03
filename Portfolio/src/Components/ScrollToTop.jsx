import React, { useState, useEffect } from "react";
import upImage from "../assets/chevron-doble-up.png";

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 bg-emerald-300 p-3 rounded-full shadow-lg transition-opacity duration-300 cursor-pointer ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <img src={upImage} className="w-[20px]" alt="" />
    </button>
  );
};
