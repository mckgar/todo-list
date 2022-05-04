import './style.css';
import { todo, project, note } from './todo-create';
import displayController from './display-controller';

const projectList = [];
const noteList = [];

displayController.initialSetup(projectList);

const projectsLink = document.querySelector('#projects');
projectsLink.addEventListener('click', () => displayController.projectsOverview(projectList));

const notesLink = document.querySelector('#notes');
notesLink.addEventListener('click', () => displayController.notesOverview(noteList));

const settingsLink = document.querySelector('#settings');
settingsLink.addEventListener('click', () => displayController.settingsOverview());

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.return-projects')) {
    displayController.projectsOverview(projectList);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.new-project')) {
    const newProject = project('New Project', 'Description');
    projectList.push(newProject);
    displayController.addNewProject(newProject, projectList.length - 1);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div#project-edit')) {
    displayController.editProject(
      projectList[document.querySelector('#main').classList[0]],
      document.querySelector('#main'),
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div#project-delete')) {
    projectList.splice(document.querySelector('#main').classList[0], 1);
    displayController.projectsOverview(projectList);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.new-todo')) {
    const newTodo = todo('New Todo', 'Description', '2077-10-23', 5, 'Self-Improvement');
    const currentProject = projectList[document.querySelector('#main').classList[0]];
    currentProject.addTodo(newTodo);
    displayController.addNewTodo(newTodo, currentProject.getTodoList().length - 1);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.todo-edit')) {
    displayController.editTodo(
      projectList[document.querySelector('#main').classList[0]].getTodoList()[e.target.classList[0]],
      document.querySelector(`[class = '${e.target.classList[0]} card todo']`),
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.todo-delete')) {
    displayController.removeTodo(e.target.classList[0]);
    projectList[document.querySelector('#main').classList[0]].removeTodo(e.target.classList[0]);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('p.add-checklist-item')) {
    projectList[document.querySelector('#main').classList[0]].getTodoList()[e.target.classList[0]].addItem('New item');
    displayController.addChecklistItem(
      projectList[document.querySelector('#main').classList[0]].getTodoList()[e.target.classList[0]],
      e.target.classList[0],
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.checklist-edit')) {
    const cardIndex = e.target.parentNode.parentNode.parentNode.classList[0];
    const listIndex = e.target.classList[0];
    const currentTodo = projectList[document.querySelector('#main').classList[0]].getTodoList()[cardIndex];
    displayController.editChecklistItem(currentTodo, cardIndex, listIndex);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.checklist-delete')) {
    const cardIndex = e.target.parentNode.parentNode.parentNode.classList[0];
    const listIndex = e.target.classList[0];
    displayController.removeChecklistItem(cardIndex, listIndex);
    const currentTodo = projectList[document.querySelector('#main').classList[0]].getTodoList()[cardIndex];
    currentTodo.removeItem(listIndex);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.new-note')) {
    const newNote = note('New Note', 'Description');
    noteList.push(newNote);
    displayController.addNewNote(newNote, noteList.length - 1);
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.note-edit')) {
    displayController.editNote(
      noteList[e.target.classList[0]],
      document.querySelector(`[class = '${e.target.classList[0]} card note']`),
    );
  }
});

document.querySelector('#content').addEventListener('click', (e) => {
  if (e.target && e.target.matches('div.note-delete')) {
    displayController.removeNote(e.target.classList[0]);
    noteList.splice(document.querySelector('#main').classList[0], 1);
  }
});
