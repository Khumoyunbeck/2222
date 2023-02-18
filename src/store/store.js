import { configureStore } from "@reduxjs/toolkit";
import middleware from "./middleware";
import client from "./client/client";
import car from "./car/car";
import lang from "./language";
import credit from "./credit/credit";

export default configureStore({
  reducer: { client, car, lang, credit },
  middleware: [middleware],
});
