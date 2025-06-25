let input = document.getElementById('input')

let tasks = document.getElementById('tasks')

let tasksArray = []

function addTask() {
    let task = input.value;
    if (task === '') {
        alert('Please enter a task');
        return;
    }
    tasksArray.push(task.trim());
    input.value = '';

    render();
}

function render() {
    tasks.innerHTML = ''

    for (let i = 0; i < tasksArray.length; i++) {
        let p = document.createElement('p')
        p.innerText = tasksArray[i]
        tasks.appendChild(p)
    }
}

function clearTasks() {
    tasksArray = [];
    render();
}