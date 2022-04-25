const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const mainContainer = document.querySelectorAll(".container")
const mainancor = mainContainer[0].querySelectorAll('a');
const stepbar = document.querySelectorAll(".bar")
const stepbardiv = document.querySelectorAll(".bar-step")
const stateArray = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttarakhand", "Uttar Pradesh", "West Bengal", "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Lakshadweep", "Puducherry"]
let state = document.getElementById("state")
for (var i = 0; i < 35; i++) {
  var option = document.createElement('option')
  option.value = stateArray[i]
  option.innerHTML = stateArray[i]
  state.appendChild(option)
}
const practiceArray = ["LAMP", "Java", "BFS", "Dotnet", "Oracle", "EBA"]
let practice = document.getElementById("practice")
for (var i = 0; i < 6; i++) {
  var option = document.createElement('option')
  option.value = practiceArray[i]
  option.innerHTML = practiceArray[i]
  practice.appendChild(option)
}

const tooltip = document.getElementById("requiredImg").title = "Password should be \nlength greater than 8\nShould contain atleast one\nalphabets upper and lower case \nnumber \nspecial characters[@,#,$,%,&,!]";

let formStepsNum = 0;

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
  });
});


function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  mainancor.forEach((anc) => {
    anc.classList.contains("color-change") &&
      anc.classList.remove("color-change");
  })
  stepbardiv.forEach((step) => {
    step.classList.contains("bar-active") &&
      step.classList.remove("bar-active")

  })
  formSteps[formStepsNum].classList.add("form-step-active");
  let inancor = formSteps[formStepsNum].querySelectorAll('a');
  mainancor[formStepsNum].classList.remove("disable-ancor")
  mainancor[formStepsNum].classList.add("color-change")
  stepbardiv[formStepsNum].classList.remove("btn-inactive")
  stepbardiv[formStepsNum].classList.add("bar-active")
  inancor.forEach((a) => {
    a.classList.contains("disable-ancor") && a.classList.remove("disable-ancor")
  })
}
function jumpForm(stepNumber) {
  // if(formStepsNum==0)
  // {
  //   if(clickBasicForm()==true)
  //   {
  //     formStepsNum=stepNumber-1
  //     updateFormSteps()
  //   }
  //   else{
  //     // alert("fill the form")
  //     return false;
  //   }
  // }
  // if(formStepsNum==1)
  // {
  //   if(clickOtherForm()==true)
  //   {
  //     formStepsNum=stepNumber-1
  //     updateFormSteps()
  //   }
  //   else{
  //     // alert("fill the form")
  //     return false
  //   }
  // }
  // if(formStepsNum==3)
  // {
  //   if(clickEducationForm()==true)
  //   {
  formStepsNum = stepNumber - 1
  updateFormSteps()
}
// }
// else{
//   // alert("fill the form")
//   return false
// }
//   }
//   if(formStepsNum==4)
//   {
//     if(clickTeamForm()==true)
//     {
//       formStepsNum=stepNumber-1
//       updateFormSteps()
//     }
//     else{
//       // alert("fill the form")
//       return false;
//     }
//   }
//   else
//   {
//     formStepsNum=stepNumber-1
//     updateFormSteps()
//   }
// }
function removeElement(ev) {
  var button = ev.target;
  var field = button.previousSibling;
  let check=field.previousSibling;
  var div = button.parentElement;
  div.removeChild(button);
  div.removeChild(field);
  div.removeChild(check);
}

function addExperienceFields(){
  var check_value = new Array()
check_value[0] = "SSLC"
check_value[1] = "HSC"
check_value[2] = "BE"
check_value[3] = "ME"
  let checkbox=document.createElement('select');
  checkbox.setAttribute("class", "dis-block");
 
  // selectOption.value="hand"
  // selectOption.text="hand"
  // checkbox.add(selectOption)
  // selectOption.value="handd"
  // selectOption.text="hadnd"
  // checkbox.add(selectOption)
  // for (var i = min; i<=max; i++){
    // var opt = document.createElement('option');
    check_value.forEach((index,value)=>{
      let selectOption=document.createElement('option');
      selectOption.value = check_value[value];
      selectOption.innerHTML = check_value[value];
      checkbox.appendChild(selectOption);
    })

// }
    var input = document.createElement('input');
    input.type = "month";
    input.setAttribute("class", "form-input dis-block");
    var reqs = document.getElementById("reqs");
    var remove = document.createElement('ancor');
    remove.onclick = function(e) {
      removeElement(e)
    };
    remove.setAttribute("type", "ancor");
    remove.setAttribute("class","btn")
    remove.innerHTML = "Remove";
    // append elements
    reqs.appendChild(checkbox);
    reqs.appendChild(input);
    reqs.appendChild(remove);
  
  }


