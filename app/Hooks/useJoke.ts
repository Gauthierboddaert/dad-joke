'use client'

import { useEffect, useState } from "react";
import getRandomJoke from "../api/getRandomJoke";

const useJoke = () => {

  const [joke, setJoke] = useState<Joke>();

  const generateNewJoke = () => {
    getRandomJoke().then((joke: Joke) => {
      setJoke(joke);
    });
  };


  useEffect(() => {
    generateNewJoke();
  }, []);

  return {joke, generateNewJoke};
};

export default useJoke;
