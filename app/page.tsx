"use client";

import { FunctionComponent, useEffect, useState } from "react";
import useJoke from "./Hooks/useJoke";

const Home: FunctionComponent = () => {
  
  const {joke, generateNewJoke} = useJoke();
  const [response, setResponse] = useState<string>("hidden");
  const [hideResponse, setHideResponse] = useState<string>("Afficher");

  const displayResponseJoke = (): void => {
    "hidden" === response ? setResponse("flex") : setResponse("hidden");
    "Afficher" === hideResponse ? setHideResponse("Masquer") : setHideResponse("Afficher");
  };
  

  const generateJoke = (): void => {
    generateNewJoke();
    displayResponseJoke();
  }


  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="joke rounded-3xl ">
        <h1 className="mt-12 text-2xl text-center">Blague du jour :</h1>
        <div className=" w-full h-80 items-center flex justify-center flex-col">
          <p className="mx-12">{joke?.joke}</p> <br />
          <p className={`mx-12 font-bold ${response}`}>{joke?.answer}</p>
          <button
            className="mt-12 rounded-lg btn text-white border-none p-3 cursor-pointer"
            onClick={() => displayResponseJoke()}
          >
            {hideResponse} la réponse
          </button>
          <button
            className="mt-2 rounded-lg btn text-white border-none p-3 cursor-pointer"
            onClick={() => generateJoke()}
          >
            Générer une autre blague
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
