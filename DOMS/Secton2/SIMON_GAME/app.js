let but=document.querySelectorAll(".box");
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
let level=0;
let start=false;
let highscore=0;

let color=["blue","yellow","red","purple"];
let game=[];
let user=[];

function flash(btn){

    btn.classList.add("flash");
    setTimeout(function(){

        btn.classList.remove("flash");
    },200);

}

function userflash(btn){

    btn.classList.add("green");
    setTimeout(function(){

        btn.classList.remove("green");
    },100);

}

function levelup(){

    user=[];
    level++;
    h2.innerText="LEVEL "+level; 

    let r=Math.floor(Math.random()*3);
    let clr=color[r];
    let rbt=document.querySelector("."+clr);
    game.push(clr);
    flash(rbt);
}

document.addEventListener("keypress",function(){

    if(start==false){
    start=true;
    levelup();
    }
});

function reset(){

    start=false;
    user=[];
    game=[];
    level=0;
}

function check( ind){

    console.log("level = "+level);
    if(user[ind]===game[ind]){

        if(user.length==game.length){
            levelup();
        }

    }else{

        h2.innerText="GAME OVER !! Your Score Is : "+level+"  Press Any Key To Play Again";
        if(level>highscore){
            highscore=level;
            h3.innerText="HIGH SCORE : "+highscore;
        }
        reset();
    }
}


for(button of but){

    button.addEventListener("click",function(){

        userflash(this);
        console.log(this.getAttribute("id"));
        user.push(this.getAttribute("id"));

        check(user.length-1);
    })
}