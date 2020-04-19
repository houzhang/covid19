import fetch from "node-fetch";

const fetchingData = async () => {
  const res = await fetch("https://api.covid19api.com");
  connsole.log("response", res);
  return res;
};

export default fetchingData;