const form = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const taskList = document.getElementById('taskList');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const taskText = taskInput.value.trim();
  const dateValue = taskDate.value;

  if (taskText === '' || dateValue === '') return;

  // Create task element
  const li = document.createElement('li');
  li.className = 'task';

  const taskInfo = document.createElement('div');
  taskInfo.className = 'task-info';

  const taskName = document.createElement('span');
  taskName.textContent = taskText;

  const taskDateEl = document.createElement('span');
  taskDateEl.className = 'task-date';
  taskDateEl.textContent = `Due: ${dateValue}`;

  taskInfo.appendChild(taskName);
  taskInfo.appendChild(taskDateEl);

  const deleteBtn = document.createElement('button');
deleteBtn.textContent = 'Delete';
deleteBtn.className = 'delete-btn';  // add this line
deleteBtn.addEventListener('click', () => {
  taskList.removeChild(li);
});


  li.appendChild(taskInfo);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = '';
  taskDate.value = '';
});