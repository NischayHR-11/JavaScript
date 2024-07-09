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

