let url="https://dog.ceo/api/breeds/image/random";
let h1=document.querySelector("h1");
let but=document.querySelector("button");
let img=document.querySelector("img");

async function image() {
    
    try{

    let r=await axios.get(url);
    console.log(r);
    return r.data.message;

    }catch(er){

    return "ERROR !!";
    }
}

but.addEventListener("click",async ()=>{

    let res= await image();

    img.setAttribute("src",res);
});