student = {

    name:"NISCHAY H R",
    sem:4,
    cgpa:9.578,
    sgpa:9.4,

    TotalCgpa(){

        let n=(this.cgpa+this.sgpa)/2;

        console.log("TOTAL CURRENT CGPA : "+n);
    }
};

student.TotalCgpa();



console.log("HI");
student.TotalCgpa();
try{
    console.log(a);
}catch(er){

    console.log("ERROR DETECTED !!, UNDEFINED VARIABLE..");
}

console.log("BYE....");


// Arrow Function

const sum= (a,b)=>{

    console.log("SUM IS : "+(a+b));
}

sum(2,5);

// Implicit Return in Arrow Function [ only variable name defines the return  , here we use () instead Of {}]

const mul= (a,b) =>(a*b);

console.log("MULTIPLICATION IS : "+ mul(5,4) );