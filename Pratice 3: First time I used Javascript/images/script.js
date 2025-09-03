document.addEventListener('DOMContentLoaded', (event) => {
    const submitButton = document.getElementById('submit');
    const namevalidation = document.getElementById('name');
    const surnamevalidation= document.getElementById('surname');
    const stateidvalidation = document.getElementById('StateID');
    const positionvalidation = document.getElementById('position');

    

    

  submitButton.addEventListener('click', (event) => {
    event.preventDefault();

    const Message = document.getElementById('Message');
    let errormessages = "";
   if (stateidvalidation.value && !/^\d+$/.test(stateidvalidation.value)) {
    Message.style.color = "red";
    errormessages += "Please fill State ID with numbers only!" + "\n";
}
    if (stateidvalidation == null || stateidvalidation.value == "") {
        Message.style.color = "red";
        errormessages += "Please fill State ID field!" + "\n"
    }
    if (namevalidation == null || namevalidation.value == ""){
         Message.style.color = "red";
        errormessages += "Please Fill Name field!" + "\n";
    }
    if(surnamevalidation == null || surnamevalidation.value == ""){
         Message.style.color = "red";
        errormessages += "Please Fill Surname field!" + "\n";
    }
    if(positionvalidation == null || positionvalidation.value == ""){
         Message.style.color = "red";
        errormessages += "Please Fill Surname field!" + "\n";
    }
    if(errormessages != ""){
        Message.textContent = errormessages;
    }
   else{
    Message.style.color = "green";
    Message.textContent = "Thanks for applying"
    console.log("Your data is here");
    console.log(namevalidation.value);
    console.log(surnamevalidation.value);
    console.log(stateidvalidation.value);
    console.log(positionvalidation.value);
   }


  });
});