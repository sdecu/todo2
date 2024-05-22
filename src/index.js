import { pl } from 'date-fns/locale';
import './style.css';
import { compareAsc, format } from "date-fns";


let projectsObj = {Home : [['test', 'test', 'test', 'test']]};



//function to create new project
const add = document.querySelector('.add');
const modal = document.querySelector('#project');
const closeModal = document.querySelectorAll(".close-button");
const submitProject = document.querySelector("#submit-project");
const input = document.querySelector('#project-name');

add.onclick = function(name) {
  modal.showModal();
  input.focus();
}

for (const element of closeModal) {
  element.addEventListener("click", () => {
  modal.close();
});
}


submitProject.addEventListener("click", (event) => {
  event.preventDefault();
  projectsObj[input.value] = [];
  const project = document.querySelector('#projects');
  project.innerHTML = '';
  for (const property in projectsObj)  {

  createNewProject(property);
  }
  input.value = '';
modal.close();
});
   
    const taskModal = document.querySelector('#task');
    const submitTask = document.querySelector('#submit-task');
    const nameInput = document.querySelector('#task-name');
    const descriptionInput = document.querySelector('#task-description');
    const dueDateInput = document.querySelector('#due-date');
    const priorityInput = document.querySelector('#priority');

function createNewProject (name) {
  const projects = document.querySelector('#projects');
  const i = name;

  const ul = document.createElement('ul');
  const plus = document.createElement('li');
  plus.classList.add(i);
  plus.classList.add('plus');
  plus.textContent = 'plus';
  plus.addEventListener("click", () =>  {

    taskModal.showModal();
    input.focus();
    const arrValues = projectsObj[`${i}`];

    submitTask.addEventListener("click", (event) => {
      arrValues.push([nameInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value]);
      modal.close();
      for (const element of arrValues)  {

        generateTask(element[0], element[1], element[2], element[3]);
      }
    });
  });
  
  ul.append(plus);

  const li = document.createElement('li');
  li.innerText = i
  li.addEventListener("click", () =>  {
    const arrValues = projectsObj[`${i}`];

    const section = document.querySelector(".card-list");
    section.innerHTML = '';
    for (const element of arrValues)  {

      generateTask(element[0], element[1], element[2], element[3]);
    }
  });
  ul.append(li);

  const remove = document.createElement('li');
  remove.classList.add('delete');
  remove.textContent = 'delete';
  ul.append(remove);

  projects.append(ul); 
}

//function to create new task

/*
    <dialog class="modal" id="task">
      <h2>Create a new task</h2>
      <button class="button close-button">close</button>
      <form class="form" method="dialog">
        <label>Task Name: <input id="task-name" type="text"></label>
        <label>Description: <input id="task-description" type="text"></label>
        <label>Due date: <input id="due-date" type="text"></label>
        <label>priority: <input id="priority" type="text"></label>
        <button id="submit-task" class="button" type="submit">submit</button>
      </form>
    </dialog>
*/ 


function generateTask  (task, description, dueDate, priority) {
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

  // Create the plus icon
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




//add button functionality


function getCard(element) {

}



  // modal