

//DOCUMENT TARGET TYPE

//BY TAG

//queryselector will only have effect on the first one of the same tag/class/id

// const heading_1 = document.querySelector("h1")
// heading_1.innerHTML = "This is the new Title"
// console.log()


//queryselectorAll is used to change all the tags/class/id that are thesame with a forEach functions



// const heading = document.querySelectorAll("h1")

// //console.log(heading);

// heading.forEach((e,i) => {
//   e.innerHTML = `This a modified version ${i}` 
// });

//BY CLASS

// const heading = document.querySelector(".header")
// heading.innerHTML = "change to class";

//BY ID

// const heading = document.getElementById("header")
// console.log(header.innerHTML);


const header = document.getElementById("header");
const button = document.getElementById("btn")

button.addEventListener("click",()=>{
if (header.style.backgroundColor === 'cyan'){
  header.style.backgroundColor = "white"
}
else{
header.style.backgroundColor = "cyan"
}

  
})

 
 