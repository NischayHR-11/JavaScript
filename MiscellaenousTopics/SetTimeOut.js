console.log("HI");

setTimeout(()=>{

    console.log("WELCOME....");
},1000);

console.log("BYEEE");
console.log("BYEEE");
console.log("BYEEE");
console.log("BYEEE");
console.log("BYEEE");
console.log("BYEEE");
console.log("BYEEE");
console.log("BYEEE");



// Set Interval

const id =setInterval( ()=>{
    console.log("NAMASTAE..")
},2000);

console.log(id);   // To Stop This Interval Use clearInterval(id)

const id1 =setInterval( ()=>{
    console.log("NAMASTAE..1")
},2000);

console.log(id1);

//---------------------------------------------------------------------------------------------------------------------------

// Arrow method .this (Vs) Normal Method .this

// Arrow Method Referes TO (Lexsical Scope) [parent's parent]

// Normal Method Refers To Current parent

const student={

    name : "Nischay HR",
    cgpa: 9.578,

    arrow : ()=>{

        console.log(this); // Refers To Windows
    },

    normal : function (){
        console.log(this); // Refers To student
    },

    arrow1 : function(){

       setTimeout(()=>{     // Set TIme out Is Windows Method. 

        console.log(this);  // Refers to Student.
        },1000);

    },

    normal1 : function (){

        setTimeout(function(){

            console.log(this); // Refers to Windows.
        },2000);
    }
};

student.arrow();
student.normal();
student.arrow1();
student.normal1();