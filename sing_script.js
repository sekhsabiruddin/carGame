let login_form = document.getElementById("sign-in");
if (login_form) {
  login_form.addEventListener("click", longinFrom);
}
let golobalName = "";

function longinFrom(e) {
  e.preventDefault();

  let userName = document.getElementById("UserName").value;
  let password = document.getElementById("Password").value;
  let error = document.getElementById("error");
  data = JSON.parse(localStorage.getItem("data"));
  if (!chceckLogin(userName, password)) {
    error.innerHTML = "User name and Password did't match";
  }
}
let arr1 = [];
function chceckLogin(UserName, Password) {
  //   console.log(document.querySelector(".container"));

  for (let t of data) {
    if (t.username == UserName && t.password == Password) {
      golobalName = t.username;
      // exports = golobalName;
      let obj = { name: t.name };
      arr1.push(obj);
      localStorage.setItem("datasingin", JSON.stringify(arr1));
      window.location.href = "carGame/gamepage.html";
    }
  }
  return false;
}
