const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const age = document.getElementById("age");
const email = document.getElementById("email");
const usname = document.getElementById("usname");
const pass = document.getElementById("pass");
const conpass = document.getElementById("conpass");
const Mob_no = document.getElementById("Mob_no");

function formValidation() {
  
  if (fname.value.length < 2 || fname.value.length > 20) {
    alert("First Name length should be more than 2 and less than 21");
    fname.focus();
    return false;
  }

  if (lname.value.length < 2 || lname.value.length > 20) {
    alert("Last Name length should be more than 2 and less than 21");
    lname.focus();
    return false;
  }

  if (!age.value.match([0-9])){
    alert("Enter correct age");
    fname.focus();
    return false;
  }

  if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    alert("Please enter a valid email!");
    email.focus();
    return false;
  }
  
  if (!pass.value.match(/^.{5,15}$/)) {
    alert("Password length must be between 5-15 characters!");
    pass.focus();
    return false;
  }

  if (!Mob_no.value.match(/^[1-9][0-9]{9}$/)) {
    alert("Phone number must be 10 characters long number and first digit can't be 0!");
    Mob_no.focus();
    return false;
  }

//   if (gender.gender.value === "") {
//     alert("Please select your gender!");
//     return false;
//   }

//   if (language.value === "") {
//     alert("Please select your language!")
//     return false;
//   }

//   if (!zipcode.value.match(/^[0-9]{6}$/)) {
//     alert("Zip code must be 6 characters long number!");
//     zipcode.focus();
//     return false;
  }
  return true;
