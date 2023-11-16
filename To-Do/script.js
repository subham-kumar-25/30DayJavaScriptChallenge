console.log("This is a test")

const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container") 

function addTask(){
    if(inputBox.value === ''){
        alert("You must write someting!")
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputBox.value = ""
    saveData()
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove()
        saveData()
    }
}, false)


// To store the task on local machine
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

// To retrive the data of the task from local machine
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data")
}
showTask()