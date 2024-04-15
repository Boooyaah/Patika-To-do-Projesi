const ekle=document.querySelector("#button-addon2")
const searchInput=document.querySelector("#headerInput")
const list=document.querySelector("#list")
const lis=document.querySelectorAll("ul")

ekle.addEventListener("click",handleAdd)

function handleAdd() {
  
    const newLi=document.createElement("li")
    const classList=["bg-slate-300","break-words"]
   
    newLi.textContent=` ${searchInput.value} `
    
   if(searchInput.value!=0){
    list.appendChild(newLi)
    newLi.classList.add(...classList)
   }else{
    alert("Boş To do Girilemez..! Lütfen Bir şeyler yazınız...")
   }

}
lis.forEach(eleman=>{
    eleman.addEventListener("click",e=>{
       e.target.classList.toggle("line-through")
       
    })
    
})

