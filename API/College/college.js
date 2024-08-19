let url="http://universities.hipolabs.com/search?name=";
let inp=document.querySelector("input");
let but=document.querySelector("button");
let ul=document.querySelector("ul");
let h2=document.querySelector("h2");

but.addEventListener("click",async()=>{

    let r= await res(url+inp.value);
    ul.innerText="";
    h2.innerText=inp.value;
    
    for(x of r){

        let li=document.createElement("li");
        li.innerText=x.name;
        ul.appendChild(li);
    }
    
    inp.value="";
});


async function res(link){

    try{

    let clg= await axios.get(link);
    console.log(clg);
    return clg.data;

    }catch(er){
        console.log("ERROR!!");
        return [];
    }
}