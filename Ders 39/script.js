const username = document.getElementById("usn");
const password = document.getElementById("psw");
const showusn = document.getElementById("susn");
const showpsw = document.getElementById("spsw");

showusn.innerHTML = "Show username" + username.value;
showpsw.innerText = "Show password" + password.value;