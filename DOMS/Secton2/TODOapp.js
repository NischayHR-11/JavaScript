let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let but=document.querySelector("button");


but.addEventListener("click",function(){

    let temp=document.createElement("li");
    temp.innerText=inp.value;
    ul.appendChild(temp);
    let dele=document.createElement("button");
    dele.innerText="DELETE";
    dele.classList.add("delete");
    temp.appendChild(dele);
    inp.value="";
    dele.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
    })

});

let delbut =document.querySelectorAll(".delete");

for( del of delbut){
    del.addEventListener("click",function(){
        let par=this.parentElement;
        par.remove();
    })
}






