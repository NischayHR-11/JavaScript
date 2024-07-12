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
);

// Map  [Same as for each but here the function return value which is stored in array]


let ar=[{
    name:"Nischay",
    marks:95
},
{
    name:"Mahadev",
    marks:98
},
{
    name:"Vaibhav",
    marks:97
}
];

let cgpa=ar.map(
    (el)=>{

        return el.marks/10;
    }
)

console.log(cgpa);  // Array

// Filter (Same as Map But Adds only true value element to Array)

let filterMethod=arr.filter(

    (el)=>{

        return (el%2==0);
    }
);

console.log(filterMethod);

// every method [ every element should return true ] logical 'and'

let n1=arr.every(

    (el)=>{

        return (el%2==0);
    }
);

console.log(n1); // false {since every element is not even }

// Some method  [logical 'OR']

let n2=arr.some(

    (el)=>{

        return (el%2==0);
    }
);

console.log(n2);