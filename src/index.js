import { pl } from 'date-fns/locale';
import './style.css';
import { compareAsc, format } from "date-fns";



//function to create new project
const add = document.querySelector('.add');
const modal = document.querySelector('#project');
const closeModal = document.querySelector(".close-button");
const submitProject = document.querySelector("#submit-project");
const input = document.querySelector('#project-name');

add.onclick = function(name) {
  modal.showModal();
}

closeModal.addEventListener("click", () => {
  modal.close();
});

submitProject.addEventListener("click", (event) => {
  event.preventDefault();
  const temp = input.value;
  createNewProject(temp);
  input.value = '';
modal.close();
  plus();
});
   
      

function createNewProject (name) {
  const nav = document.querySelector('nav');
  const i = name;

  const ul = document.createElement('ul');
  const plus = document.createElement('li');
  plus.classList.add(i);
  plus.classList.add('plus');
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
function plus()  {
  const plusarr = document.querySelectorAll('.plus');

for (const element of plusarr) {
  const plus = element.getAttribute('class');
  const temp = document.getElementsByClassName(plus);
  const plusEl = temp[0];
  const cardList = plusEl.closest('.card-list');


  if (plusEl.getAttribute('listener') !== 'true') {
  plusEl.setAttribute('listener', true);
  plusEl.addEventListener("click", (event) => {
  console.log(plusEl);
  });
}


}
}
plus();


function createNewTask  (parentElement, task)  {

}

//add button functionality


function getCard(element) {

}



  // modal


  