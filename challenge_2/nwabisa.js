/**
 * Information about Nwabisa
 */
const nwabisa = {
  firstname: "Nwabisa",
  surname: "Gabe",
  role: "CEO",
};

const display =
  nwabisa.firstname + " " + nwabisa.surname + " (" + nwabisa.role + ")";
document.querySelector("#nwabisa").innerText = display;

export default nwabisa;
