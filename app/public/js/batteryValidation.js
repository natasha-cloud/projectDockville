function submitForm( ) {
    const form = document.getElementById( 'batteryForm');
    const firstName = form.fname;
    const lastName = form.lname;
    const nin = form.nin;
    const contact = form.contact;
    const battery = form.battery;
    const date = form.date;
    const time = form.time;
}

const Validate=(event )=>{
    let error = 0;
    let firstName = document.reg.fname
    let lastName = document.reg.lname
    let nin = document.reg.nin
    let contact =document.reg.contact
    let battery = document.reg.battery
    let date = document.reg.date
    let time = document.reg.time
   

    //finding errors in empty fields
    let fnameError = document.reg.getElementById("fname-error")
    let lnameError = document.reg.getElementById("lname-error")
    let contactError = document.reg.getElementById("contact-error")
    let ninError = document.reg.getElementById("nin-error")
    let batteryError = document.reg.getElementById("battery-error")
    let dateError = document.reg.getElementById("date-error")
    let timeError = document.reg.getElementById("time-error")
    
    


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

    if(nin.value == ""){
        nin.style.border = "2px solid red";
        ninError.textContent = "Please enter NIN";
        ninError.style = "color:red; font-family:serif ";
        nin.focus();
        error++;
    }else if(!nin.value.match(ninRegex)){
        nin.style.border = "2px solid red";
        ninError.textContent = "Nin should have atleast 14 characters.";
        ninError.style = "color:red; font-family:serif ";
        contact.focus();
        error++;
    }else{
        nin.style.border = "2px solid green";
        ninError.textContent = "";
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
            battery.focus();
        } 
      
    if(battery.value == ""){
        battery.style.border = "2px solid red";
        batteryError.textContent = "Please enter battery size";
        batteryError.style = "color:red; font-family:serif ";
        batteryError.focus();
          error++;
    }

    if(date.value == ""){
        date.style.border = "2px solid red";
        dateError.textContent = "Please enter date";
        dateError.style = "color:red; font-family:serif ";
        date.focus();
          error++;
    }

    if(time.value == ""){
        time.style.border = "2px solid red";
        timeError.textContent = "Please enter time";
        timeError.style = "color:red; font-family:serif ";
        time.focus();
          error++;
    }

    // if(model.value == ""){
    //     model.style.border = "2px solid red";
    //     modelError.textContent = "Please enter car model";
    //     modelError.style = "color:red; font-family:serif ";
    //     model.focus();
    //       error++;
    //  }
    if(nin.value == ""){
        nin.style.border = "2px solid red";
        ninError.textContent = "Please enter NIN";
        ninError.style = "color:red; font-family:serif ";
        nin.focus();
          error++;
    }
    

    //   // generating unique numbers
    //   const token = /^BB-([0-9]){3}+$/
    //   const pCarRegex = /^BB-([0-9]){3}+$/
    //   const truckCarRegex = /^BB-([0-9]){3}+$/
    //   const taxiCarRegex =  /^BB-([0-9]){3}+$/
    //   const coasterRegex =  /^BB-([0-9]){3}+$/
    //   // eg BB-001, 
    //  //   we go to let and say 
    //  //  if(!(cartype.value.match)
    if (error === 0) {
        document.reg.reset();
    }
}    