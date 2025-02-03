import React from "react";
import linkedinImage from "../../assets/linkedin.png";
import githubImage from "../../assets/github.png";
import instagramImage from "../../assets/instagram.png";
import messageImage from "../../assets/message.png";

export const SocialMedia = () => {
  return (
    <div className="flex lg:grid justify-self-center gap-3 my-10 lg:mt-0 lg:fixed top-[40%] left-5">
      <a href="https://www.linkedin.com/in/ivantorres99/" target="_blank">
        <img
          className="w-[40px] grayscale-100 hover:grayscale-0 transition all ease-linear"
          src={linkedinImage}
          alt=""
        />
      </a>
      <a href="https://github.com/ivancas01" target="_blank">
        <img
          className="w-[40px] grayscale-100 hover:grayscale-0 transition all ease-linear"
          src={githubImage}
          alt=""
        />
      </a>
      <a href="https://www.instagram.com/ivancas_01/" target="_blank">
        <img
          className="w-[40px] grayscale-100 hover:grayscale-0 transition all ease-linear"
          src={instagramImage}
          alt=""
        />
      </a>
      <a
        href="mailto:ivancastrolol12@gmail.com?Subject=Aquí%20el%20asunto%20del%20mail"
        target="_blank"
      >
        <img
          className="w-[40px] grayscale-100 hover:grayscale-0 transition all ease-linear"
          src={messageImage}
          alt=""
        />
      </a>
    </div>
  );
};
