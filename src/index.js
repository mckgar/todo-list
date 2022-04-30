import "./style.css";
import {todo, project, note, checklist} from "./todo-create.js";
import {displayController} from "./display-controller";

let projectList = [];
let noteList = [];

let defaultProject = project("Default", "Default project");
let firstTodo = todo("First todo", "This todo will help set up the layout of the site", "saturday", 5, "Exercise");
firstTodo.addItem("Write a checklist");
firstTodo.addItem("Add items to checklist");
firstTodo.addItem("Put the todo in the project");
firstTodo.addItem("Get the layout working");
defaultProject.addTodo(firstTodo);
let secondTodo = todo("Second todo", "This todo will also help set up the layout of the site", "12-23-45", 5, "Exercise");
secondTodo.addItem("Write a checklist");
secondTodo.addItem("Also help");
defaultProject.addTodo(secondTodo);
projectList.push(defaultProject);

let default2 = project("Test", "This is a test");
let default3 = project("Layout Helper", "These are added to assit with layout creation");
let default4 = project("Get on the mostest correct track", "Yet another helper");
projectList.push(default2);
projectList.push(default3);
projectList.push(default4);

let note1 = note("Note tester", "Day 90687, I've somehow kept track of the day despite this being my first note. That is all, I'm just impressed.");
noteList.push(note1);
let note2 = note("Yet Another Note tester", "Day 7, I've somehow kept track of the day despite this being my second note. That is all, I'm just impressed.");
noteList.push(note2);

displayController.initialSetup(projectList);

const projectsLink = document.querySelector("#projects");
projectsLink.addEventListener("click", () => displayController.projectsOverview(projectList));

const notesLink = document.querySelector("#notes");
notesLink.addEventListener("click", () => displayController.notesOverview(noteList));

const settingsLink = document.querySelector("#settings");
settingsLink.addEventListener("click", () => displayController.settingsOverview());

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.return-projects")) {
    displayController.projectsOverview(projectList);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.new-project")) {
    const newProject = project("New Project", "Description");
    projectList.push(newProject);
    displayController.addNewProject(newProject);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.new-note")) {
    const newNote = project("New Note", "Description");
    noteList.push(newNote);
    displayController.addNewNote(newNote);
  }
});

document.querySelector("#content").addEventListener("click", function(e) {
  if(e.target && e.target.matches("div.new-todo")) {
    const newTodo = todo("New Todo", "Description", "anytime", 5, "self-improvement");
    projectList[document.querySelector("#main").classList[0]].addTodo(newTodo);
    displayController.addNewTodo(newTodo);
  }
});