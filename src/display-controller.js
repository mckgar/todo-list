const displayController = (() => {
  const initialSetup = (projectList) => {
    const body = document.querySelector("body");
    const content = document.createElement("div");
    content.id = "content";
    body.appendChild(content);

    content.appendChild(__sidebarCreate());
    content.appendChild(__projectsOverviewMain(projectList));
  };
  const __sidebarCreate = () => {
    const sidebar = document.createElement("nav");
    sidebar.id = "sidebar";

    const title = document.createElement("h1");
    title.textContent = "title tk"
    const links = document.createElement("div");
    links.id = "links";
    const projectsLink = document.createElement("div");
    projectsLink.textContent = "Projects";
    projectsLink.classList.add("link");
    projectsLink.id = "projects";
    const notesLink = document.createElement("div");
    notesLink.textContent = "Notes";
    notesLink.classList.add("link");
    notesLink.id = "notes";
    const settingsLink = document.createElement("div");
    settingsLink.textContent = "Settings";
    settingsLink.classList.add("link");
    settingsLink.id = "settings";
    
    sidebar.appendChild(title);
    links.appendChild(projectsLink);
    links.appendChild(notesLink);
    links.appendChild(settingsLink);
    sidebar.appendChild(links);
    return sidebar;
  };

  const projectsOverview = (projectsList) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__projectsOverviewMain(projectsList));
  };

  const __projectsOverviewMain = (projectsList) => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Projects";
    main.appendChild(title);

    const projects = document.createElement("div");
    projects.classList.add("projects");

    for(let i = 0; i < projectsList.length; i++) {
      projects.appendChild(__createProjectCard(projectsList[i]));
    }
    main.appendChild(projects);

    const addNewProjectBtn = document.createElement("div");
    addNewProjectBtn.classList.add("add", "new-project");
    addNewProjectBtn.textContent = "+";
    main.appendChild(addNewProjectBtn);

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

    card.addEventListener("click", () => projectFocus(project));

    return card;
  };

  const addNewProject = (project) => {
    const projects = document.querySelector(".projects")
    const newProject = __createProjectCard(project);
    projects.appendChild(newProject);
  };

  const projectFocus = (project) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__projectFocusMain(project));
  };

  const __projectFocusMain = (project) => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = project.getTitle();
    main.appendChild(title);

    const goBack = document.createElement("div");
    goBack.classList.add("return", "return-projects");
    goBack.textContent = "<- Go Back";
    main.appendChild(goBack);

    const projectInfo = document.createElement("div")
    projectInfo.classList.add("project-info");
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = project.getDescription();
    projectInfo.appendChild(description);


    for(let todo of project.getTodoList()) {
      projectInfo.appendChild(__createTodoCard(todo));
    }

    const addNewTodoBtn = document.createElement("div");
    addNewTodoBtn.classList.add("add", "new-todo");
    addNewTodoBtn.textContent = "+";
    projectInfo.appendChild(addNewTodoBtn);

    main.appendChild(projectInfo);

    return main;
  };

  const __createTodoCard = (todo) => {
    const card = document.createElement("div");
    card.classList.add("card", "todo");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = todo.getTitle();
    const type = document.createElement("div");
    type.classList.add("type", todo.getType());
    const priority = document.createElement("p");
    priority.classList.add("priority");
    priority.textContent = todo.getPriority();
    const dueDate = document.createElement("p");
    dueDate.classList.add("due-date");
    dueDate.textContent = todo.getDueDate();
    const status = document.createElement("div");
    status.classList.add("status", todo.getStatus());

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(priority);
    card.appendChild(dueDate);
    card.appendChild(status);

    card.addEventListener("click", () => __expandTodo(todo, card), {once: true});

    return card;
  };

  const addNewTodo = (todo) => {
    const todos = document.querySelector(".project-info")
    const newTodo = __createTodoCard(todo);
    todos.appendChild(newTodo);
  };

  const __expandTodo = (todo, card) => {
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = todo.getDescription();

    const checklist = document.createElement("ul");
    checklist.classList.add("checklist");

    for(let i = 0; i < todo.getList().length; i++) {
      checklist.appendChild(__createListItem(todo.getList()[i]));
    }

    card.appendChild(description);
    card.appendChild(checklist);

    card.addEventListener("click", () => __undoExpandTodo(todo, card), {once: true});
  };

  const __createListItem = (item) => {
    const card = document.createElement("div");
    card.classList.add("list-item");
    const name = document.createElement("p");
    name.classList.add("list-name");
    name.textContent = item.name;
    const status = document.createElement("div");
    status.classList.add("list-status", item.completed);

    card.appendChild(name);
    card.appendChild(status);
    return card;
  };

  const __undoExpandTodo = (todo, card) => {
    card.removeChild(card.lastElementChild);
    card.removeChild(card.lastElementChild);

    card.addEventListener("click", () => __expandTodo(todo, card), {once: true});
  };

  const notesOverview = (notesList) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__notesOverviewMain(notesList));
  };

  const __notesOverviewMain = (notesList) => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Notes";
    main.appendChild(title);

    const notes = document.createElement("div");
    notes.classList.add("notes");

    for(let i = 0; i < notesList.length; i++) {
      notes.appendChild(__createNoteCard(notesList[i]));
    }
    main.appendChild(notes);

    const addNewNoteBtn = document.createElement("div");
    addNewNoteBtn.classList.add("add", "new-note");
    addNewNoteBtn.textContent = "+";
    main.appendChild(addNewNoteBtn);

    return main;
  };

  const __createNoteCard = (note) => {
    const card = document.createElement("div");
    card.classList.add("card", "note");

    const title = document.createElement("h3");
    title.classList.add("title");
    title.textContent = note.getTitle();

    card.appendChild(title);

    card.addEventListener("click", () => __expandNote(note, card), {once: true});

    return card;
  };

  const addNewNote = (note) => {
    const notes = document.querySelector(".notes")
    const newNote = __createNoteCard(note);
    notes.appendChild(newNote);
  };

  const __expandNote = (note, card) => {
    const description = document.createElement("p");
    description.classList.add("description");
    description.textContent = note.getDescription();

    card.appendChild(description);

    card.addEventListener("click", () => __undoExpandNote(note, card), {once: true});
  };

  const __undoExpandNote = (note, card) => {
    card.removeChild(card.lastElementChild);

    card.addEventListener("click", () => __expandNote(note, card), {once: true});
  };

  const settingsOverview = () => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__settingsOverviewMain());
  };

  const __settingsOverviewMain = () => {
    const main = document.createElement("div");
    main.id = "main";

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = "Settings";
    main.appendChild(title);

    return main;
  }

  const __deleteMain = () => {
    const content = document.querySelector("#content");
    const main = document.querySelector("#main");
    content.removeChild(main);
  };

  return {initialSetup, projectsOverview, projectFocus, notesOverview, settingsOverview,
    addNewProject, addNewNote, addNewTodo};
})();

export {displayController};