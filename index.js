import cron from "node-cron";
import fetchingData from "./fetch";

cron.schedule("*/1 * * * *", () => {
  console.log("Starting job")
  console.log("data: ",fetchingData());
});