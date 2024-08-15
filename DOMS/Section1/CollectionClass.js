let ex=document.querySelector("h1");

console.log(ex);

// ex.style.color="green";
ex.style.textDecoration="black underline"

let arr=document.querySelectorAll(".box a")
console.log(arr);

for( x of arr){

    x.style.color="purple";
    x.style.textDecoration="black underline"
}


// class list

ex.classList.add("yellow");
ex.classList.add("blue");

console.log(ex.classList);

ex.classList.remove("blue");

console.log(ex.classList);

console.log(ex.classList.contains("blue"));
console.log(ex.classList.contains("yellow"));

ex.classList.toggle("blue");  // if it is present already in the list then it removes otherwise it add's.

console.log(ex.classList);
console.log(ex.classList.contains("blue"));
ex.classList.toggle("blue"); 
console.log(ex.classList.contains("blue"));


//navigation (parent, child ,previous sibling ,next sibling).

console.log(ex.parentElement);
ex=document.querySelector("ul");
console.log(ex.parentElement);
console.log(ex.children);
console.log(ex.children[1]);
console.log(ex.children[1].previousElementSibling);
console.log(ex.children[1].nextElementSibling);


//Adding Elements

let ex1=document.createElement('p');
ex1.innerText="this is example paragraph";

console.dir(ex1);

let body =document.querySelector("body");

console.dir(body);

body.append(ex1);
body.prepend(ex1);

document.querySelector(".box").insertAdjacentElement("beforebegin",ex1);
document.querySelector(".box").insertAdjacentElement("afterbegin",ex1);
document.querySelector(".box").insertAdjacentElement("beforeend",ex1);
document.querySelector(".box").insertAdjacentElement("afterend",ex1);


// removing element from page 

ex1.remove(); // (or)
body.removeChild(ex1);