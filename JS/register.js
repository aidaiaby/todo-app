const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const submitButton = document.querySelector(".submitBtn");
const error = document.querySelector(".error");

window.addEventListener("load", () => {
  if(!localStorage.getItem("users")){
    localStorage.setItem("users",JSON.stringify([]))
  }
})

const users = JSON.parse(localStorage.getItem("users"))

submitButton.addEventListener("click", (event) =>{
  event.preventDefault();

  const isUser = !!users.find(item => item.email === emailInput.value)

  if(emailInput.value !== "" && passwordInput.value !== ""){
    if(isUser){
      error.innerHTML = "User already exist"
    } else {
      const allUsers = JSON.parse(localStorage.getItem("users"))
      localStorage.setItem("users", JSON.stringify([...allUsers,{email:emailInput.value,password:passwordInput.value}]))
    }

      localStorage.getItem("isAuth", "true")
      window.open("../index.html", "_self")

    emailInput.value = ""
    passwordInput.value = ""

  } else {
    error.innerHTML = "Fill all the lines"
  }
}) 

window.addEventListener("load", () => {
  if(window.localStorage.getItem("isAuth") === "true"){
    window.open("../index.html", "_self")
  }
})
