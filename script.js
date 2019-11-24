document.body.style.background = "url('https://github.com/Nisamoto/Homework3Password/blob/master/paisley.jpg')";
let complexity = document.getElementById("slider"); 
let length = document.getElementById("length");

complexity.addEventListener('change', function(){
    length.innerText = complexity.value
})

//Generate random password
function generate(){

//Possible password values

    let UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    UpperCase = UpperCase.split("");
    let LowerCase = "abcdefghijklmnopqrstuvwxyz";
    LowerCase = LowerCase.split("");
    let NumberCase = "1234567890";
    NumberCase = NumberCase.split("");
    let SpecialChar = "!#$%&'()\"*+,-./:;<=>?@[]^_`{|}~";
    SpecialChar = SpecialChar.split("");

    let password = "";
    let chosencase = []; 

//Have user select whether they want a case or not
//Make sure at least one case is chosen

var UpperChoice = confirm("Do you want to include upper-case characters?");
var LowerChoice = confirm("Do you want to include lower-case characters?");
var NumberChoice = confirm("Do you want to include numeric characters?");
var SpecialCharChoice = confirm("Do you want to include special characters?");

//taking chosencase and concatting with true case

if(UpperChoice){
    chosencase = chosencase.concat(UpperCase)
}

if(LowerChoice){
    chosencase = chosencase.concat(LowerCase)
}

if(NumberChoice){
    chosencase = chosencase.concat(NumberCase)
}

if(SpecialCharChoice){
    chosencase = chosencase.concat(SpecialChar)
}

//checking to see if there's no chosen case
if (chosencase.length ===0){
    alert("Please select **at least** ONE case!")
    return
} 

    //create for loop to choose password characters

for(var i = 0; i <= complexity.value; i++){
  
        password = password + chosencase[Math.floor(Math.random() * Math.floor(chosencase.length - 1))].toString();
    }

    //add password to textbox/display area
    document.getElementById("display").value = password;

}
function copypassword(){
    var textarea = document.getElementById("display")
    textarea.select(); 
    document.execCommand('copy');
    alert("Your password was copied! " + textarea.value)
}
