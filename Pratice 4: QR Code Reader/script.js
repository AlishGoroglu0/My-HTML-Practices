//https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=


let ImageBox = document.getElementById("ImageBox");
let QrCodeImage = document.getElementById("QrCodeImage");
let button = document.getElementById("GenerateButton");
let InputTextField = document.getElementById("InputTextField");



button.addEventListener("click", () => {
    if (InputTextField.value == "") {
        InputTextField.classList.add('warnuser');
        return;
    }
    else{QrCodeImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + InputTextField.value;}
    

})
InputTextField.addEventListener('animationend' , () => {
    InputTextField.classList.remove('warnuser')

})
