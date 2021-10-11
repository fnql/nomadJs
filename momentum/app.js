const age = parseInt(prompt("your age?"));

console.log(isNaN(age));

if(isNaN(age)){
    console.log("숫자 입력!");
} else if (age<18) {
    console.log("yor are too young");
}   else{
    console.log("your age" + age);
}