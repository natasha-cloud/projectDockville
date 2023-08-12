// const checkbox = document.querySelector('.my-form input[type="checkbox"]');
// const btns = document.querySelectorAll(".my-form button");

// checkbox.addEventListener("change", function() {
//   const checked = this.checked;
//   for (const btn of btns) {
//     checked ? (btn.disabled = false) : (btn.disabled = true);
//   }
// });

const Validate=(event )=>{
    let error = 0;
    let firstName = document.form.fname
    let lastName = document.form.lname
    let email = document.form.email
    let contact = document.form.contact
    let carmodel = document.form.carmodel
    let tiremake = document.form.tiremake
    let tiresize = document.form.tiresize
   

    //finding errors in empty fields
    let fnameError = document.getElementById("fname-error")
    let lnameError = document.getElementById("lname-error")
    let emailError = document.getElementById("email-error")
    let contactError = document.getElementById("contact-error")
    let carmodelError = document.getElementById("carmodel-error")
    let tiremakeError = document.getElementById("tiremake-error")
    let tiresizeError = document.getElementById("tiresize-error")
    
    


    let firstNameRegex = /^[A-Za-z]+$/;
    let firstNameRegex1 = /^[A-Z]/;
    let firstNameRegex2 = /^[A-Za-z]{2,}$/;
    // this regex is for last name
    let lastNameRegex = /^[A-Za-z]+$/;
    let lastNameRegex1 = /^[A-Z]/;
    let lastNameRegex2 = /^[A-Za-z]{2,}$/;

    // this regex is for contact
    let contactRegex = /^\+256\d{9}$/;

    // this is regex for nin
    let ninRegex = /^.{14}$/




    // validating  fields using if statements
    if (firstName.value ==""){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "Please enter first name";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must only contain letters.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex1)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must start with an uppercase letter.";
        fnameError.style = "color:red; font-family:serif ";
        firstName.focus();
        error++;
    }else if(!firstName.value.match(firstNameRegex2)){
        firstName.style.border = "2px solid red";
        fnameError.textContent = "First name must conain not less than one character";
        fnameError.style = "color:red; font-family:serif "
        firstName.focus();
        error++;
    }
    else{
        firstName.style.border = "2px solid green";
        fnameError.textContent = "";
        lastName.focus();
    }

    if(lastName.value ==""){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Please enter last name";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;

    }else if(!lastName.value.match(lastNameRegex)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must only contain letters.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex1)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must start with an uppercase letter.";
        lnameError.style = "color:red; font-family:serif ";
        lastName.focus();
        error++;
    }else if(!lastName.value.match(lastNameRegex2)){
        lastName.style.border = "2px solid red";
        lnameError.textContent = "Last name must conain not less than one character";
        lnameError.style = "color:red; font-family:serif "
        lastName.focus();
        error++;
    }
    else{
        lastName.style.border = "2px solid green";
        lnameError.textContent = "";
        contact.focus();
    }

    if(email.value == ""){
        email.style.border = "2px solid red";
        emailError.textContent = "Please enter email";
        emailError.style = "color:red; font-family:serif ";
        email.focus();
        error++;
    }
    else{
        email.style.border = "2px solid green";
        emailError.textContent = "";
        contact.focus();
    }

    if(contact.value == ""){
        contact.style.border = "2px solid red";
        contactError.textContent = "Please enter contact number";
        contactError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;
    }else if(!contact.value.match(contactRegex)){
        contact.style.border = "2px solid red";
        contactError.textContent = "Contact should start with +256";
        contactError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;    
    }
    else{
            contact.style.border = "2px solid green";
            contactError.textContent = "";
            carmodel.focus();
        } 
      
    if(carmodel.value == ""){
        carmodel.style.border = "2px solid red";
        carmodelError.textContent = "Please enter carmodel size";
        carmodelError.style = "color:red; font-family:serif ";
        carmodelError.focus();
          error++;
    }
    else{
            carmodel.style.border = "2px solid green";
            carmodelError.textContent = "";
            tiremake.focus();
        }

    if(tiremake.value == ""){
        tiremake.style.border = "2px solid red";
        tiremakeError.textContent = "Please enter tire make";
        tiremakeError.style = "color:red; font-family:serif ";
        tiremake.focus();
          error++;
    }
    else{
                tiremake.style.border = "2px solid green";
                tiremakeError.textContent = "";
                tiresize.focus();
            }

    if(tiresize.value == ""){
        tiresize.style.border = "2px solid red";
        tiresizeError.textContent = "Please enter tire size";
        tiresizeError.style = "color:red; font-family:serif ";
        tiresize.focus();
          error++;
    }

    // if(model.value == ""){
    //     model.style.border = "2px solid red";
    //     modelError.textContent = "Please enter car model";
    //     modelError.style = "color:red; font-family:serif ";
    //     model.focus();
    //       error++;
    //  }
    
    

    //   // generating unique numbers
    //   const token = /^BB-([0-9]){3}+$/
    //   const pCarRegex = /^BB-([0-9]){3}+$/
    //   const truckCarRegex = /^BB-([0-9]){3}+$/
    //   const taxiCarRegex =  /^BB-([0-9]){3}+$/
    //   const coasterRegex =  /^BB-([0-9]){3}+$/
    //   // eg BB-001, 
    //  //   we go to let and say 
    //  //  if(!(cartype.value.match)
