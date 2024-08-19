let h1=document.querySelector("h1");
let but=document.querySelector("button");
let h3=document.querySelector("h3");
let url="https://catfact.ninja/fact";

async function fact() {
    
    try{

    let r=await axios.get(url);
    return r.data.fact;

    }catch(er){

    return "ERROR !!";
    }
}

but.addEventListener("click",async ()=>{

    let res= await fact();

    h3.innerText=res;
});