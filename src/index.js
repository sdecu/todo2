import './style.css';
import { compareAsc, format } from "date-fns";

/*
<article class="card">
  <header class="title">
    <h2>task</h2>
    <div class="plus">plus</div>
  </header>
  <section class="todo-info">
    <div class="description">
      <p>Lorem ipsum dolor</p>
      <div class="delete">delete</div>
    </div>
    <div class="dueDate">12-06-24</div>
    <div class="priority">urgent</div>
  </section>
</article>
*/
let element = (function ()  {
  const section = document.querySelector('section');
  const card = document.createElement('article');
  const header = document.createElement('header');
  const projectNameHeading = document.createElement('h2');
  const plusText = document.createElement('div');
  const todo = document.createElement('div');
  const todoP = document.createElement('p');
  const todoDelete = document.createElement('div');

  return  {
    section,
    card,
    header,
    projectNameHeading,
    plusText,
    todo,
    todoP,
    todoDelete,
  }

})();

function test ()  {
 const section = element.section;
 const p = element.todoP;
 p.textContent = 'test';
 section.append(p);
}
test();
//function to create new project


function createNewProject (projectName) {

  

  card.classList.add('card');
  section.appendChild(card);

  header.classList.add('projectName');
  card.appendChild(header);

  projectNameHeading.textContent = projectName;
  header.appendChild(projectNameHeading);

  plusText.classList.add(`plus`);
  plusText.classList.add(Date.now());
  plusText.textContent = 'plus';
  header.appendChild(plusText);
  return {
    card
  }
  ;
}

//function to create new task

createNewProject('test');

function createNewTask  (element, task)  {
  const card = getCard(element)

  todo.classList.add('content');

  todoP.textContent = task;
  todo.appendChild(todoP);

  todoDelete.classList.add("delete");
  todoDelete.textContent = 'delete';
  todo.appendChild(todoDelete);

  card.appendChild(todo);
}

//add button functionality


function getCard(element) {
  const plus = element.getAttribute('class');
  const temp = document.getElementsByClassName(plus);
  const plusEl = temp[0];
  const card = plusEl.closest('.card');
  console.log(card);
  return {
    card,
    
  }
}

const plusArr = document.querySelectorAll('.plus');

for (let element of plusArr) {
  element.addEventListener("click", () => {
    modal.showModal();
  });
}


  // modal

  (function() {
  const modal = document.querySelector("#modal");
  const closeModal = document.querySelector(".close-button");
  const submitTask = document.querySelector("#submit-task")
  
  
  closeModal.addEventListener("click", () => {
    modal.close();
  });

  submitTask.onclick = function() {
    createNewTask(element, 'example')
  }
  })();