const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function createTaskItem(task, index) {
  const li = document.createElement('li');
  li.classList.add('task__item');
  
  const div = document.createElement('div');
  div.classList.add('task-info__container');
  
  const span = document.createElement('span');
  span.classList.add('task-type');
  const typeLowerCase = task.type.toLowerCase();
  if (typeLowerCase === 'urgente') {
    span.classList.add('span-urgent');
  } else if (typeLowerCase === 'importante') {
    span.classList.add('span-important');
  } else {
    span.classList.add('span-normal');
  }
  
  const p = document.createElement('p');
  p.textContent = task.title;
  
  const button = document.createElement('button');
  button.classList.add('task__button--remove-task');
  button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>';
  
  div.appendChild(span);
  div.appendChild(p);
  
  li.appendChild(div);
  li.appendChild(button);
  
  button.addEventListener('click', function() {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
      renderElements(tasks);
    }
  });
  
  return li;
}

function renderElements(tasks) {
  const tasksList = document.querySelector('.tasks__list');
  tasksList.innerHTML = '';
  
  tasks.forEach(task => {
    const taskItem = createTaskItem(task);
    tasksList.appendChild(taskItem);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const addTaskButton = document.querySelector('.form__button--add-task');
  const inputTitle = document.getElementById('input_title');
  const selectPriority = document.querySelector('.form__input--priority');

  addTaskButton.addEventListener('click', function(event) {
    event.preventDefault();

    const title = inputTitle.value.trim();
    const type = selectPriority.value;

    if (title === '' || type === '') {
      alert('Por favor, preencha o título e selecione o tipo da tarefa.');
      return;
    }

    const newTask = { title: title, type: type };
    tasks.push(newTask);
    renderElements(tasks);
    inputTitle.value = '';
    selectPriority.value = '';
  });
});

renderElements(tasks);
