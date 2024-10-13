// Selecting necessary elements
const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

let currentTask = null;

// Add or update task
addTaskButton.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a valid task!');
    return;
  }

  if (currentTask) {
    updateTask(taskText);
  } else {
    createTask(taskText);
  }

  taskInput.value = '';
  addTaskButton.textContent = 'Add';
  currentTask = null;
});

// Create new task
function createTask(taskText) {
  const li = document.createElement('li');
  li.innerHTML = `
    <span>${taskText}</span>
    <div class="task-buttons">
      <button class="edit-btn" onclick="editTask(this)"><i class="fas fa-edit"></i></button>
      <button class="delete-btn" onclick="removeTask(this)"><i class="fas fa-trash-alt"></i></button>
    </div>
  `;
  taskList.appendChild(li);
}

// Edit task
function editTask(button) {
  const li = button.closest('li');
  taskInput.value = li.querySelector('span').textContent;
  addTaskButton.textContent = 'Update';
  currentTask = li;
}

// Update task content
function updateTask(taskText) {
  currentTask.querySelector('span').textContent = taskText;
}

// Remove task
function removeTask(button) {
  const li = button.closest('li');
  taskList.removeChild(li);
}