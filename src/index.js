import "./style.css";
import {todo, project, note, checklist} from "./todo-create.js";
import {displayController} from "./display-controller";

let projectList = [];
let defaultProject = project("Default", "Default project");
projectList.push(defaultProject);

displayController.initialSetup(projectList);