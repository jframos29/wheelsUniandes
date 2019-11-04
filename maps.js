const dotenv = require("dotenv");
dotenv.config();

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_MAPS_API_KEY,
  Promise: Promise
});


const directions = (inicio, fin, waypoints) => {
  return googleMapsClient.directions({}).asPromise();
};
