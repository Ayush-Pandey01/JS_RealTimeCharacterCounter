let data = document.getElementById("input");
let  Remain = document.querySelector("#Remain");
let  Total = document.querySelector("#Total");



data.addEventListener("keyup",()=>{
    console.log("hello");
    updatePage();
});

function updatePage(){
     Total.innerText = data.value.length;
      Remain.innerText = data.getAttribute("maxlength")-data.value.length;
}