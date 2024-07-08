student={

    name :"Nischay H R",
    sem : 4,
    cgpa:9.576,
    Branch:"CSE",
    college:"JSS Science And Technology University",
    subjects:["maths","os","toc","ADA","SE","DC"]
};

console.log(student);

// Accessing

console.log(student["name"]+"\n"+student["cgpa"]);
console.log(student.name+"\n"+student.cgpa);

// KeyWords Object

obj={

    1:"hi",
    2:"bye",
    null:"it is null",
    true:"it is boolean",
    undefined:"it is undefined Keyword"
}

console.log(obj[1]+"\n"+obj[2]+"\n"+obj[null]+"\n"+obj[true]+"\n"+obj[undefined]+"\n");

// cannot be Acccessed in this way for numbers,

//console.log(obj.1);  //Error
console.log(obj.null); // NO Error

//update

student.sem=5;
console.log(student.sem); // updated sem

//add 

student.gender="male";
console.log(student); // gender property is added

// nested Objects

classInfo={

    nischay :{
        cgpa:9.578,
        Branch:"CSE"
    },

    Mahadev:{

        cgpa:8.8,
        Branch:"CIVIL"
    },

    Vaibhav :{
        cgpa:9.1,
        Branch:"CSE"
    }
}

console.log(classInfo);

console.log(classInfo.nischay);

// Arrays Of Objects

classinfom=[

    {
        name:"NISCHAY H R",
        cgpa:9.578
    },

    {
        name:"MAHADEV",
        cgpa:8.8
    },

    {
        name :"VAIBHAV",
        cgpa:9.1
    }

]

console.log(classinfom);
console.log(classinfom[0].cgpa);

// Math Methods

console.log("Math floor :");

console.log(Math.floor(5.99999)+"\n"+Math.floor(-5.6)); // <=

console.log("Math Ceil :");

console.log(Math.ceil(5.000001)+"\n"+Math.ceil(-5.6)); // >=

console.log("Math random :");

console.log(Math.random()); // random numbers between 0 to 1



// Random Number Generator Between The Range

let n=10; // 'n' is the Max Range Value.

console.log(  Math.floor(Math.random()*n)+1  );

// Genrating Random Numbers Between Two Range Of Numbers

let n1=20;  // 'n1' is the Min Range Value.
let n2=25;  // 'n2' is the Max Range Value.

console.log(   Math.floor(Math.random()*(n2-n1))+n1+1   );
