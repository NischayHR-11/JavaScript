let url="https://catfact.ninja/fact"

let r =fetch(url);

console.log(r);

let demo=`{"fact":"The leopard is the most widespread of all big cats.","length":51}`;

let value=JSON.parse(demo).fact;

console.log(value);

r={

    a:"hi",
    b:"bye"
};

let str=JSON.stringify(r);
console.log(str);


// using async function

async function facts() {

    try{
    
    // Response 1

    let r= await fetch(url);  // returns promise
    let data= await r.json(); // returns promise
    console.log(data.fact);


    // Response 2

    let r1= await fetch(url);  // returns promise
    let data1= await r1.json(); // returns promise
    console.log(data1.fact);

    }catch(er){

        console.log("ERROR OCCURED !! : "+er);
    }

    return "FACTS API Call Response..";

}

facts();



