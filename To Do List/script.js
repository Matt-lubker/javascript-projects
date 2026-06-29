function addTask() {
    let valueOfinput = document.querySelector("input").value

    let li = document.createElement("li")
    li.innerHTML = valueOfinput + '<span onclick="deleteTask(this)">❌</span>'
    
    document.querySelector("ul").appendChild(li)
 
    valueOfinput = ''
}

function deleteTask(li){
    li.parentElement.remove()

}