export const docEl = (function() {
    const add = document.querySelector('.add');
    const modal = document.querySelector('#project');
    const closeModal = document.querySelectorAll(".close-button");
    const submitProject = document.querySelector("#submit-project");
    const input = document.querySelector('#project-name');
    const project = document.querySelector('#projects');
    const taskModal = document.querySelector('#task');
    const submitTask = document.querySelector('#submit-task');
    const nameInput = document.querySelector('#task-name');
    const descriptionInput = document.querySelector('#task-description');
    const dueDateInput = document.querySelector('#due-date');
    const priorityInput = document.querySelector('#priority');
    const section = document.querySelector(".card-list");
    const cardContainer = document.querySelector("section");
  
    return {
      add,
      modal,
      closeModal,
      submitProject,
      input,
      project,
      taskModal,
      submitTask,
      nameInput,
      descriptionInput,
      dueDateInput,
      priorityInput,
      section,
      cardContainer
    };
  })();