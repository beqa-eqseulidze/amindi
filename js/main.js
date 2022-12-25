import { setGeoLocation } from "./getGeoLocation.js";

if(!sessionStorage.getItem("lat")) setGeoLocation();

