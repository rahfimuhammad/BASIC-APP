document.querySelector("#push").onclick = function (){
    if(document.querySelector("#taskInput").value.length == 0) {
        alert("Please Enter a Task")
    }
    else {
        document.querySelector("#tasks").innerHTML += `
        <div class="task">
            <span id="taskname">
                ${document.querySelector("#taskInput").value}
            </span>
            <button class="delete">
                <i class="far fa-trash-alt></i>
            </button>
        </div>`;
    
        let currentTasks = document.querySelectorAll(".delete")
        for (var i = 0; i < currentTasks.length; i++) {
            currentTasks[i].onclick = function () {
                this.parentNode.remove()
            }
        }
    }
    document.querySelector("#taskInput").value = ""

}