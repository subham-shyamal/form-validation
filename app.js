function setError(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formError")[0].innerHTML = error;
}

// function validateForm(e) {
//     let returnVal = true;

//     var name = document.forms['myForm']['fname'].value;
//     if(name.length<5){
//         setError('firstName','Length is too short');
//         returnVal = false;
//     }
//     if(name.length==0){
//         setError('firstName','First Name is required');
//         returnVal = false;
//     }

//     e.preventDefault();
//     return returnVal;
// }

const form = document.getElementById("form");
const res = document.getElementById("resetBtn");

form.addEventListener("submit", validateForm);

function validateForm(e) {
  e.preventDefault();

  //validation for firstName
  let fName = document.forms["myForm"]["fname"].value;
  if (fName.length < 1) {
    setError("firstName", "Length is too short");
  } else {
    setError("firstName", "");
  }

  //Validation for Second Name
  let lName = document.forms["myForm"]["lname"].value;
  if (lName.length < 1) {
    setError("lastName", "Length is too short");
  } else {
    setError("lastName", "");
  }

  //Validation for Govt. ID

  let govID = document.forms["myForm"]["govID"].value;
  if (govID.length < 1) {
    setError("govID", "ID is required");
  } else {
    setError("govID", "");
  }

  //Validation for Number of Persons
  let persons = document.forms["myForm"]["persons"].value;
  if (persons.length < 1) {
    setError("person", "Number of persons is required");
  } else {
    setError("person", "");
  }

  //Validation for Arrival
  let arrivalDate = document.forms["myForm"]["arrivalDate"].value;
  if (arrivalDate < 1) {
    setError("arrival", "ArrivalDate is required");
  } else {
    setError("arrival", "");
  }

  //Validation for Departure
  let deparDate = document.forms["myForm"]["depertureDate"].value;
  if (deparDate < 1) {
    setError("departure", "Departure Date is required");
  } else {
    setError("departure", "");
  }

  let country = document.forms["myForm"]["country"].value;
  if (country.length < 1) {
    setError("country", "Country name required");
  } else {
    setError("country", "");
  }

  //Validation for checkboxes
  let credit = document.forms["myForm"]["credit"];
  let debit = document.forms["myForm"]["debit"];

  if (credit.checked == false && debit.checked == false) {
    alert("Please choose your PaymentOption: Debit or Credit");
  }

  //Validation for email ID
  let email = document.forms["myForm"]["email"].value;

  if (email.length < 1) {
    setError("email", "Email is required");
  } else if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    setError("email", "");
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
}

res.addEventListener("click", resetForm);
function resetForm(e) {
  e.preventDefault();
  document.getElementById("form").reset();
}
