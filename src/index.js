import { pl } from 'date-fns/locale';
import './style.css';
import {docEl} from './documentElements';
import { compareAsc, format } from "date-fns";


let projectsObj = {Home : []};

//function to create new project

docEl.add.onclick = function(name) {
  docEl.modal.showModal();
  docEl.input.focus();
}

for (const element of docEl.closeModal) {
  element.addEventListener("click", () => {
  docEl.modal.close();
});
}


docEl.submitProject.addEventListener("click", (event) => {
  event.preventDefault();
  projectsObj[docEl.input.value] = [];
  docEl.project.innerHTML = '';
  for (const property in projectsObj)  {

  createNewProject(property);
  }
  docEl.input.value = '';
  docEl.modal.close();
});


function createNewProject (name) {
  const i = name;

  const ul = document.createElement('ul');
  const plus = document.createElement('li');
  plus.classList.add(i);
  plus.classList.add('plus');
  plus.textContent = 'plus';
  plus.addEventListener("click", () =>  {

    docEl.taskModal.showModal();
    docEl.input.focus();
    const arrValues = projectsObj[`${i}`];

    docEl.submitTask.addEventListener("click", (event) => {
      arrValues.push([docEl.nameInput.value, docEl.descriptionInput.value, docEl.dueDateInput.value, docEl.priorityInput.value]);
      docEl.modal.close();
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

  docEl.project.append(ul); 
}



function generateTask  (task, description, dueDate, priority) {
  // Create the card element
  const card = document.createElement("article");
  card.classList.add("card");

  // Create the header
  const header = document.createElement("header");
  header.classList.add("title");

  // Create the task title
  const taskTitle = document.createElement("h2");
  taskTitle.textContent = task;

  // Create the edit icon
  const editIcon = document.createElement("div");
  editIcon.classList.add("edit");
  editIcon.textContent = "edit";

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
  docEl.cardContainer.appendChild(card);
}