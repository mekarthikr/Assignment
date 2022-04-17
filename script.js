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
// function validateEmail(){
//   let emailid=document.getElementById("email")
//   let email=document.getElementById("email").value;
//   let errormessage=document.getElementById("emailError");
//   let emailRequired=document.getElementById("emailRequired");
//   let testREgex='[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
//   if(email.match(" ")||email.match(" "))
//   {
//     errormessage.innerText="Enter Proper Mail ID"
//     emailRequired.style.color="red";
//     emailid.style.border="1px solid red"
//     return false;
//   }
//   else if(!(email.match(testREgex)))
//   {
//     errormessage.innerText="Enter valid Mail ID"
//     emailRequired.style.color="red";
//     emailid.style.border="1px solid red"
//     return false;
//   }
//   errormessage.innerText=""
//   emailRequired.style.color="black";
//   emailid.style.border="1px solid black"
//   return true;
// }
// function validatePassword(){
//   let passwordid=document.getElementById("password")
//   let password=document.getElementById("password").value;
//   let errormessage=document.getElementById("passwordError");
//   let passwordRequired=document.getElementById("passwordRequired");
//   let testregex = /^[A-Za-z]\w{7,14}$/
//   // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/
//   console.log(password)
//   if(!(password.match(testregex)))
//   {
//     errormessage.innerText="Enter a valid Password"
//     passwordRequired.style.color="red";
//     passwordid.style.border="red 1px solid"
//     return false;
//   }
//   errormessage.innerText=""
//   passwordRequired.style.color="black";
//   passwordid.style.border="black 1px solid"
//   return true;
// }
// function confirmpassword(){
//   let password=document.getElementById("password").value;
//   let confirmPassword=document.getElementById("confirmPassword").value;
//   if(password!=confirmPassword)
//   {
//     console.log("enter correct password")
//   }
// }
// function validateFirstName(){
//   let firstName=document.getElementById("firstName").value
//   let firstNameId=document.getElementById("firstName")
//   let errormessage=document.getElementById("firstNameError")
//   let nameRequired=document.getElementById("firstNameRequired")
//   let testregex = /^[A-Za-z]\w{7,14}$/
//   if(!(firstName.match(testregex)))
//   {
//     errormessage.innerText="Enter a valid Name"
//     nameRequired.style.color="red";
//     firstNameId.style.border="red 1px solid"
//     return false;
//   }
//   errormessage.innerText=""
//   nameRequired.style.color="black";
//   firstNameId.style.border="black 1px solid"
//   return false;
// }
function clickBasicForm(){
  // let firstName=document.getElementById("firstName").value
  // let password=document.getElementById("password").value;
  // let confirmPassword=document.getElementById("confirmPassword").value;
  // let email=document.getElementById("email").value;
  // if((email&&password&&confirmPassword&&firstName)!="")
  // {
    // formStepsNum++;
    formStepsNum++;
    updateFormSteps();
  //   let inancor=formSteps[formStepsNum].querySelectorAll('a');
  //   inancor.forEach((a)=>{
  //     a.classList.contains("disable-ancor")&&a.classList.remove("disable-ancor")
  //   })
  // }
  // else
  // {
  //  let event=document.getElementById 
  //   // console.log("fill")
  //   alert("fill the form")
  // }
  
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
    password:""
  }
}
// function validateFirstName(){
//   let firstName=document.getElementById("firstName").value
//   console.log(firstName)
//   // if(this.user.firstName == ""){
//   //     this.user.firstNameError = "Firstname required";
//   //     this.displayBasicErrorMessage(3,this.user.firstNameError);
//   // }
//   // else if(this.alphaRegex.test(this.user.firstName) == false){
//   //     this.user.firstNameError = "Should contain only alphabets";
//   //     this.displayBasicErrorMessage(3,this.user.firstNameError);
//   // }
//   // else if(this.user.firstName.length < 3)
//   // {
//   //     this.user.firstNameError = "Should contain atleast 3 letters";
//   //     this.displayBasicErrorMessage(3,this.user.firstNameError);
//   // }
//   // else if(this.user.firstName.length > 15)
//   // {
//   //     this.user.firstnameError = "Should not exceed 15 letters";
//   //     this.displayBasicErrorMessage(3,this.user.firstNameError);
//   // }
//   // else 
//   // {
//   //     this.removeBasicErrorMessage(3);
//   //     this.user.firstNameError = "";
//   // }
// }
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
  let formPassword=document.getElementById("password");
  validate.user.password=formPassword;
  if(formPassword=="")
  {
    passwordError("Password is Required");
  }
  else{
    passwordCorrect();
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

