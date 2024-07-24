var elSiteForm = document.querySelector(".js-form");
var elUserNameInput = elSiteForm.querySelector(".js-user-name");
var elUserLastnameInput = elSiteForm.querySelector(".js-user-last-name");
var elUserageInput = elSiteForm.querySelector(".js-user-age");
var elUserPassword = elSiteForm.querySelector(".js-user-password");
var elSiteFormInfo = elSiteForm.querySelector(".js-info");
var elLastNameInfo = elSiteForm.querySelector(".js-info-succes");
var elAgeInfo = elSiteForm.querySelector(".js-age-info");
var elPasswordInfo = elSiteForm.querySelector(".js-password-info");
var elSiteFormBtn = elSiteForm.querySelector(".js-btn");

elSiteForm.addEventListener("submit", function(evt){
  evt.preventDefault();


  function formValidation(userinfo){

    if(userinfo == "" || userinfo.length == 1) {
      elSiteFormInfo.classList.remove("validation-succes");
      elSiteFormInfo.classList.add("valadation");
      return;
    }
    if(!isNaN(userinfo)){
      elSiteFormInfo.classList.remove("validation-succes");
      elSiteFormInfo.classList.add("valadation");
      return;
    }

    if(userinfo.length == 40){
      elSiteFormInfo.classList.remove("validation-succes");
      elSiteFormInfo.classList.add("valadation");
      return;
    }

    else {
      elSiteFormInfo.classList.remove("valadation");
      elSiteFormInfo.classList.add("validation-succes");
    }

  }
  formValidation(elUserNameInput.value);



  function formValidationLastName(lastnameinfo){

    if(lastnameinfo == "" || lastnameinfo.length == 1) {
      elLastNameInfo.classList.remove("validation-succes");
      elLastNameInfo.classList.add("last-valadation");
      return;
    }
    if(!isNaN(lastnameinfo)){
      elLastNameInfo.classList.remove("validation-succes");
      elLastNameInfo.classList.add("last-valadation");
      return;
    }

    if(lastnameinfo.length == 40){
      elLastNameInfo.classList.remove("validation-succes");
      elLastNameInfo.classList.add("last-valadation");
      return;
    }

    else {
      elLastNameInfo.classList.remove("last-valadation");
      elLastNameInfo.classList.add("validation-succes");
    }
  }
  formValidationLastName(elUserLastnameInput.value);

  if(elUserageInput.value < 18){
    elAgeInfo.classList.remove("age-succes");
    elAgeInfo.classList.add("age-invalid");
  }
  else if(elUserageInput.value > 150){
    elAgeInfo.classList.remove("age-succes");
    elAgeInfo.classList.add("age-invalid");
  }
  else {
    elAgeInfo.classList.remove("age-invalid");
    elAgeInfo.classList.add("age-succes");
  }

  if(elUserPassword.value.length < 8){
    elPasswordInfo.classList.remove("age-succes");
    elPasswordInfo.classList.add("age-invalid");
  }
  else if(elUserPassword.value.length > 15){
    elPasswordInfo.classList.remove("age-succes");
    elPasswordInfo.classList.add("age-invalid");
  }
  else {
    elPasswordInfo.classList.remove("age-invalid");
    elPasswordInfo.classList.add("age-succes");
  }

  console.log("topshirildi");
})