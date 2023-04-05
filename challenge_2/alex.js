/**
 * Information about Alex
 */

const alex = {
  firstname: "Alex",
  surname: "Naidoo",
  role: "Head of Marketing",
};

const display = alex.firstname + " " + alex.surname + " (" + alex.role + ")";
document.querySelector("#alex").innerText = display;

export default alex;
