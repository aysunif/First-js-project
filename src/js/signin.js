let signinBtn = document.getElementById("d-btn")

let email = prompt('Enter your email:');


if(email.includes('admin@gmail.com')){
    answer = true;
 } else{
    answer = false;
 }
 alert(answer);


let pass =  prompt('Enter your password:');


if (pasword.includes('1234567')){
    answer = true;
}else{
    answer = false;
}
alert(answer)