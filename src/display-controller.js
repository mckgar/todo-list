const displayController = (() => {
  const initialSetup = (projectList) => {
    const body = document.querySelector("body");
    const content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);

    content.appendChild(__sidebarCreate());
    content.appendChild(__projectsMain(projectList));
  };
  const __sidebarCreate = () => {
    const sidebar = document.createElement("nav");
    sidebar.id = "sidebar";

    const title = document.createElement("h1");
    title.textContent = "title tk"
    const projectsLink = document.createElement("div");
    projectsLink.textContent = "Projects";
    const notesLink = document.createElement("div");
    notesLink.textContent = "Notes";
    const settingsLink = document.createElement("div");
    settingsLink.textContent = "Settings";
    
    sidebar.appendChild(title);
    sidebar.appendChild(projectsLink);
    sidebar.appendChild(notesLink);
    sidebar.appendChild(settingsLink);
    return sidebar;
  };

  const __projectsMain = (projectsList) => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Projects";
    main.appendChild(title);

    for(let project of projectsList) {
      main.appendChild(__createProjectCard(project));
    }

    const addNewProject = document.createElement("div");
    addNewProject.classList.add("add", "new-project");
    main.appendChild(addNewProject);

    return main;
  };

  const __createProjectCard = (project) => {
    const card = document.createElement("div");
    card.classList.add("card", "project");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = project.getTitle();
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = project.getDescription();

    card.appendChild(title);
    card.appendChild(description);

    return card;
  };

  const projectFocus = (project) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__projectFocusMain(project));
  }

  const __projectFocusMain = (project) => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = project.getTitle();
    main.appendChild(title);

    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = project.getDescription();


    for(let todo of project.getTodoList()) {
      main.appendChild(__createTodoCard(todo));
    }

    const addNewTodo = document.createElement("div");
    addNewTodo.classList.add("add", "new-todo");
    main.appendChild(addNewTodo);

    return main;
  };

  const __createTodoCard = (todo) => {
    const card = document.createElement("div");
    card.classList.add("card todo");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = todo.getTitle();
    const type = document.createElement("div");
    typeclassList.add("type");
    description.classList.add(todo.getType());
    const priority = document.createElement("p");
    priority.classList.add("priority");
    priority.textContent = todo.getPriority();
    const dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    dueDate.textContent = todo.getDueDate();

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(priority);
    card.appendChild(dueDate);

    return card;
  };

  const __deleteMain = () => {
    const content = document.querySelector("#content");
    const main = document.querySelector("#main");
    content.removeChild(main);
  }

  return {initialSetup};
})();

export {displayController};