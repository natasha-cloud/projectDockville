const validate=()=>{
    // picking input fields with their names or ids.
    let FirstName = document.registration.firstname
    let LastName = document.registration.lastname
    let phone = document.registration.phone
    let Email = document.registration.Email
    let nin = document.registration.nin
    let carType = document.getElementById("car-type")
    let carselecetype = document.registration.carselect;



// Picking error fields
let firstNameError = document.getElementById("firstname-error")
let lastNameError = document.getElementById("lastname-error")
let phoneError = document.getElementById("phone-error")
let EmailError = document.getElementById("Email-error")
let carTypeError = document.getElementById("car-type-error")
let ninError = document.getElementById("nin-error")
let carselecetypeError = document.getElementById("carTypeSelect-error")


// validation fullname input fields.
// validating for emptyness errors
if(FirstName.value ==""){
   FirstName.style.border = "2px solid red";
   firstNameError.textContent = "first name is required";
   firstNameError.style = "color: red; font-size:11px; font-family:Helvetica,Arial,sans-serif;";
   FirstName.focus();
   return false;
}

else if (FirstName.value.length <2 ){
    FirstName.style.border = "2px solid red";
    firstNameError.textContent = "First name must be at least 2 characters";
    firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    FirstName.focus();
    return false;
}
else if (FirstName.value.length >15){
    FirstName.style.border = "1px solid red";
    firstNameError.textContent = "First name must no be greater than 15 characters";
    firstNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    FirstName.focus();
    return false;
}
else{
    FirstName.style.border = "1px solid green";
    firstNameError.textContent = "";
    LastName.focus(); 
}

if(LastName.value == ""){
    LastName.style.border = "1px solid red";
    lastNameError.textContent = "Last name is required";
    lastNameError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    LastName.focus();
    return false;
}
function validateName(name) {
    var regex = /^[A-Z][a-z]{1,}$/;
    return regex.test(name);
  }
  

// Validating Phone number.
if(phone.value == ""){
    phone.style.border = "1px solid red";
    phoneError.textContent = "Phone number is required";
    phoneError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    phone.focus();
    return false;   
}
let phoneRegex = /^[+][2][5][6][0-9]{9}$/

if(!phoneRegex.test(phone.value)){
    phone.style.border = "1px solid red";
        phoneError.textContent = "Phone number should start with +256";
        phoneError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        phone.focus();
        return false;
}
// validation for Email
if(Email.value == ""){
    Email.style.border = "1px solid red";
    EmailError.textContent = "Email is required";
    EmailError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    Email.focus();
    return false;
}
let EmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

if(!Email.value.match(EmailRegex)){
    Email.style.border = "1px solid red";
    EmailError.textContent = "The email address should be valid";
    EmailError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    Email.focus();
    return false;
}

// validation for car type.
if (carType.value == ""){
   carType.style.border = "1px solid red";
   carTypeError.textContent = "Select a car type";
   carTypeError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    carType.focus();
    return false;
}

// validation for NIN.
let ninRegex = /^CF ([a-zA-Z0-9]{12})+$/;

if(!ninRegex.test(nin.value)){
    nin.style.border = "1px solid red";
    ninError.textContent = "NIN is required";
    ninError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    nin.focus();
    return false;
}

const ninRegex2 = /^CM ([a-zA-Z0-9]{12})+$/;

if(!(ninRegex.test(nin.value)||!ninRegex2.test(nin.value))){
        nin.style.border = "1px solid red";
        ninError.textContent = "NIN should look like CFXXXXX OR CMXXXX";
        ninError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
        nin.focus();
        return false;
    }
// validating for TOKEN OR identifier number.
const tokenRegex = /^BB-([0-9]{3})+$/;
// eg BB-01, BB-02, BB- 03, BB-04, BB-05, BB-06.

const pcarRegex = /^PC-([0-9]{3})+$/;
const bbRegex = /^bb-([0-9]{3})+$/;
const coasterRegex = /^CC-([0-9]{3})+$/;
const taxiRegex = /^TX-([0-9]{3})+$/;

if(!(carselecetype.value.test(pcarRegex) || carselecetype.value.test(bbRegex) || carselecetype.value.test(coasterRegex) || carselecetype.value.test(taxiRegex))){
    carselecetype.style.border = "1px solid red";
    carselecetypeError.textContent = "Select a car type";
    carselecetypeError.style = "color: red; font-size:11px; font-family:helvetica,Arial,sans-serif;";
    carselecetype.focus();
    return false;
}

// Validation for time
function validateTime() {
    var time = document.getElementById("time").value;
    var regex = /^([1-9]|1[012]):[0-5][0-9](\\s)?(?i)(am|pm)$/;
    if (!regex.test(time)) {
      alert("Invalid time format. Please enter time in hh:mm AM/PM format.");
      return false;
    }
    return true;
  }
  


 





























}