const addbtn=document.getElementById("add")
const key=document.getElementById("key")
 let arr = JSON.parse(localStorage.getItem("all")) || [];
 let id=0
  const content=document.getElementById("conten")
 function display()
  {
    id=0
       
      document.getElementById("conten").innerHTML=""
    
arr.map((item)=>{
       todostructure(item)
})
 }


  


  function removee(id)
  {
         arr.splice(id,1);
        localStorage.setItem("all",JSON.stringify( arr))
       display(arr)
  }

function toggleid(id)
{
    arr[id].completed = !arr[id].completed;
    localStorage.setItem("all", JSON.stringify(arr)); // update todo in localstorage
    displayTodo();
  }


  function todostructure(item)
  {
     
     let divv=document.createElement("div")

    
    divv.setAttribute("class","single");
      divv.setAttribute("id",id++)
      
    divv.innerHTML=`
                     
                     <div> <p>→${item.data.toUpperCase()}</p></div>
                     <input type="checkbox" name="" id="tick">
                     <button ">REMOVE</button>
     
      `
    
                let btn=divv.children[2]
                let inp=divv.children[1]
        btn.addEventListener("click",(e)=>{
               e.target.parentElement.remove()
               let c=e.target.parentElement.id
              removee(c)
              
        })
      inp.addEventListener("click",(e)=>{
            let c=e.target.parentElement.id
            
    
       divv.children[0].classList.toggle("completed")
    
          
           toggleid(c)
      })
      
    document.getElementById("conten").appendChild(divv)
    if(item.completed)
    {
        divv.children[0].classList.toggle("completed");
        inp.setAttribute("checked", true);
    }
  }


addbtn.addEventListener("click",()=>{
    let data=key.value;
    if(data==="")
      {
        alert("ENTER YOUR CHOICE")
       
      }
     
    
  else{
    arr.push({data,completed:false})
  localStorage.setItem("all",JSON.stringify( arr))
      display()
  key.value=""
  }
   
})
 
display()