function clickBasicForm() {
  if (validateEmail() == false) {
    emailError("Email ID Required")
    // return false;  
  }
  if (validatePassword() == false) {
    passwordError("Password is Required")
    // return false;  
  }
  if (validatePasswordConfirm() == false) {
    passwordConfirmationError("Password Confirmation is Required");
    // return false;  
  }
  if (validateFirstName() == false) {
    firstNameError("First Name is Required")
    // return false;  
  }
  else {
    formStepsNum++;
    updateFormSteps();
    return true;
  }
}
function clickOtherForm() {
  console.log("Other Click")
  if (validateDateOfBirth() == false) {
    dateError("Date of Birth is Required")
    // return false;  
  }
  if (validateGender() == false) {
    genderError("Gender is Required")
    // return false;  
  }
  if (validateState() == false) {
    stateError("State is Required")
    // return false;  
  }
  if (validateMobileNumber() == false) {
    mobileNumberError("Mobile Number is Required")
    // return false;  
  }
  else {
    formStepsNum++;
    updateFormSteps();
    return true;
  }
}
function clickWorkForm() {
  formStepsNum++;
  updateFormSteps();
}
function clickEducationForm() {
  if (validateGraduation() == false) {
    graduationError("Graduation is Required")
    // return false; 
  }
  if (validateYearOfPassing() == false) {
    yearOfPassingError("Year of Passing is Required")
    // return false; 
  }
  else {
    formStepsNum++;
    updateFormSteps();
    return true
  }
}
function clickTeamForm() {
  if (validatePractice() == false) {
    practiceError("Practice is Required")
    return false;
  }
  if (validateTandC() == false) {
    alert("Click on Terms and Conditions")
  }
  return true
}
// VALIDATION
class Validation {
  alphaRegex = /^[a-zA-Z ]+$/;
  numberRegex = /^[6789]{1}[\d]{9}$/;
  emailUserRegex = /^([a-z]+[\.-\d]*)@$/;
  emailDomainRegex = /^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/;
  dateRegex = /^(0)[1-9]|([1-2][0-9]|(3)[0-1])(\/)(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/;
  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[#,@,$,%,!]).{8,}$/
  yearOfPassing = /^(((0)[1-9])|((1)[0-2]))(\/)\d{4}$/
  user = {
    email: "",
    firstName: "",
    password: "",
    confirmPassword: "",
    DOB: ""
  }
}


let validate = new Validation();
function validateEmail() {
  let formEmail = document.getElementById("email").value;
  validate.user.email = formEmail;
  if (formEmail == "") {
    emailError("Email ID Required")
    return false;
  }
  else if (validate.emailDomainRegex.test(formEmail.substring((0, formEmail.indexOf("@")) + 1)) == false) {
    emailError("Enter a valid mail ID")
    return false;
  }
  else if (validate.emailDomainRegex.test(formEmail.substring((formEmail.indexOf("@")) + 1, formEmail.length)) == false) {
    emailError("Enter a valid Domain")
    return false;
  }
  else {
    emailCorrect();
    return true;
  }
}

function validatePassword() {
  let formPassword = document.getElementById("password").value;
  validate.user.password = formPassword;
  if (formPassword == "") {
    passwordError("Password is Required");
    return false;
  }
  else if (formPassword.length < 8) {
    passwordError("Password Should have more than 8 characters")
  }
  else if (validate.passwordRegex.test(formPassword) == false) {
    passwordError("Password should contain alphabets upper and lower case,number and special characters[@,#,$,%,&,!]");
    return false;
  }
  else {
    passwordCorrect();
    return true;
  }
}

function validatePasswordConfirm() {
  let formPassword = document.getElementById("password").value;
  let formConfirmPassword = document.getElementById("confirmPassword").value;
  validate.user.confirmPassword = formConfirmPassword;
  if (formPassword == "") {
    passwordError("Password is Required")
    return false;
  }
  else if (formConfirmPassword == "") {
    passwordConfirmationError("Password Confirmation is Required");
    return false;
  }
  else if (formPassword != formConfirmPassword) {
    passwordConfirmationError("Password doesnt matches");
    return false;
  }
  else {
    passwordConfirmationCorrect();
    return true;
  }
}

function validateFirstName() {
  let formFirstName = document.getElementById("firstName").value;
  validate.user.firstName = formFirstName;
  if (formFirstName == "") {
    firstNameError("First Name is Required")
    return false;
  }
  else if (validate.alphaRegex.test(formFirstName) == false) {
    firstNameError("Enter a valid Name")
    return false;
  }
  else if (3 > formFirstName.length || formFirstName.length > 15) {
    firstNameError("Name should be between 3 - 15")
    return false;
  }
  else {
    firstNameCorrect();
    return true;
  }
}

function validateLastName() {
  let formFirstName = document.getElementById("lastName").value;
  validate.user.firstName = formFirstName;
  if (validate.alphaRegex.test(formFirstName) == false) {
    lastNameError("Enter a valid Name")
    return false;
  }
  else if (3 > formFirstName.length || formFirstName.length > 15) {
    lastNameError("Name should be between 3 - 15")
    return false;
  }
  else {
    lastNameCorrect();
    return true;
  }
}

// function validateDateOfBirth()
// {
//   let formDOB=document.getElementById("DOB").value;
//   validate.user.DOB=formDOB;
//   let current = new Date();
//   let DOB=new Date(formDOB);
//   console.log(DOB);
//   let today = new Date();
// const yyyy = today.getFullYear();
// let mm = today.getMonth() + 1; // Months start at 0!
// let dd = today.getDate();

// if (dd < 10) dd = '0' + dd;
// if (mm < 10) mm = '0' + mm;
// let currentDate=dd + '/' + mm + '/' + yyyy;
// console.log(currentDate);
// console.log(DOB);
//   let days=Math.round((current.getTime()-DOB.getTime())/(1000*60*60*24));
//   console.log(days);
//   let age=days/365;
//   console.log(age);
// }
function validateDateOfBirth() {
  // let date=document.getElementById("DOB").value;
  // let dateArray=date.split("/")
  // const today = new Date();
  // const yyyy = today.getFullYear();
  // let mm = today.getMonth() + 1;
  // let dd = today.getDate();
  // if (dd < 10) dd = '0' + dd;
  // if (mm < 10) mm = '0' + mm;
  // let todayDate=dd+"/"+mm+"/"+yyyy
  // currentDate=todayDate.split("/")
  // age=currentDate[2]-dateArray[2]
  const dateIN = document.getElementById("DOB").value;
  // let dob = document.getElementById('dob').value;
  let dateFormat = new Date(dateIN);
  let now = new Date();
  let dateDiff = now.getFullYear() - dateFormat.getFullYear();
  console.log(dateDiff);
  if (dateIN == "") {
    dateError("Date is Required")
    return false
  }
  else if (!(dateDiff >= 18 && dateDiff <= 60)) {
    // document.getElementById('dobError').textContent = "";
    // return true;
    dateError("age should be between 18-60")
  }
  // else {
  //   // document.getElementById('dobError').textContent = "Please select the correct dob";
  //   // return false;


  else {
    dateCorrect()
    return true
  }
}
function validateGender() {
  if (document.getElementById("Male").checked == false && document.getElementById("Female").checked == false && document.getElementById("Others").checked == false) {
    genderError("Select a option");
    return false;
  }
  else {
    genderCorrect();
    return true;
  }
}

function validateState() {
  let formState = document.getElementById("state")
  if (formState.options[formState.selectedIndex].value == "Choose State") {
    stateError("Select a State");
    return false;
  }
  else {
    stateCorrect();
    return true;
  }
}

function validateMobileNumber() {
  let formMobileNumber = document.getElementById("mobilenumber").value;
  if (formMobileNumber == "") {
    mobileNumberError("Mobile Number Required")
    return false;
  }
  else if (validate.numberRegex.test(formMobileNumber) == false) {
    mobileNumberError("Mobile Number start with 6/7/8/9 and should contain 10 digits")
    return false;
  }
  else {
    mobileNumberCorrect();
    return true;
  }
}
function validateGraduation() {
  let formGraduation = document.getElementById("graduation")
  if (formGraduation.options[formGraduation.selectedIndex].value == "Choose a graduation") {
    graduationError("Select a Graduation");
    return false;
  }
  else {
    graduationCorrect();
    return true;
  }
}
function validateYearOfPassing() {
  let formPassingOut = document.getElementById("passingout").value
  if (formPassingOut == "") {
    yearOfPassingError("Year of passing is Required")
    return false;
  }
  // if(validate.yearOfPassing.test(formPassingOut)==false)
  // {
  //   yearOfPassingError("Enter the month and year in valid format")
  //   return false
  // }
  else {
    yearOfPassingCorrect();
    return true;
  }
}
function validatePractice() {
  let formPractice = document.getElementById("practice")
  if (formPractice.options[formPractice.selectedIndex].value == "Choose practice") {
    practiceError("Select a Practice");
    return false;
  }
  else {
    practiceCorrect();
    return true;
  }

}
function emailError(errorMessage) {
  let emailid = document.getElementById("email")
  let errormessage = document.getElementById("emailError");
  let emailRequired = document.getElementById("emailRequired");
  errormessage.innerText = errorMessage
  emailRequired.style.color = "red";
  emailid.style.border = "1px solid red"
  return false;
}
function emailCorrect() {
  let errormessage = document.getElementById("emailError");
  let emailRequired = document.getElementById("emailRequired");
  let emailid = document.getElementById("email")
  errormessage.innerText = ""
  emailRequired.style.color = "black";
  emailid.style.border = "1px solid black"
  return true;
}
function passwordError(errorMessage) {
  let passwordId = document.getElementById("password")
  let passwordMessage = document.getElementById("passwordError")
  let passwordRequired = document.getElementById("passwordRequired")
  passwordMessage.innerText = errorMessage
  passwordRequired.style.color = "red";
  passwordId.style.border = "1px solid red"
  return false;
}
function passwordCorrect() {
  let passwordId = document.getElementById("password")
  let passwordMessage = document.getElementById("passwordError")
  let passwordRequired = document.getElementById("passwordRequired")
  passwordMessage.innerText = ""
  passwordRequired.style.color = "black";
  passwordId.style.border = "1px solid black"
  return true;
}
function passwordConfirmationError(errorMessage) {
  let confirmPasswordId = document.getElementById("confirmPassword")
  let passwordConfirmationMessage = document.getElementById("passwordConfirmError")
  let passwordConfirmationRequired = document.getElementById("passwordConfirmRequired")
  passwordConfirmationMessage.innerText = errorMessage
  passwordConfirmationRequired.style.color = "red";
  confirmPasswordId.style.border = "1px solid red"
  return false;
}
function passwordConfirmationCorrect() {
  let confirmPasswordId = document.getElementById("confirmPassword")
  let passwordConfirmationMessage = document.getElementById("passwordConfirmError")
  let passwordConfirmationRequired = document.getElementById("passwordConfirmRequired")
  passwordConfirmationMessage.innerText = ""
  passwordConfirmationRequired.style.color = "black";
  confirmPasswordId.style.border = "1px solid black"
  return true;
}
function firstNameError(errorMessage) {
  let firstNameId = document.getElementById("firstName")
  let firstNameMessage = document.getElementById("firstNameError")
  let firstNameRequired = document.getElementById("firstNameRequired")
  firstNameMessage.innerText = errorMessage
  firstNameRequired.style.color = "red";
  firstNameId.style.border = "1px solid red"
  return false;
}
function firstNameCorrect() {
  let firstNameId = document.getElementById("firstName")
  let firstNameMessage = document.getElementById("firstNameError")
  let firstNameRequired = document.getElementById("firstNameRequired")
  firstNameMessage.innerText = ""
  firstNameRequired.style.color = "black";
  firstNameId.style.border = "1px solid black"
  return true;
}
function lastNameError(errorMessage) {
  let lastNameId = document.getElementById("lastName")
  let lastNameMessage = document.getElementById("lastNameError")
  lastNameMessage.innerText = errorMessage
  lastNameId.style.border = "1px solid red"
  return false;
}
function lastNameCorrect() {
  let lastNameId = document.getElementById("lastName")
  let lastNameMessage = document.getElementById("lastNameError")
  lastNameMessage.innerText = ""
  lastNameId.style.border = "1px solid black"
  return true;
}
function dateError(errorMessage) {
  let DOBId = document.getElementById("DOB")
  let DOBMessage = document.getElementById("DOBError")
  let DOBRequired = document.getElementById("DOBRequired")
  DOBMessage.innerText = errorMessage
  DOBRequired.style.color = "red";
  DOBId.style.border = "1px solid red"
  return false;
}
function dateCorrect() {
  let DOBId = document.getElementById("DOB")
  let DOBMessage = document.getElementById("DOBError")
  let DOBRequired = document.getElementById("DOBRequired")
  DOBMessage.innerText = ""
  DOBRequired.style.color = "black";
  DOBId.style.border = "1px solid black"
  return false;
}
function genderError(errorMessage) {
  let genderMessage = document.getElementById("genderError")
  let genderRequired = document.getElementById("genderRequired")
  genderMessage.innerText = errorMessage
  genderRequired.style.color = "red";
  return false;
}
function genderCorrect() {
  let genderMessage = document.getElementById("genderError")
  let genderRequired = document.getElementById("genderRequired")
  genderMessage.innerText = ""
  genderRequired.style.color = "black";
  return true;
}
function stateError(errorMessage) {
  let stateMessage = document.getElementById("stateError")
  let stateRequired = document.getElementById("stateRequired")
  stateMessage.innerText = errorMessage
  stateRequired.style.color = "red";
  return false;
}
function stateCorrect() {
  let stateMessage = document.getElementById("stateError")
  let stateRequired = document.getElementById("stateRequired")
  stateMessage.innerText = ""
  stateRequired.style.color = "black";
  return true;
}
function mobileNumberError(errorMessage) {
  let mobileNumberId = document.getElementById("mobilenumber")
  let mobileNumberMessage = document.getElementById("mobileNumberError")
  let mobileNumberRequired = document.getElementById("mobileNumberRequired")
  mobileNumberMessage.innerText = errorMessage
  mobileNumberRequired.style.color = "red";
  mobileNumberId.style.border = "1px solid red"
  return false;
}
function mobileNumberCorrect() {
  let mobileNumberId = document.getElementById("mobilenumber")
  let mobileNumberMessage = document.getElementById("mobileNumberError")
  let mobileNumberRequired = document.getElementById("mobileNumberRequired")
  mobileNumberMessage.innerText = ""
  mobileNumberRequired.style.color = "black";
  mobileNumberId.style.border = "1px solid black"
  return false;
}
function graduationError(errorMessage) {
  let graduationMessage = document.getElementById("graduationError")
  let graduationRequired = document.getElementById("graduationRequired")
  graduationMessage.innerText = errorMessage
  graduationRequired.style.color = "red";
  return false;
}
function graduationCorrect() {
  let graduationMessage = document.getElementById("graduationError")
  let graduationRequired = document.getElementById("graduationRequired")
  graduationMessage.innerText = ""
  graduationRequired.style.color = "black";
  return true;
}
function practiceError(errorMessage) {
  let practiceMessage = document.getElementById("practiceError")
  let practiceRequired = document.getElementById("practiceRequired")
  practiceMessage.innerText = errorMessage
  practiceRequired.style.color = "red";
  return false;
}
function practiceCorrect() {
  let practiceMessage = document.getElementById("practiceError")
  let practiceRequired = document.getElementById("practiceRequired")
  practiceMessage.innerText = ""
  practiceRequired.style.color = "black";
  return true;
}
function yearOfPassingError(errorMessage) {
  let passingOutId = document.getElementById("passingout")
  let passingOutMessage = document.getElementById("passingoutError")
  let passingOutRequired = document.getElementById("passingoutRequired")
  passingOutMessage.innerText = errorMessage
  passingOutRequired.style.color = "red";
  passingOutId.style.border = "1px solid red"
  return false;
}
function yearOfPassingCorrect() {
  let passingOutId = document.getElementById("passingout")
  let passingOutMessage = document.getElementById("passingoutError")
  let passingOutRequired = document.getElementById("passingoutRequired")
  passingOutMessage.innerText = ""
  passingOutRequired.style.color = "black";
  passingOutId.style.border = "1px solid black"
  return true;
}
function validateTandC() {
  let checkTandC = document.getElementById("terms");
  let card = document.getElementById("main-card");
  let success = document.getElementById("success");
  if (checkTandC.checked != true) {
    return false;
  }
  else {
    console.log("Thankyou for registering")
    card.style.display = "none";
    success.innerText = " Thank you for Registering ";
    success.style.display = "block";
    success.style.color = "white";
  }
}