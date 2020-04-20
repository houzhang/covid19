import fetch from "node-fetch";

const fetchingData = async () => {
  const res = await fetch("https://api.covid19api.com");
  return res;
};

export default fetchingData;
