const dotenv = require("dotenv");
dotenv.config();

const googleMapsClient = require("@google/maps").createClient({
  key: process.env.GOOGLE_MAPS_API_KEY,
  Promise: Promise
});

const functionsGoogle = {
  directions(inicio, fin, departureTime){
    return googleMapsClient.directions({"origin":inicio,"destination":fin, "mode":"driving", "region":"co", "language":"es", "departure_time":departureTime}).asPromise();
  },
  geocoding(address){
    return googleMapsClient.geocode({"address": address, "region":"co", "language":"es", "bounds":{"south":4.365765,"north":5.221587,"west":-74.454260,"east":-73.899314}}).asPromise();
  }
};




module.exports = {
  functionsGoogle
};
