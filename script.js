const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
  });
});

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

  formSteps[formStepsNum].classList.add("form-step-active");
}
function jumpForm(stepNumber)
{
  console.log(stepNumber)
  formStepsNum=stepNumber-1
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");

}
function validateEmail(){
  let email=document.getElementById("email").value;
  let errormessage=document.getElementById("emailError");
  let emailRequired=document.getElementById("emailRequired");
  let testREgex='[a-z0-9]+@[a-z]+\.[a-z]{2,3}';
  if(email.match(" ")||email.match(" "))
  {
    errormessage.innerText="Enter Proper Mail ID"
    emailRequired.style.color="red";
    return false;
  }
  else if(!(email.match(testREgex)))
  {
    errormessage.innerText="Enter valid Mail ID"
    emailRequired.style.color="red";
    return false;
  }
  errormessage.innerText=""
  emailRequired.style.color="black";
  return true;
}
function validatePassword(){
  let password=document.getElementById("password").value;
  let errormessage=document.getElementById("passwordError");
  let passwordRequired=document.getElementById("passwordRequired");
  let testregex = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$'
  if(!(password.match(testregex)))
  {
    errormessage.innerText="Enter a valid Password"
    passwordRequired.style.color="red";
    return false;
  }
}