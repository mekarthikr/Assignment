const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const mainContainer = document.querySelectorAll(".container")
const mainancor=mainContainer[0].querySelectorAll('a');
const stepbar=document.querySelectorAll(".bar")
const stepbardiv=document.querySelectorAll(".bar-step")
console.log(stepbardiv)
let formStepsNum = 0;
console.log(formStepsNum)
console.log(mainancor)
nextBtns.forEach((btn) => {
  console.log(formStepsNum)
  btn.addEventListener("click", () => {
    console.log(formStepsNum+"click")
    console.log(formStepsNum)

  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
  });
});


function updateFormSteps() {
  console.log(formStepsNum+"inside")
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });
  mainancor.forEach((anc)=>{
    anc.classList.contains("color-change") && 
      anc.classList.remove("color-change");
  })
  stepbardiv.forEach((step)=>{
    step.classList.contains("bar-active") &&
    step.classList.remove("bar-active") 

  })
  console.log(formStepsNum)
  formSteps[formStepsNum].classList.add("form-step-active");
  let inancor=formSteps[formStepsNum].querySelectorAll('a');
  console.log(mainancor[formStepsNum].classList)
  mainancor[formStepsNum].classList.remove("disable-ancor")
  mainancor[formStepsNum].classList.add("color-change")
  stepbardiv[formStepsNum].classList.remove("btn-inactive")
  stepbardiv[formStepsNum].classList.add("bar-active")
  inancor.forEach((a)=>{
    a.classList.contains("disable-ancor")&&a.classList.remove("disable-ancor")
  })
}
function jumpForm(stepNumber)
{
  console.log(stepNumber)
  formStepsNum=stepNumber-1
  updateFormSteps()
}
function clickBasicForm(){
    formStepsNum++;
    updateFormSteps(); 
}
function clickOtherForm(){
  formStepsNum++;
  updateFormSteps();
}
function clickWorkForm(){
  formStepsNum++;
  updateFormSteps();
}
function clickEducationForm(){
  formStepsNum++;
  updateFormSteps();
}
function clickTeamForm(){
  formStepsNum++;
  updateFormSteps();
}



// VALIDATION
class Validation{
  alphaRegex=/^[a-zA-Z ]+$/;
  numberRegex=/^[6789]{1}[\d]{9}$/;
  emailUserRegex=/^([a-z]+[\.-\d]*)@$/;
  emailDomainRegex=/^([a-z-]+)\.([a-z\-]{2,8})(\.[a-z]{2,8})?$/;
  dateRegex=/^(\d{4})\-(0[1-9]|1[0-2])\-(0[1-9]|[12][0-9]|3[01])$/; 
  user={
    email:"",
    firstName:"",
    password:"",
    confirmPassword:""
  }
}


let validate = new Validation();
function validateEmail()
{
  let formEmail=document.getElementById("email").value;
  validate.user.email=formEmail;
  if(formEmail=="")
  {
    emailError("Email ID Required")
  }
  else if(validate.emailDomainRegex.test(formEmail.substring((0,formEmail.indexOf("@"))+1))==false)
  {
    emailError("Enter a valid mail ID")
  }
  else if(validate.emailDomainRegex.test(formEmail.substring((formEmail.indexOf("@"))+1,formEmail.length))==false)
  {
    emailError("Enter a valid Domain")
  }
  else{
    emailCorrect();
  }
}

function validatePassword()
{
  let formPassword=document.getElementById("password").value;
  validate.user.password=formPassword;
  if(formPassword=="")
  {
    passwordError("Password is Required");
  }
  else{
    passwordCorrect();
  }
}

function validatePasswordConfirm()
{
  let formPassword=document.getElementById("password").value;
  let formConfirmPassword=document.getElementById("confirmPassword").value;
  validate.user.confirmPassword=formConfirmPassword;
  if(formPassword=="")
  {
    passwordError("Password is Required")
  }
  else if(formConfirmPassword=="")
  {
    passwordConfirmationError("Password Confirmation is Required");
  }
  else if(formPassword==formConfirmPassword){
    passwordConfirmationError("Password doesnt matches");
  }
  else{
    passwordConfirmationCorrect();
  }
}

function validateFirstName()
{
  let formFirstName=document.getElementById("firstName").value;
  validate.user.firstName=formFirstName;
  if(formFirstName=="")
  {
    firstNameError("First Name is Required")
  }
  else if(validate.alphaRegex.test(formFirstName)==false){
    firstNameError("Enter a valid Name")
  }
  else if(3>formFirstName.length||formFirstName.length>15)
  {
    firstNameError("Name should be between 3 - 15")
  }
  else{
    firstNameCorrect();
  }
}

function emailError(errorMessage)
{
  let emailid=document.getElementById("email")
  let errormessage=document.getElementById("emailError");
  let emailRequired=document.getElementById("emailRequired");
  errormessage.innerText=errorMessage
  emailRequired.style.color="red";
  emailid.style.border="1px solid red"
  return false;
}
function emailCorrect()
{
  let errormessage=document.getElementById("emailError");
  let emailRequired=document.getElementById("emailRequired");
  let emailid=document.getElementById("email")
  errormessage.innerText=""
  emailRequired.style.color="black";
  emailid.style.border="1px solid black"
  return true;
}
function passwordError(errorMessage)
{
  let passwordId=document.getElementById("password")
  let passwordMessage=document.getElementById("passwordError")
  let passwordRequired=document.getElementById("passwordRequired")
  passwordMessage.innerText=errorMessage
  passwordRequired.style.color="red";
  passwordId.style.border="1px solid red"
  return false;
}
function passwordCorrect()
{
  let passwordId=document.getElementById("password")
  let passwordMessage=document.getElementById("passwordError")
  let passwordRequired=document.getElementById("passwordRequired")
  passwordMessage.innerText=""
  passwordRequired.style.color="black";
  passwordId.style.border="1px solid black"
  return true;
}
function passwordConfirmationError(errorMessage)
{
  let confirmPasswordId=document.getElementById("confirmPassword")
  let passwordConfirmationMessage=document.getElementById("passwordConfirmError")
  let passwordConfirmationRequired=document.getElementById("passwordConfirmRequired")
  passwordConfirmationMessage.innerText=errorMessage
  passwordConfirmationRequired.style.color="red";
  confirmPasswordId.style.border="1px solid red"
  return false;
}
function passwordConfirmationCorrect()
{
  let confirmPasswordId=document.getElementById("confirmPassword")
  let passwordConfirmationMessage=document.getElementById("passwordConfirmError")
  let passwordConfirmationRequired=document.getElementById("passwordConfirmRequired")
  passwordConfirmationMessage.innerText=""
  passwordConfirmationRequired.style.color="black";
  confirmPasswordId.style.border="1px solid black"
  return true;
}
function firstNameError(errorMessage)
{
  let firstNameId=document.getElementById("firstName")
  let firstNameMessage=document.getElementById("firstNameError")
  let firstNameRequired=document.getElementById("firstNameRequired")
  firstNameMessage.innerText=errorMessage
  firstNameRequired.style.color="red";
  firstNameId.style.border="1px solid red"
  return false;
}
function firstNameCorrect()
{
  let firstNameId=document.getElementById("firstName")
  let firstNameMessage=document.getElementById("firstNameError")
  let firstNameRequired=document.getElementById("firstNameRequired")
  firstNameMessage.innerText=""
  firstNameRequired.style.color="black";
  firstNameId.style.border="1px solid black"
  return false;
}

