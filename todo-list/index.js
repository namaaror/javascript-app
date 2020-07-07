// Query Selectors
const input = document.querySelector('.todo-input');
const btn = document.querySelector('.todo-button');
const list = document.querySelector('.todo-list');

// Event Listeners
btn.addEventListener('click', addTodoList);
list.addEventListener('click', deleteCheck);

// Functions
function addTodoList(event) {
    event.preventDefault();
    // Create Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // Create Li
    const listVal = document.createElement('li');
    listVal.innerText = input.value;
    listVal.classList.add('todo-item');
    todoDiv.appendChild(listVal);
    // Check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    // Trash button
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    list.appendChild(todoDiv);

    // Clear values
    input.value = '';
}

function deleteCheck(event) {
    const item = event.target;

    // Delete clicked
    if (item.classList[0] === 'trash-btn') {
        const toDo = item.parentElement;
        toDo.classList.add("fall");
        toDo.addEventListener('transitionend', function() {
           toDo.remove();
        });
    }

    // Check clicked
    if (item.classList[0] === 'complete-btn') {
        const toDo = item.parentElement;
        toDo.classList.toggle("completed");
    }
}
