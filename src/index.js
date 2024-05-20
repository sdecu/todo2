import './style.css';
import { compareAsc, format } from "date-fns";



//function to create new project
const add = document.querySelector('.add')
  
add.onclick = function(name)  {
  const modal = document.querySelector('#project');
    modal.showModal();

    const closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", () => {
      modal.close();
    })
    
  const submitProject = document.querySelector("#submit-project");
  const input = document.querySelector('#project-name');
  submitTask.addEventListener("click", (event) => {
    let temp = input.value;
    createNewProject(temp);
  });
}

   
      

function createNewProject (name) {
  const nav = document.querySelector('nav');
  const i = name;

  const ul = document.createElement('ul');
  const plus = document.createElement('li');
  plus.classList.add(i);
  plus.classList.add(Date.now());
  plus.textContent = 'plus'
  ul.append(plus);

  const li = document.createElement('li');
  li.innerText = i;
  ul.append(li);

  const remove = document.createElement('li');
  remove.classList.add('delete');
  remove.textContent = 'delete';
  ul.append(remove);

  nav.append(ul); 
}

//function to create new task

/*
<section class="card-list">
  <article class="card">
    <header class="title">
      <h2>task</h2>
      <div class="plus">plus</div>
    </header>
    <section class="todo-info">
      <div class="description">
        <p>120</p>
      </div>
      <div class="due-date">12-06-24</div>
      <div class="priority">urgent</div>
      <div class="delete">delete</div>
    </section>
  </article>
</section>

      function test() {
  const section = element.section;
  let p = element.p;
  p.textContent = 'test';
  p.classList.add('test');
  section.append(p);
}
test();
*/ 

add.onclick = function(name)  {
  const modal = document.querySelector('#project');
    modal.showModal();

    const closeModal = document.querySelector(".close-button");
    closeModal.addEventListener("click", () => {
      modal.close();
    })
    
  const submitProject = document.querySelector("#submit-project");
  const input = document.querySelector('#project-name');
  submitTask.addEventListener("click", (event) => {
    let temp = input.value;
    createNewProject(temp);
  });
}


function createNewTask  (parentElement, task)  {

}

//add button functionality


function getCard(element) {

}



  // modal


  