var elRes = document.querySelector(".res");
var num1 = prompt("son kiriting");
var num2 = prompt("son kiriting");
var num3 = prompt("son kiriting");

// if(num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2){
//     elRes.textContent = num1
// }else if (num2 > num1 && num2 < num3 || num2 > num3 && num2 < num3){
//     elRes.textContent = num2
// }else {
//     elRes.textContent = num3
// }

var katta = Math.max(num1, num2, num3);
var kichik = Math.min(num1, num2, num3);
// console.log(katta, kichik);
if(num1 != katta && num1 != kichik){
    elRes.textContent = num1
}else if(num2 != katta && num2 != kichik){
    elRes.textContent = num2
}else if(num3 != katta && num3 != kichik){
    elRes.textContent = num3
}