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
      projects.appendChild(__createProjectCard(projectsList[i], i));
    }
    main.appendChild(projects);

    const addNewProjectBtn = document.createElement("div");
    addNewProjectBtn.classList.add("add", "new-project");
    addNewProjectBtn.textContent = "+";
    main.appendChild(addNewProjectBtn);

    return main;
  };

  const __createProjectCard = (project, index) => {
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

    card.addEventListener("click", () => projectFocus(project, index));

    return card;
  };

  const addNewProject = (project, index) => {
    const projects = document.querySelector(".projects")
    const newProject = __createProjectCard(project, index);
    projects.appendChild(newProject);
  };

  const editProject = (project, card) => {
    const projectInfo = document.querySelector(".project-info");

    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.name = "edit-title";
    editTitle.id = "edit-title";
    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.name = "edit-description";
    editDescription.id = "edit-description";
    const confirmBtn = document.createElement("div");
    confirmBtn.classList.add("editor");
    confirmBtn.id = "project-save";

    const title = document.querySelector("h2.title");
    editTitle.value = title.textContent;
    const description = document.querySelector(".project.description");
    editDescription.value = description.textContent;
    const editBtn = document.querySelector("#project-edit");

    card.removeChild(title);
    projectInfo.removeChild(description);
    card.removeChild(editBtn);
    card.appendChild(editTitle);
    projectInfo.appendChild(editDescription);
    card.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () =>{
      project.setTitle(editTitle.value);
      project.setDescription(editDescription.value);

      title.textContent = project.getTitle();
      description.textContent = project.getDescription();

      card.removeChild(editTitle);
      projectInfo.removeChild(editDescription);
      card.removeChild(confirmBtn);
      card.appendChild(title);
      projectInfo.appendChild(description);
      card.appendChild(editBtn);
    });
    
  };

  const projectFocus = (project, index) => {
    const content = document.querySelector("#content");
    __deleteMain();
    content.appendChild(__projectFocusMain(project, index));
  };

  const __projectFocusMain = (project, index) => {
    const main = document.createElement("div");
    main.id = "main";
    main.classList.add(index);

    const title = document.createElement("h2");
    title.classList.add("title");
    title.textContent = project.getTitle();
    main.appendChild(title);

    const goBack = document.createElement("div");
    goBack.classList.add("return", "return-projects");
    goBack.textContent = "<- Go Back";
    main.appendChild(goBack);

    const editBtn = document.createElement("div");
    editBtn.classList.add("editor");
    editBtn.id = "project-edit";
    main.appendChild(editBtn);

    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add("editor");
    deleteBtn.id = "project-delete";
    main.appendChild(deleteBtn);

    const projectInfo = document.createElement("div")
    projectInfo.classList.add("project-info");
    const description = document.createElement("p");
    description.classList.add("project", "description");
    description.textContent = project.getDescription();
    projectInfo.appendChild(description);


    for(let i = 0; i < project.getTodoList().length; i++) {
      projectInfo.appendChild(__createTodoCard(project.getTodoList()[i], i));
    }

    const addNewTodoBtn = document.createElement("div");
    addNewTodoBtn.classList.add("add", "new-todo");
    addNewTodoBtn.textContent = "+";
    main.appendChild(addNewTodoBtn);

    main.appendChild(projectInfo);

    return main;
  };

  const __createTodoCard = (todo, index) => {
    const card = document.createElement("div");
    card.classList.add(index, "card", "todo");

    const title = document.createElement("h3");
    title.classList.add(index, "title");
    title.textContent = todo.getTitle();
    const type = document.createElement("div");
    type.classList.add(index, "type");
    type.textContent = todo.getType();
    const priority = document.createElement("p");
    priority.classList.add(index, "priority");
    priority.textContent = todo.getPriority();
    const dueDate = document.createElement("p");
    dueDate.classList.add(index, "due-date");
    dueDate.textContent = todo.getDueDate();
    const status = document.createElement("div");
    status.classList.add(index, "status", todo.getStatus());

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(priority);
    card.appendChild(dueDate);
    card.appendChild(status);

    title.addEventListener("click", () => __expandTodo(todo, card), {once: true});

    return card;
  };

  const addNewTodo = (todo, index) => {
    const todos = document.querySelector(".project-info")
    const newTodo = __createTodoCard(todo, index);
    todos.appendChild(newTodo);
  };

  const __expandTodo = (todo, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement("p");
    description.classList.add(card.classList[0], "description");
    description.textContent = todo.getDescription();

    const checklist = document.createElement("ul");
    checklist.classList.add(card.classList[0], "checklist");

    const list = todo.getList();
    for(let i = 0; i < list.length; i++) {
      checklist.appendChild(__createListItem(list[i]));
    }

    card.appendChild(description);
    card.appendChild(checklist);

    title.addEventListener("click", () => __undoExpandTodo(todo, card), {once: true});

    const buttons = document.createElement("div");
    buttons.classList.add(card.classList[0], "buttons");
    const editBtn = document.createElement("div");
    editBtn.classList.add(card.classList[0], "editor", "todo-edit");
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add(card.classList[0], "editor", "todo-delete");
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
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
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);
    const checklist = document.querySelector(`[class = '${card.classList[0]} checklist']`)
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(checklist);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener("click", () => __expandTodo(todo, card), {once: true});
  };

  const editTodo = (todo, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`)

    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.name = "edit-title";
    editTitle.id = "edit-title";
    const editType = document.createElement("select");
    editType.name = "edit-type";
    editType.id = "edit-type";
    const optionExercise = document.createElement("option");
    optionExercise.textContent = "Exercise";
    editType.appendChild(optionExercise);
    const optionSelfImprovement = document.createElement("option");
    optionSelfImprovement.textContent = "Self-Improvement";
    editType.appendChild(optionSelfImprovement);
    const editPriority = document.createElement("select");
    editPriority.name = "edit-priority";
    editPriority.id = "edit-priority";
    const priority1 = document.createElement("option");
    priority1.textContent = "1";
    const priority2 = document.createElement("option");
    priority2.textContent = "2";
    const priority3 = document.createElement("option");
    priority3.textContent = "3";
    const priority4 = document.createElement("option");
    priority4.textContent = "4";
    const priority5 = document.createElement("option");
    priority5.textContent = "5";
    editPriority.appendChild(priority1);
    editPriority.appendChild(priority2);
    editPriority.appendChild(priority3);
    editPriority.appendChild(priority4);
    editPriority.appendChild(priority5);
    const editDueDate = document.createElement("input");
    editDueDate.type = "datetime-local";
    editDueDate.name = "edit-due-date";
    editDueDate.id = "edit-due-date";
    editDueDate.min = "2022-05-01";
    const editDescription = document.createElement("textarea");
    const confirmBtn = document.createElement("div");
    confirmBtn.classList.add("editor");
    confirmBtn.id = "todo-save";

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);
    editTitle.value = title.textContent;
    const type = document.querySelector(`[class = '${card.classList[0]} type']`);
    editType.value = type.textContent;
    const priority = document.querySelector(`[class = '${card.classList[0]} priority']`);
    editPriority.value = priority.textContent;
    const dueDate = document.querySelector(`[class = '${card.classList[0]} due-date']`);
    editDueDate.value = dueDate.textContent;
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    editDescription.value = description.textContent;
    const editBtn = document.querySelector(`[class = '${card.classList[0]} editor todo-edit`);

    card.removeChild(title);
    card.removeChild(type);
    card.removeChild(priority);
    card.removeChild(dueDate);
    card.removeChild(description);
    buttons.removeChild(editBtn);
    card.appendChild(editTitle);
    card.appendChild(editType);
    card.appendChild(editPriority);
    card.appendChild(editDueDate);
    card.appendChild(editDescription);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () =>{
      todo.setTitle(editTitle.value);
      todo.setType(editType.value);
      todo.setPriority(editPriority.value);
      todo.setDueDate(editDueDate.value);
      todo.setDescription(editDescription.value);

      title.textContent = todo.getTitle();
      type.textContent = todo.getType();
      priority.textContent = todo.getPriority();
      dueDate.textContent = todo.getDueDate();
      description.textContent = todo.getDescription();

      card.removeChild(editTitle);
      card.removeChild(editType);
      card.removeChild(editPriority);
      card.removeChild(editDueDate);
      card.removeChild(editDescription);
      buttons.removeChild(confirmBtn);
      card.appendChild(title);
      card.appendChild(type);
      card.appendChild(priority);
      card.appendChild(dueDate);
      card.appendChild(description);
      buttons.appendChild(editBtn);
    });
  };

  const removeTodo = (index) => {
    const projectInfo = document.querySelector(".project-info");
    const badChild = document.querySelector(`[class = '${index} card todo']`);
    projectInfo.removeChild(badChild);
    const childrenLength = projectInfo.childNodes.length;
    for(let i = parseInt(index) + 1; i < childrenLength; i++) {
      const currentChild = document.querySelector(`[class = '${i} card todo']`);
      currentChild.classList.replace(currentChild.classList[0], currentChild.classList[0] - 1);
      for(let j = 0; j < currentChild.childNodes.length; j++) {
        currentChild.childNodes[j].classList.replace(currentChild.childNodes[j].classList[0], currentChild.childNodes[j].classList[0] - 1);
      }
      if(currentChild.childNodes.length > 5) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(currentButtons.childNodes[0].classList[0], currentButtons.childNodes[0].classList[0] - 1);
        currentButtons.childNodes[1].classList.replace(currentButtons.childNodes[1].classList[0], currentButtons.childNodes[1].classList[0] - 1);
      }
    }
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
      notes.appendChild(__createNoteCard(notesList[i], i));
    }
    main.appendChild(notes);

    const addNewNoteBtn = document.createElement("div");
    addNewNoteBtn.classList.add("add", "new-note");
    addNewNoteBtn.textContent = "+";
    main.appendChild(addNewNoteBtn);

    return main;
  };

  const __createNoteCard = (note, index) => {
    const card = document.createElement("div");
    card.classList.add(index, "card", "note");

    const title = document.createElement("h3");
    title.classList.add(index, "title");
    title.textContent = note.getTitle();

    title.addEventListener("click", () => __expandNote(note, card), {once: true});

    card.appendChild(title);

    return card;
  };

  const addNewNote = (note, index) => {
    const notes = document.querySelector(".notes")
    const newNote = __createNoteCard(note, index);
    notes.appendChild(newNote);
  };

  const __expandNote = (note, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement("p");
    description.classList.add(card.classList[0], "description");
    description.textContent = note.getDescription();

    card.appendChild(description);

    title.addEventListener("click", () => __undoExpandNote(note, card), {once: true});

    const buttons = document.createElement("div");
    buttons.classList.add(card.classList[0], "buttons");
    const editBtn = document.createElement("div");
    editBtn.classList.add(card.classList[0], "editor", "note-edit");
    const deleteBtn = document.createElement("div");
    deleteBtn.classList.add(card.classList[0], "editor", "note-delete");
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
  };

  const __undoExpandNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener("click", () => __expandNote(note, card), {once: true});
  };

  const editNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`)

    const editTitle = document.createElement("input");
    editTitle.type = "text";
    editTitle.name = "edit-title";
    editTitle.id = "edit-title";
    const editDescription = document.createElement("input");
    editDescription.type = "text";
    editDescription.name = "edit-description";
    editDescription.id = "edit-description";
    const confirmBtn = document.createElement("div");
    confirmBtn.classList.add("editor");
    confirmBtn.id = "note-save";

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);
    editTitle.value = title.textContent;
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    editDescription.value = description.textContent;
    const editBtn = document.querySelector(`[class = '${card.classList[0]} editor note-edit`);

    card.removeChild(title);
    card.removeChild(description);
    buttons.removeChild(editBtn);
    card.appendChild(editTitle);
    card.appendChild(editDescription);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener("click", () =>{
      note.setTitle(editTitle.value);
      note.setDescription(editDescription.value);

      title.textContent = note.getTitle();
      description.textContent = note.getDescription();

      card.removeChild(editTitle);
      card.removeChild(editDescription);
      buttons.removeChild(confirmBtn);
      card.appendChild(title);
      card.appendChild(description);
      buttons.appendChild(editBtn);
    });
  };

  const removeNote = (index) => {
    const notes = document.querySelector(".notes");
    const badChild = document.querySelector(`[class = '${index} card note']`);
    notes.removeChild(badChild);
    const childrenLength = notes.childNodes.length;
    for(let i = parseInt(index) + 1; i < childrenLength + 1; i++) {
      const currentChild = document.querySelector(`[class = '${i} card note']`);
      currentChild.classList.replace(currentChild.classList[0], currentChild.classList[0] - 1);
      for(let j = 0; j < currentChild.childNodes.length; j++) {
        currentChild.childNodes[j].classList.replace(currentChild.childNodes[j].classList[0], currentChild.childNodes[j].classList[0] - 1);
      }
      if(currentChild.childNodes.length > 1) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(currentButtons.childNodes[0].classList[0], currentButtons.childNodes[0].classList[0] - 1);
        currentButtons.childNodes[1].classList.replace(currentButtons.childNodes[1].classList[0], currentButtons.childNodes[1].classList[0] - 1);
      }
    }
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
    addNewProject, addNewNote, addNewTodo, editProject, editTodo, removeTodo, editNote, removeNote};
})();

export {displayController};