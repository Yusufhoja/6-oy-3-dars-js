let bt=document.querySelector("button");
let h1=document.querySelector("p");

bt.addEventListener("click", ()=>{
    let inp=document.querySelector("input").value
    localStorage.setItem('name', inp);
    h1.textContent=inp;
});
h1.textContent=localStorage.getItem('name')


