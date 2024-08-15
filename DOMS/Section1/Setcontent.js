let para = document.querySelector('p');


// Innertext  (As seen In Web Page).

let innerText=para.innerText;
console.dir(innerText);

// InnerHtml (As seen in html page With Tags).

let InnerHtml=para.innerHTML;
console.log("\n"+InnerHtml);

// TextContent  (As written in html page line after the line). (tag style hidden div tag also visible here)

let TextContent=para.textContent;
console.log("\n"+TextContent);

// get and set attributes

let imas=document.querySelector("img");

console.dir(imas);

console.log(imas.getAttribute('id'));
imas.setAttribute('id','imagess')
console.log(imas.getAttribute('id'));
