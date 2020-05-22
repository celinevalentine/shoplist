let todoForm = document.querySelector('#add-todo');
let todoList = document.querySelector('#todos');

//retrieve from localStorage
// use let not const, bc later will be removed
let savedTodos = JSON.parse(localStorage.getItem('todos')) || [];
for (let i = 0; i < savedTodos.length; i++) {
    let newTodo = document.createElement('li');
    // add spn so "delete" btn doesn't get added
    let todoTextSpan = document.createElement('span');
    newTodo.innerText = savedTodos[i].addText;
    addTextSpan.innerText = saveTodos[i].addText;
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Delete';
    newTodo.appendChild(todoTextSpan); //appeend todo text span to newTodo li
    newTodo.appendChild(removeBtn);

    newTodo.isCompleted =
        savedTodos[i].isCompleted ? true :
        false;
    if (newTodo.isCompleted) {
        newTodo.style.textDecoration = 'line-through';
    }
    todoList.appendChild(newTodo);
}
//submit and reset todo
todoForm.addEventListener('submit', function(e) {
    e.preventDefault();

    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Delete';
    let newTodo = document.createElement('li');
    let todoTextSpan = document.createElement('span');
    todoTextSpan.innerText = document.querySelector('#addText').value;

    newTodo.appendChild(todoTextSpan);
    newTodo.appendChild(removeBtn);
    todoList.appendChild(newTodo);
    todoForm.reset();

    //save to localStorage
    savedTodos.push({ addText: todoTextSpan.innerText, isCompleted: false });
    localStorage.setItem('todos', JSON.stringify(savedTodos));
});

//style completed todo and delete
todoList.addEventListener('click', function(e) {
    const targetTagToLowerCase = e.target.tagName.toLowerCase();

    // add logic to mark todos as done and commit those changes to localStorage
    if (targetTagToLowerCase === 'span') {
        console.log('done!');
        let clickedListItem = e.target;
        if (!clickedListItem.isComplete) {
            clickedListItem.style.textDecoration = 'line-through';
            clickedListItem.isCompleted = true;
        } else {
            clickedListItem.style.textDecoration = 'none';
            clickedListItem.isCompleted = false;
        }
        // loop over savedTodos to find the correct todo by its innterText and marked for complete or incomplete
        for (let i = 0; i < savedTodos.length; i++) {
            if (savedTodos[i].addText === clickedItem.innerText) {
                // change isCompleted for the todo in the array
                savedTodos[i].isCompleted = clickedItem.isCompleted;
                // store the modified array changed to localStorage
                localStorage.setItem('todos', JSON.stringify(savedTodos));
            }
        }
    }
    // handle remove button click
    if (targetTagToLowerCase === 'button') {
        e.target.parentElement.remove(li);
        let todoSpan = e.target.parentElement.children[0];
        // temperary updated array vairable that we later store to local Storage
        let updatedArray = [];
        for (let i = 0; i < savedTodos.length; i++) {
            if (savedTodos[i].addText !== todoSpan.innerText) {
                // only keep todos are not matching the one was deleted in the updatedArray
                updatedArray.push(savedTodos[i]);
            }
        }
        savedTodos = updatedArray;
        localStorage.setItem('todos', JSON.stringify(updatedArray));
    }
});