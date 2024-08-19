let h1=document.querySelector("h1");


// Call Back Hell

// function colorchange(color,delay,nextcolor){

//     setTimeout(function(){

//         h1.style.color=color;
//         console.log(" COLOR CHANGED SUCCESSFULLY ..");

//         if(nextcolor){
//             nextcolor();
//         }

//     },delay);

// }


// colorchange("red",1000,()=>{

//     colorchange("yellow",1000,()=>{

//         colorchange("blue",1000,()=>{

//             colorchange("green",1000,()=>{

//                 colorchange("purple",1000);
//             });
//         });
//     });
// });


// call back hell (API)


// function saveToDb(data,resolve){

//     let netspeed=Math.floor(Math.random()*10)+1;

//     if(netspeed>4){

//         if(resolve)
//         resolve();

//     }else{
//         console.log("REJECTED DUE TO LOW NET SPEED !!");
//     }

// }


// saveToDb("HI",()=>{

//     console.log("DATA1 SAVED SUCCESSFULLY... : ");
//     saveToDb("I AM",()=>{

//         console.log("DATA2 SAVED SUCCESSFULLY... : ");
//         saveToDb("NISCHAY",()=>{
            
//             console.log("DATA3 SAVED SUCCESSFULLY... : ");
//             saveToDb("STUDENT AT SJCE",()=>{

//                 console.log("DATA4 SAVED SUCCESSFULLY... : ");
//             });
//         });
//     })
// });



// using promise(object);


// function saveToDb(data){

//     return new Promise((resolve,reject)=>{

//         let netspeed=Math.floor(Math.random()*10)+1;

//         if(netspeed>4){
//             resolve("DATA SAVED... "+data);
//         }else{
//             reject("DATA REJECTED.... "+data);
//         }
//     });

// }

// let r=saveToDb("NISCHAY");

// r.then((result)=>{

//     console.log("data 1 saved ..");
//     console.log(result);
//     return saveToDb("student");
// }
// ).then( (result)=>{

    
//     console.log("data 2 saved ..");
//     console.log(result);
//     return saveToDb("AT SJCE ");
// }
// ).then((result)=>{

//     console.log("data 3 saved ..");
//     console.log(result);
//     return saveToDb("MYSORE");

// }).then((result)=>{

//     console.log("data 4 saved ..");
//     console.log(result);
    
// })
// .catch((result)=>{

//     console.log("rejected the data...!");
// });


// Async Key word;

// function saveToDb(data){

//     return new Promise((resolve,reject)=>{

//         let netspeed=Math.floor(Math.random()*10)+1;

//         if(netspeed>4){
//             console.log("DATA : "+data+ " SAVED...");
//             resolve("DATA SAVED... "+data);
//         }else{
//             reject("DATA REJECTED.... "+data);
//         }
//     });

// }

// async function demo() {  // async function returns the parent object.
    
//     try{
//     await saveToDb("NISCHAY");
//     await saveToDb("STUDENT");
//     await saveToDb("AT SJCE");
//     console.log("completed");
//     }catch(err){
//         console.log("ERROR CAUGHT !! "+err);
//     }

//     return "THIS IS DEMO FUNCTION";
// }


// let r=demo();

// setTimeout(()=>{

//     console.log(r);
// },2000);


// color change example

function colorchange(color,delay){

    return new Promise((resolve,reject)=>{

        setTimeout(function(){

            h1.style.color=color;
            console.log(" COLOR CHANGED SUCCESSFULLY ..");
            resolve("changed color !!");
        },delay);
    })

}


async function test (){
    
    await colorchange("red",1000);
    await colorchange("yellow",1000);
    await colorchange("blue",1000);
    await colorchange("green",1000);
    await colorchange("purple",1000);

    return "COMPLETED !!!";
}

let r= test();

setTimeout(()=>{

    console.log(r);
},6000);
