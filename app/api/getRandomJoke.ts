import BlaguesAPI from "blagues-api";
import { JokeResponse } from "blagues-api/dist/types/types";

const getRandomJoke = async (): Promise<JokeResponse> => {
  const blague = new BlaguesAPI(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiMjEyNjcyOTAwNDMwNDMwMjExIiwibGltaXQiOjEwMCwia2V5IjoidzZzejcxdVNqZG5QbnhKampFdHE4U3NrVzQ0b1hsNlVJeWVUUjhlOXFBMUVvb21DQ1oiLCJjcmVhdGVkX2F0IjoiMjAyMy0wNy0wOFQxNTo1MDozMSswMDowMCIsImlhdCI6MTY4ODgzMTQzMX0.7KSJAZ5jFHsywoKEeSKs9fexLDco434q2D524H2M3-w"
  );
  
  return await blague.random({
    disallow: [
      blague.categories.GLOBAL,
      blague.categories.BLONDES,
    ]
  });
};

export default getRandomJoke;
