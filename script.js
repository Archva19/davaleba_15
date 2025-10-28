let password = "SecurePass2024";

let firstLetter = password[0];
let secondLetter = password[1];
let befLastLetter = password[password.length - 2];
let lastLetter = password[password.length - 1];


let isValidLength = password.length >=10 && password.length <= 20;
let isValidFirstLetter = firstLetter >= "A" && firstLetter <= "Z";
let isValidSecondLetter = secondLetter >= "a" && secondLetter <= "z";
let isValidBefLastLetter =  befLastLetter >= "0" && befLastLetter <= "9";
let isValidLastLetter = lastLetter >= "0" && lastLetter <= "9";

let strengthScore = 0;

let statusLength = "არ დაკმაყოფილდა";
let statusFirstLetter = "არ დაკმაყოფილდა";
let statusSecondLetter = "არ დაკმაყოფილდა";
let statusBefLastLetter = "არ დაკმაყოფილდა";
let statusLastLetter = "არ დაკმაყოფილდა";

if (isValidLength){
    strengthScore = strengthScore + 20;
    statusLength = "დაკმაყოფილდა";
} 
if (isValidFirstLetter){
    strengthScore = strengthScore + 20;
    statusFirstLetter = "დაკმაყოფილდა";
} 
if (isValidSecondLetter){
    strengthScore = strengthScore + 20;
    statusSecondLetter = "დაკმაყოფილდა";
} 
if (isValidBefLastLetter){
    strengthScore = strengthScore + 20;
    statusBefLastLetter = "დაკმაყოფილდა";
} 
if (isValidLastLetter){
    strengthScore = strengthScore + 20;
    statusLastLetter = "დაკმაყოფილდა";
} 

let strengthStatus;

if (strengthScore === 100){
    strengthStatus = "ძალიან ძლიერი პაროლი";
} else if (strengthScore >= 80){
    strengthStatus = "ძლიერი პაროლი";
} else if (strengthScore >= 60){
    strengthStatus = "საშუალო პაროლი";
} else if (strengthScore >= 40){
    strengthStatus = "სუსტი პაროლი";
} else {
    strengthStatus = "ძალიან სუსტი პაროლი";
}

console.log(`პაროლის სიგრძე (10-20): ${statusLength}
პირველი სიმბოლო (დიდი ასო A-Z): ${statusFirstLetter}
მეორე სიმბოლო (პატარა ასო a-z): ${statusSecondLetter}
ბოლოდან მეორე სიმბოლო (რიცხვი 0-9): ${statusBefLastLetter}
ბოლო სიმბოლო (რიცხვი 0-9): ${statusLastLetter}
საერთო ქულაა: ${strengthScore}
პაროლის სიძლიერის კატეგორია: ${strengthStatus}`);




