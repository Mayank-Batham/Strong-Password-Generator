const passwordInput=document.getElementById("strongPasswordValue"),
      CopySuccess=document.getElementById("CopySuccess"),
      rangeValue=document.getElementById("rangeValue"),
      rangeInput=document.getElementById("rangeInput"),
      generatePassword=document.querySelector(".generatePassword");

const options=document.querySelectorAll(".options input");

generatePassword.addEventListener("click",generateStrongPassword);
rangeInput.addEventListener("click",Changed)
rangeValue.addEventListener("click",Changed)

for (let opt of options){
    opt.addEventListener("click",generateStrongPassword);
}
function Changed(){
    generateStrongPassword()
}
function CopyStrongPassword(){
    navigator.clipboard.writeText(passwordInput.value);
}
const Charac={"Upcase":"ABCDEFGHIJKLMNOPQRSTUVWXYZ","Lowcase":"abcdefghijklmnopqrstuvwxyz","Numbers":"0123456789","Symbols":"!@#$%|/?"};
function generateStrongPassword(){
    let randomPasswords = "",
        strongPassword = "",
        IsExcludeDuplicate = false;
    options.forEach((option) => {
        if (option.checked && option.id !== "Duplicate"){
            randomPasswords += Charac[option.id];
        }
        if (option.id === "Duplicate" && option.checked){
            IsExcludeDuplicate = true;
        }
    } );
    if (randomPasswords!==""){
        if(IsExcludeDuplicate && randomPasswords.length<rangeInput.value){
            alert("Not possible!");
            passwordInput.value="Not possible!";
        }else {
        for (let i = 0;i<rangeInput.value;i++){
            let chatAt = randomPasswords[Math.floor(Math.random()*randomPasswords.length)];
        if (IsExcludeDuplicate){
            !strongPassword.includes(chatAt)?(strongPassword += chatAt):i--;}
            else{
            strongPassword += chatAt;
        }
        passwordInput.value=strongPassword;}
}
}
}