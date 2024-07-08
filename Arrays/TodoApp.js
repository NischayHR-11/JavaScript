let todo=[];

let request =prompt("ENTER THE REQUEST TO BE PERFORMED :");

while(true){

if(request==="exit"){
    console.log("EXITING TODO APP......");
    break;
}

if(request=="add"){

    let n =prompt("ENTER THE TASK TO BE ADDED :");
    todo.push(n);

}else if(request=="list"){

    console.log("----------------");
    for(task of todo){
        console.log(task);
    }
    console.log("----------------");

}else if( request=="delete"){

    let ind = prompt("ENTER THE INDEX NUMBER OF TASK TO BE DELETED :");
    todo.splice(ind,1);
}else{

    console.log("Invalid Request !!  Try Again...");
}

    request=prompt("ENTER THE REQUEST TO BE PERFORMED :");

}