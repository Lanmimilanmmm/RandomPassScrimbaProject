const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let PassEl1 = document.getElementById("Pass1")
let PassEl2 = document.getElementById("Pass2")

let passwordLenght = 15

function getRandomCharacter(){
    return characters[ Math.floor( Math.random() * characters.length)]    
}

function getRandomPassword(){
    let randomPassword = ""
    for (let i = 0; i < passwordLenght; i++ ){
        randomPassword += getRandomCharacter()
    }
   
     return randomPassword
    
}
// console.log(getRandomCharacter())
// console.log(getRandomPassword())
function RandomPass(){
    let password1 =getRandomPassword()
    let password2 =getRandomPassword()
    PassEl1.textContent = password1
    PassEl2.textContent = password2
    
}

// function generateRandomPassword() {
//     let randomPassword = ""
//     for (let i = 0; i < passwordLength; i++) {
//         randomPassword += getRandomCharacter()         
//     }
//     return randomPassword
// }

