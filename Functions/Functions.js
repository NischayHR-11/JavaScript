function print1To5(){

    for(let i=1;i<=5;i++){
        console.log(i);
    }
    console.log("\n");
}

print1To5();

function RollDice(){

    console.log(  Math.floor(Math.random()*6)+1  );
}

RollDice();

// Parameterised Functions

function Info(name,age){

    console.log(name+"'s  age is : "+age);
}

Info("Nischay",19);
Info("Nischay"); // no error is observed.


// return type Functions

function avg( n1,n2,n3){

    return (n1+n2+n3)/3;
}

console.log("AVG : "+avg(3,3,3));
console.log("\n");


function Tables( n){

    for(let i=1;i<=10;i++){

        console.log(i*n);
    }
}

Tables(73);
console.log("\n");

function sumnatural(n){

    let sum=0;

    for(let i=1;i<=n;i++){

        sum=sum+i;
    }

    return sum;
}

console.log( sumnatural(25));
console.log("\n");

function concat( a){

    let result="";

    for(let i=0;i<a.length;i++){

        result=result+a[i]+" ";
    }

    return result;
}


console.log(concat(["Hi","I Am","NISCHAY H R"]));
console.log("\n");

// Function Expressions

let sum = function (a,b) {

    return a+b;
}

console.log(sum(3,2));

sum= function (){

    console.log("Function Is Replaced As Variable Values Get Replaced !!")
}

console.log(sum());