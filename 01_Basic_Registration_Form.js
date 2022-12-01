function FirstName() {
  const letterspattern = /^[a-zA-Z]+$/;
  const FirstNameInput = document.getElementById("Firstname").value;
  !letterspattern.test(FirstNameInput) && alert("Please proper Frist Name");
}

function lasttName() {
  const letterspattern = /^[a-zA-Z]+$/;
  const FirstNameInput = document.getElementById("Lastname").value;
  !letterspattern.test(FirstNameInput) && alert("Please proper Last Name");
}

function email() {
  const Emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const EmailInput = document.getElementById("Email").value;
  !Emailpattern.test(EmailInput) && alert("Please proper Email");
}

function password() {
  const Passwordpattern = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
  const passwordInput = document.getElementById("Password").value;
  !Passwordpattern.test(passwordInput) && alert("Please proper Password");
}

function cpassword() {
  const Passwordpattern = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
  const passwordInput = document.getElementById("Password").value;
  const C_passwordInput = document.getElementById("C_Password").value;
  !Passwordpattern.test(C_passwordInput) && alert("Please proper Password");
  passwordInput !== C_passwordInput && alert("Password Mismatch");
}

function Mobile() {
  const MobileNumberpattern = /^\d{10}$/;
  const MobileNumberInput = document.getElementById("MobileNumber").value;
  !MobileNumberpattern.test(MobileNumberInput) && alert("Please proper number");
}

function dates() {
  const datepattern = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
  const DOB_input = document.getElementById("DOB").value;
  !datepattern.test(DOB_input) && alert("Please Choose date");
}

function zipcode() {
  const Zipcodepattern = /^\d{6}$/;
  const ZipCodeInput = document.getElementById("ZipCode").value;
  !Zipcodepattern.test(ZipCodeInput) && alert("please Enter Zipcode");
}
function Addres() {
  const AddressInput = document.getElementById("Address").value;
  !AddressInput.length < 1 && alert("Please Enter Valid Address");
}
function valid() {
  const CheckboxInput = document.getElementById("checkbox").checked;
  CheckboxInput === false && alert("Please Accept Terms");
}

// function valid() {
//   const letterspattern = /^[a-zA-Z]+$/;
//   const Emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   const Passwordpattern = /^[a-zA-Z0-9!@#$%^&*]{4,8}$/;
//   const MobileNumberpattern = /^\d{10}$/;
//   const Zipcodepattern = /^\d{6}$/;
//   const datepattern = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

//   const FirstNameInput = document.getElementById("Firstname").value;
//   const LastNameInput = document.getElementById("Lastname").value;
//   const EmailInput = document.getElementById("Email").value;
//   const passwordInput = document.getElementById("Password").value;
//   const C_passwordInput = document.getElementById("C_Password").value;
//   const DOB_input = document.getElementById("DOB").value;
//   const MobileNumberInput = document.getElementById("MobileNumber").value;
//   const AddressInput = document.getElementById("Address").value;
//   const ZipCodeInput = document.getElementById("ZipCode").value;
//   const CheckboxInput = document.getElementById("checkbox").checked;

//   !letterspattern.test(FirstNameInput) && alert("Please proper Frist Name");
//   !letterspattern.test(LastNameInput) && alert("Please proper Last Name");
//   !Emailpattern.test(EmailInput) && alert("Please proper Email");
//   !Passwordpattern.test(passwordInput) && alert("Please proper Password");
//   passwordInput !== C_passwordInput && alert("does't match the password");
//   !datepattern.test(DOB_input) && alert("Please Choose date");
//   !MobileNumberpattern.test(MobileNumberInput) && alert("Please proper number");
//   !AddressInput.length < 1 && alert("Please Enter Valid Address");
//   !Zipcodepattern.test(ZipCodeInput) && alert("please Enter Zipcode");
//   CheckboxInput === false && alert("Please Accept Terms");
// }
