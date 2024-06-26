import { pl } from 'date-fns/locale';
import './style.css';
import {docEl} from './documentElements';
import { compareAsc, format } from "date-fns";


let projectsObj = {Home : [["example", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta nulla magni ut excepturi quaerat cum similique libero voluptates doloribus? Accusantium numquam omnis sapiente eos praesentium id deserunt! Inventore, officiis cupiditate.", "2024-12-24", "low"]]};

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

function clearInput() {
  docEl.nameInput.value = '';
  docEl.descriptionInput.value = '';
  docEl.dueDateInput.value =  '';
  docEl.priorityInput.value = '';
}


function createNewProject (name) {
  const i = name;
  const ul = document.createElement('ul');
  const plus = document.createElement('li');
  plus.classList.add(i);
  plus.classList.add('plus');
  plus.textContent = 'plus';
  plus.addEventListener("click", () =>  {
    const projName = plus.getAttribute("class").split(' ')[0];
    console.log(projName);
    docEl.taskModal.showModal();
    docEl.input.focus();
    const arrValues = projectsObj[`${projName}`];
  console.log(projName);

  docEl.submitTask.addEventListener("click", (event) => {
    if (docEl.nameInput.value) {
      arrValues.push([docEl.nameInput.value, docEl.descriptionInput.value, docEl.dueDateInput.value, docEl.priorityInput.value]);
    docEl.modal.close();
    docEl.section.innerHTML = '';
    clearInput(); 
    console.log(projName);
    for (const element of arrValues)  {
      generateTask(element[0], element[1], element[2], element[3], `${i}`);
    }
   
    }
     
     console.log(projName);
  });
    
  });      


  ul.append(plus);

  const li = document.createElement('li');
  li.innerText = i
  li.addEventListener("click", () =>  {
    const arrValues = projectsObj[`${i}`];

    
    docEl.section.innerHTML = '';
    for (const element of arrValues)  {
      generateTask(element[0], element[1], element[2], element[3], `${i}`);
    }
  });
  ul.append(li);

  const remove = document.createElement('li');
  remove.classList.add('delete');
  remove.textContent = 'delete';
  ul.append(remove);

  docEl.project.append(ul); 
}



function generateTask  (task, description, dueDate, priority, name) {
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
  header.appendChild(editIcon);

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
  deleteElement.setAttribute('project', name);
  deleteElement.addEventListener("click", ()  =>  {


  const arr = [`${task}`, `${description}`, `${dueDate}`, `${priority}`];

  projectsObj[`${name}`].splice(arrayEquals(projectsObj[`${name}`], arr), 1);

  docEl.section.innerHTML = '';
  for (const element of projectsObj[`${name}`])  {
    generateTask(element[0], element[1], element[2], element[3], `${name}`);
  }

  console.log(arrayEquals(projectsObj["Home"], arr));
  console.log(projectsObj);
});
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

function arrayEquals(a, b) {
let i = 0;
let bool = true;

    while(i <= a.length && Array.isArray(a[i]) &&
    Array.isArray(b) &&
    a[i].length === b.length && bool)  {
      if  (a[i].every((val, index) => val === b[index]))  {
        bool = false;
      } else i++;
    }
    return i;
  }