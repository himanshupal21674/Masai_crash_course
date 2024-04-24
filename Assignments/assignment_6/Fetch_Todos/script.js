// JavaScript code for the Fetch Todos assignment

document.addEventListener('DOMContentLoaded', function() {
    fetchTodos();
});

async function fetchTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        const todos = await response.json();
        appendTodosToDOM(todos);
    } catch (error) {
        console.error('Failed to fetch todos:', error);
    }
}

function appendTodosToDOM(todos) {
    const todosContainer = document.getElementById('todos-container');
    todos.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.className = 'todo-item';
        todoItem.innerHTML = `
            <p><strong>Title:</strong> ${todo.title}</p>
            <p><strong>Completed:</strong> ${todo.completed}</p>
        `;
        todosContainer.appendChild(todoItem);
    });
}