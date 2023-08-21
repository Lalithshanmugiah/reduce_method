const number =[20,30,50];
let sum = number.reduce(myFunction);
document.getElementById("para").innerHTML="sum of " + sum;

function myFunction(toatl,value,index,array){
    return toatl + value ;
}

const number1 =[100,20,30,];
let sub = number1.reduce(myFunc);
document.getElementById("para2").innerHTML ="sub of " + sub ;

function myFunc(total,value,index,array){
    return total - value;
}

const number2 =[10,1000];
let multiply = number2.reduce(myfun);
document.getElementById("para3").innerHTML="multiply of "+ multiply;

function myfun(total, value, index, array){
    return total * value
}

