// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');
let sUpPw = document.getElementById("signUpPassword");
let sUpUser = document.getElementById("signUpUser");
let confirmPw = document.getElementById("confirmPassword");
let sInPw = document.getElementById("signInPassword");
let sInUser = document.getElementById("signInUser");

let signUpInfo = loadSignUpInfo();

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

function signUpHandler() { 
  let index = findbyUser(sUpUser.value);
  if (sUpPw.value === "" || confirmPw.value === "") {
    alert("Missing Password");
    return ;
  } else if (sUpUser.value === "") {
    alert("Missing Username");
    return ;
  } 
  if (confirmPw.value !== sUpPw.value) {
   alert("Passwords dont match");
   return ;
  } else {
    if (index === -1){
      signUpInfo.push(newSignUp(sUpUser.value, sUpPw.value, confirmPw.value))
    } else {
      alert("This Username has been used");
    }
    saveInfo();
  }
 
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function signInHandler() {
  if (sInPw.value === "" || sInUser.value === "") {
    alert("Missing a Input");
  } else {
  for (let i = 0; i < signUpInfo.length; i++) {
    if (signUpInfo[i].Password === sInPw.value && signUpInfo[i].Username === sInUser.value) {
      alert("Sign In Successful");
      return ;
    }
    } 
    alert("Sign In Unsuccessful")
}
}


function loadSignUpInfo() {
  let infoStr = localStorage.getItem('signUpInfo')
  return JSON.parse(infoStr) ?? [];
}

function saveInfo() {
  localStorage.setItem('signUpInfo', JSON.stringify(signUpInfo))
}

function newSignUp(Username, Password, cPassword) {
  alert("Sign up Complete")
  return {
    Username: Username,
    Password: Password, 
    cPassword: cPassword
  };
}

function findbyUser(Username) {
  for (let i = 0; i < signUpInfo.length; i++) {
    if (signUpInfo[i].Username === Username) {
      return 1;
    }
  }
  return -1;
}