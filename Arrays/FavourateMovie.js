
const movie="Titanic";

let guess=prompt("GUESS THE MOVIE NAME : ");

while((guess!=movie)&&(guess!="quit")){

    guess=prompt("Wrong Answer, Please Try Again !!");
}

if(guess==movie){
    console.log("CONGRAJULATION....! YOU WON..");
}else{
    console.log("YOU QUITED !! THANK YOU...");
}