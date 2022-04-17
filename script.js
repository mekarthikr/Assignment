const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");
const mainContainer = document.querySelectorAll(".container")
const mainancor=mainContainer[0].querySelectorAll('a');
let formStepsNum = 0;
console.log(formStepsNum)
console.log(mainancor)
nextBtns.forEach((btn) => {
  console.log(formStepsNum)
  btn.addEventListener("click", () => {
    console.log(formStepsNum+"click")
    console.log(formStepsNum)
    // formStepsNum++;
    // updateFormSteps();

  });
});

// console.log(mainancor)

prevBtns.forEach((btn) => {
  // console.log(formStepsNum)
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
    anc.classList.contains("btn-active") && 
      anc.classList.remove("btn-active");
  })
  // console.log(formStepsNum)
  formSteps[formStepsNum].classList.add("form-step-active");
  let inancor=formSteps[formStepsNum].querySelectorAll('a');
  console.log(mainancor[formStepsNum].classList)
  mainancor[formStepsNum].classList.remove("disable-ancor")
  mainancor[formStepsNum].classList.add("btn-active")
  inancor.forEach((a)=>{
    a.classList.contains("disable-ancor")&&a.classList.remove("disable-ancor")
  })
}
function jumpForm(stepNumber)
{
  console.log(stepNumber)
  formStepsNum=stepNumber-1
  // formSteps.forEach((formStep) => {
  //   formStep.classList.contains("form-step-active") &&
  //     formStep.classList.remove("form-step-active");
  // });

  // formSteps[formStepsNum].classList.add("form-step-active");
  updateFormSteps()

}
function validateEmail(){
  let emailid=document.getElementById("email")
  let email=document.getElementById("email").value;
  let errormessage=document.getElementById("emailError");
  let emailRequired=document.getElementById("emailRequired");
  let testREgex='[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
  if(email.match(" ")||email.match(" "))
  {
    errormessage.innerText="Enter Proper Mail ID"
    emailRequired.style.color="red";
    emailid.style.border="1px solid red"
    return false;
  }
  else if(!(email.match(testREgex)))
  {
    errormessage.innerText="Enter valid Mail ID"
    emailRequired.style.color="red";
    emailid.style.border="1px solid red"
    return false;
  }
  errormessage.innerText=""
  emailRequired.style.color="black";
  emailid.style.border="1px solid black"
  return true;
}
function validatePassword(){
  let passwordid=document.getElementById("password")
  let password=document.getElementById("password").value;
  let errormessage=document.getElementById("passwordError");
  let passwordRequired=document.getElementById("passwordRequired");
  let testregex = /^[A-Za-z]\w{7,14}$/
  // /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/
  console.log(password)
  if(!(password.match(testregex)))
  {
    errormessage.innerText="Enter a valid Password"
    passwordRequired.style.color="red";
    passwordid.style.border="red 1px solid"
    return false;
  }
  errormessage.innerText=""
  passwordRequired.style.color="black";
  passwordid.style.border="black 1px solid"
  return true;
}
function confirmpassword(){
  let password=document.getElementById("password").value;
  let confirmPassword=document.getElementById("confirmPassword").value;
  if(password!=confirmPassword)
  {
    console.log("enter correct password")
  }
}
function validateFirstName(){
  let firstName=document.getElementById("firstName").value
  let firstNameId=document.getElementById("firstName")
  let errormessage=document.getElementById("firstNameError")
  let nameRequired=document.getElementById("firstNameRequired")
  let testregex = /^[A-Za-z]\w{7,14}$/
  if(!(firstName.match(testregex)))
  {
    errormessage.innerText="Enter a valid Name"
    nameRequired.style.color="red";
    firstNameId.style.border="red 1px solid"
    return false;
  }
  errormessage.innerText=""
  nameRequired.style.color="black";
  firstNameId.style.border="black 1px solid"
  return false;
}
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