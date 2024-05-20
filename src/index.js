import { pl } from 'date-fns/locale';
import './style.css';
import { compareAsc, format } from "date-fns";


let projectObj = {'home' : []}
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
  createNewProject(input.value);
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
  plus.textContent = 'plus';
  
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
    event.preventDefault();
    createNewTask()
  });
}


}
}
plus();


function createNewTask  (task, description, dueDate, priority) {
  // Create the main card container
  const cardContainer = document.querySelector("section");
  cardContainer.classList.add("card-list");

  // Create the card element
  const card = document.createElement("article");
  card.classList.add("card");

  // Create the header
  const header = document.createElement("header");
  header.classList.add("title");

  // Create the task title
  const taskTitle = document.createElement("h2");
  taskTitle.textContent = task;

  const plusIcon = document.createElement("div");
  plusIcon.classList.add("plus");
  plusIcon.textContent = "plus";

  // Append the task title and plus icon to the header
  header.appendChild(taskTitle);
  header.appendChild(plusIcon);

  // Create the task info section
  const infoSection = document.createElement("section");
  infoSection.classList.add("todo-info");

  // Create the description element
  const descriptionElement = document.createElement("div");
  descriptionElement.classList.add("description");
  const descriptionText = document.createElement("p");
  descriptionText.textContent = description;
  descriptionElement.appendChild(descriptionText);

  // Create the due date element
  const dueDateElement = document.createElement("div");
  dueDateElement.classList.add("due-date");
  dueDateElement.textContent = dueDate;

  // Create the priority element
  const priorityElement = document.createElement("div");
  priorityElement.classList.add("priority");
  priorityElement.textContent = priority;

  // Create the delete element
  const deleteElement = document.createElement("div");
  deleteElement.classList.add("delete");
  deleteElement.textContent = "delete";

  // Append the task info elements to the info section
  infoSection.appendChild(descriptionElement);
  infoSection.appendChild(dueDateElement);
  infoSection.appendChild(priorityElement);
  infoSection.appendChild(deleteElement);

  // Append the header and info section to the card
  card.appendChild(header);
  card.appendChild(infoSection);

  // Append the card to the card container
  cardContainer.appendChild(card);
}
const test = {test : ['test', 'test', 'test', 'test']};

createNewTask(test.test[0], test.test[1], test.test[2], test.test[3], );

//add button functionality
const w = {one : [2, 5]};
const y = w;
let z = 2;
w.one[0]++;
console.log(w.one,y.one,z);

function getCard(element) {

}



  // modal


  