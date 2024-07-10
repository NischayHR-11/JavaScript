console.log("ODD NUMBERS");

for(let i=0;i<=10;i++){
    
    if(i%2!=0)
    console.log(i);
}

console.log("REVERSED NUMBERS\n");

for(let i=5;i>=0;i--){

    console.log(i);
}

let n=prompt("ENTER THE NUMBER FOR MULTIPLICATION :");

console.log("MULTIPLICATION TABLE OF "+n+ ":");

for(let i=1;i<=10;i++){

    console.log(i*n);
}

console.log("NESTED FOR LOOP :");

for(let i=1;i<=3;i++){

    for(let j=1;j<=3;j++){
        console.log(j);
    }

    console.log("\n");
}

// For Each Loop

console.log("FOR EACH LOOP :");

let arr=[1,2,3,4,5];

//method 1

arr.forEach(
    (el)=>{
        console.log(el);
    }
);

// method 2
console.log("\n");

arr.forEach(
    function (el){
        console.log(el);
    }
)