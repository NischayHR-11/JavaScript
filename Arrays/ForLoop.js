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