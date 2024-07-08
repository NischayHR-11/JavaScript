let n=prompt("ENTER THE MAXIMUM RANGE VALUE :");

let guess=Math.floor( Math.random()*n)+1;
let n1=prompt("GUESS THE NUMBER :");

while(true){

    if(n1==guess){
        console.log("YOUR GUESS WAS CORRECT , YOU WON THE GAME.....");
        break;

    }else if(n1>guess){
        n1=prompt("YOUR GUESS IS HIGH !! ,PLEASE TRY AGAIN...");
    }else{
        n1=prompt("YOUR GUESS IS LOW !! ,PLEASE TRY AGAIN...");
    }
    
}

alert("You Won !!!, Thank you..")