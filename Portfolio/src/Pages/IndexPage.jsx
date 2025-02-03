import React, { useState, useEffect } from "react";
import { LanternEffect } from "../Components/LaternEffect/LanternEffect";
import { Loading } from "../Components/Loading/Loading";
import { Header } from "../Components/Header/Header";
import { Content } from "../Components/Content/Content";
import { SocialMedia } from "../Components/SocialMedia/SocialMedia";
import { ScrollToTop } from "../Components/ScrollToTop";

export const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga antes de mostrar el resto
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1800); // Cambia este tiempo según necesites

    return () => clearTimeout(timer); // Limpiar el timeout al desmontar
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-16 md:px-12 md:py-16 lg:py-0 ">
          <LanternEffect />
          <div className=" lg:justify-between lg:gap-4">
            <Header />
            <Content />
            <SocialMedia />
            <ScrollToTop />
          </div>
        </div>
      )}
    </>
  );
};
