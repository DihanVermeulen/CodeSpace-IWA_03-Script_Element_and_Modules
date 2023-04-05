import { company, year } from "./configuration.js";
console.log("Starting");
console.log(company);
console.log(year);

const message = "© " + company + " (" + year + ")";
document.querySelector("footer").innerText = message;
