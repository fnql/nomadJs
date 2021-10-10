const age = parseInt(prompt("your age?"));

console.log(isNaN(age));

if(isNaN(age)){
    console.log("숫자 입력!");
}   else{
    console.log("your age" + age);
}