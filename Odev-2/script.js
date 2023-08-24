let taskDOM = document.querySelector("#task");  
let listDOM = document.querySelector("#list"); 
let allLiDOM = document.querySelectorAll("li"); 



function removeElement(erase) { 
    erase.remove();            
    eraseStrorage(erase);
}



function markElement(){
    this.classList.toggle("checked");
}



let closeButton = `<button 
onclick="removeElement(parentNode)" 
style="padding: 13px;" type="button" 
class="close" 
data-dismiss="toast"
aria-label="Close">
<span aria-hidden="true">&times;</span>
</button>`


allLiDOM.forEach(e => {
    e.addEventListener("click", markElement);
    e.innerHTML += `${closeButton}`;
})



function newElement() {

    if (!taskDOM.value || !taskDOM.value.trim()) {
        console.log("Listeye boş ekleme yapamazsınız!");
        $(".error").toast('show') 
    }

    else {

        let liDOM = document.createElement("li"); 
        

        listDOM.append(liDOM); 
                                
        console.log(`Listeye eklendi. Girilen değer: ${taskDOM.value}`)
        

        $(".success").toast('show') 

        liDOM.innerHTML = `${taskDOM.value}${closeButton}`;


        liDOM.addEventListener("click", markElement);


        setStrorage()
    }  

    taskDOM.value = "";
}




function setStrorage(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));   
    toDoList.push(`${taskDOM.value}`);                            
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}



function eraseStrorage(erase){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));    
    if (toDoList.includes(erase.firstChild.textContent) == true) {  
        let indexbul = toDoList.findIndex(e =>                      
            e == erase.firstChild.textContent
            );
        toDoList.splice(indexbul, 1);                               
        localStorage.setItem("toDoList", JSON.stringify(toDoList)); 
    } 
}


function localSelf() {
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));    
    if (!toDoList) {toDoList = []};                                 
    localStorage.setItem("toDoList", JSON.stringify(toDoList));    
}


function localDOM(){
    let toDoList = JSON.parse(localStorage.getItem("toDoList"));
    toDoList.forEach((e, index) => {                               
        let liDOM = document.createElement("li");                  
        listDOM.append(liDOM);                                     
        liDOM.innerHTML = toDoList[index]                          
        liDOM.innerHTML += `${closeButton}`                         
        liDOM.addEventListener("click", markElement);               
    })
}

localSelf() 

localDOM()  