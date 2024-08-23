class person {

    name;
    age;

    constructor(name,age){  // Even Constructor is also a prototype of person object.
        this.name=name;
        this.age=age;
    }

    talk(){  // prototype of person object (All Objects Share This Single Method [Memory Efficient] ).

        console.log(this.name+" Is Talking....");
    }

}


class student extends person{

    rollno;

    constructor(name,age,rollno){

        super(name,age);
        this.rollno=rollno;
        console.log(this);
    }
}


class teacher extends person {

    subject;

    constructor(name,age,subject){
        super(name,age);
        this.subject=subject;
        console.log(this);
    }
}

let a= new student("student",20,28);
let b= new teacher("teacher",50,"Maths");

a.talk();
b.talk();

if(a.talk===b.talk){

    console.log("Hence Proved, It Is Prototype Of person Object Which is Extended By Both Student and Teacher");
}

