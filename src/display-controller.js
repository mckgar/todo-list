import { format, parseISO } from 'date-fns';

const displayController = (() => {
  const deleteMain = () => {
    const content = document.querySelector('#content');
    const main = document.querySelector('#main');
    content.removeChild(main);
  };

  const sidebarCreate = () => {
    const sidebar = document.createElement('nav');
    sidebar.id = 'sidebar';

    const title = document.createElement('h1');
    title.textContent = 'title tk';
    const links = document.createElement('div');
    links.id = 'links';
    const projectsLink = document.createElement('div');
    projectsLink.textContent = 'Projects';
    projectsLink.classList.add('link');
    projectsLink.id = 'projects';
    const notesLink = document.createElement('div');
    notesLink.textContent = 'Notes';
    notesLink.classList.add('link');
    notesLink.id = 'notes';
    const settingsLink = document.createElement('div');
    settingsLink.textContent = 'Settings';
    settingsLink.classList.add('link');
    settingsLink.id = 'settings';

    sidebar.appendChild(title);
    links.appendChild(projectsLink);
    links.appendChild(notesLink);
    links.appendChild(settingsLink);
    sidebar.appendChild(links);
    return sidebar;
  };

  const createListItem = (todo, index) => {
    const card = document.createElement('div');
    card.classList.add(index, 'list-item');
    const name = document.createElement('p');
    name.classList.add(index, 'list-name', todo.getList()[index].completed);
    name.textContent = todo.getList()[index].name;

    card.appendChild(name);

    name.addEventListener('click', () => {
      todo.checkItem(index);
      name.classList.replace(name.classList[2], todo.getList()[index].completed);
    });

    const buttons = document.createElement('div');
    buttons.classList.add(index, 'buttons');
    const editBtn = document.createElement('div');
    editBtn.classList.add(index, 'editor', 'checklist-edit', 'material-symbols-outlined');
    editBtn.textContent = 'edit_note';
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add(index, -'editor', 'checklist-delete', 'material-symbols-outlined');
    deleteBtn.textContent = 'delete_forever';
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);

    card.appendChild(buttons);

    return card;
  };

  const expandTodo = (todo, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement('p');
    description.classList.add(card.classList[0], 'description');
    description.textContent = todo.getDescription();

    const checklist = document.createElement('ul');
    checklist.classList.add(card.classList[0], 'checklist');

    const list = todo.getList();
    for (let i = 0; i < list.length; i += 1) {
      checklist.appendChild(createListItem(todo, i));
    }

    const addToList = document.createElement('p');
    addToList.classList.add(card.classList[0], 'add-checklist-item');
    addToList.textContent = '+';
    checklist.appendChild(addToList);

    card.appendChild(description);
    card.appendChild(checklist);

    // eslint-disable-next-line no-use-before-define
    title.addEventListener('click', () => undoExpandTodo(todo, card), { once: true });

    const buttons = document.createElement('div');
    buttons.classList.add(card.classList[0], 'todo', 'buttons');
    const editBtn = document.createElement('div');
    editBtn.classList.add(card.classList[0], 'editor', 'todo-edit', 'material-symbols-outlined');
    editBtn.textContent = 'edit_note';
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add(card.classList[0], 'editor', 'todo-delete', 'material-symbols-outlined');
    deleteBtn.textContent = 'delete_forever';
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
  };

  const undoExpandTodo = (todo, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} todo buttons']`);
    const checklist = document.querySelector(`[class = '${card.classList[0]} checklist']`);
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(checklist);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener('click', () => expandTodo(todo, card), { once: true });
  };

  const createTodoCard = (todo, index) => {
    const card = document.createElement('div');
    card.classList.add(index, 'card', 'todo');

    const title = document.createElement('h3');
    title.classList.add(index, 'title');
    title.textContent = todo.getTitle();
    const type = document.createElement('div');
    type.classList.add(index, 'type');
    type.textContent = todo.getType();
    const priority = document.createElement('p');
    priority.classList.add(index, 'priority');
    priority.textContent = todo.getPriority();
    const dueDate = document.createElement('p');
    dueDate.classList.add(index, 'due-date');
    dueDate.textContent = format(parseISO(todo.getDueDate()), 'MM/dd/yyyy');
    const status = document.createElement('div');
    status.classList.add(index, 'status', todo.getStatus(), 'material-symbols-outlined');
    status.textContent = 'check_circle';

    status.addEventListener('click', () => {
      todo.changeStatus();
      status.classList.replace(status.classList[2], todo.getStatus());
    });

    card.appendChild(title);
    card.appendChild(type);
    card.appendChild(priority);
    card.appendChild(dueDate);
    card.appendChild(status);

    title.addEventListener('click', () => expandTodo(todo, card), { once: true });

    return card;
  };

  const projectFocusMain = (project, index) => {
    const main = document.createElement('div');
    main.id = 'main';
    main.classList.add(index);

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = project.getTitle();
    main.appendChild(title);

    const goBack = document.createElement('div');
    goBack.classList.add('return', 'return-projects');
    goBack.textContent = '<- Go Back';
    main.appendChild(goBack);

    const editBtn = document.createElement('div');
    editBtn.classList.add('editor', 'material-symbols-outlined');
    editBtn.id = 'project-edit';
    editBtn.textContent = 'edit_note';
    main.appendChild(editBtn);

    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add('editor', 'material-symbols-outlined');
    deleteBtn.textContent = 'delete_forever';
    deleteBtn.id = 'project-delete';
    main.appendChild(deleteBtn);

    const projectInfo = document.createElement('div');
    projectInfo.classList.add('project-info');
    const description = document.createElement('p');
    description.classList.add('project', 'description');
    description.textContent = project.getDescription();
    projectInfo.appendChild(description);

    for (let i = 0; i < project.getTodoList().length; i += 1) {
      projectInfo.appendChild(createTodoCard(project.getTodoList()[i], i));
    }

    const addNewTodoBtn = document.createElement('div');
    addNewTodoBtn.classList.add('add', 'new-todo');
    addNewTodoBtn.textContent = '+';
    projectInfo.appendChild(addNewTodoBtn);

    main.appendChild(projectInfo);

    return main;
  };

  const projectFocus = (project, index) => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(projectFocusMain(project, index));
  };

  const createProjectCard = (project, index) => {
    const card = document.createElement('div');
    card.classList.add(index, 'card', 'project');

    const title = document.createElement('h3');
    title.classList.add(index, 'title');
    title.textContent = project.getTitle();
    const description = document.createElement('p');
    description.classList.add(index, 'description');
    description.textContent = project.getDescription();

    const editBtn = document.createElement('div');
    editBtn.classList.add(index, 'editor', 'project-edit', 'material-symbols-outlined');
    editBtn.textContent = 'edit_note';
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add(index, 'editor', 'project-delete', 'material-symbols-outlined');
    deleteBtn.textContent = 'delete_forever';

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(editBtn);
    card.appendChild(deleteBtn);

    return card;
  };

  const projectsOverviewMain = (projectsList) => {
    const main = document.createElement('div');
    main.id = 'main';

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Projects';
    main.appendChild(title);

    const projects = document.createElement('div');
    projects.classList.add('projects');

    for (let i = 0; i < projectsList.length; i += 1) {
      projects.appendChild(createProjectCard(projectsList[i], i));
    }
    main.appendChild(projects);

    const addNewProjectBtn = document.createElement('div');
    addNewProjectBtn.classList.add('add', 'new-project');
    addNewProjectBtn.textContent = '+';
    projects.appendChild(addNewProjectBtn);

    return main;
  };

  const projectsOverview = (projectsList) => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(projectsOverviewMain(projectsList));
  };

  const initialSetup = (projectList) => {
    const head = document.querySelector('head');
    const iconLink = document.createElement('link');
    iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200';
    iconLink.rel = 'stylesheet';
    head.appendChild(iconLink);

    const body = document.querySelector('body');
    const content = document.createElement('div');
    content.id = 'content';
    body.appendChild(content);

    content.appendChild(sidebarCreate());
    content.appendChild(projectsOverviewMain(projectList));
  };

  const editProjectCard = (project, card) => {
    const editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.name = 'edit-title';
    editTitle.id = 'edit-title';
    const editDescription = document.createElement('textarea');
    editDescription.name = 'edit-description';
    editDescription.id = 'edit-description';
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor', 'project-save', 'material-symbols-outlined');
    confirmBtn.textContent = 'save';

    const title = document.querySelector(`[class = '${card.classList[[0]]} title']`);
    editTitle.value = title.textContent;
    const description = document.querySelector(`[class = '${card.classList[[0]]} description']`);
    editDescription.value = description.textContent;
    const editBtn = document.querySelector(`[class='${card.classList[0]} editor project-edit material-symbols-outlined']`);

    card.removeChild(title);
    card.removeChild(description);
    card.removeChild(editBtn);
    card.appendChild(editTitle);
    card.appendChild(editDescription);
    card.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
      project.setTitle(editTitle.value);
      project.setDescription(editDescription.value);

      title.textContent = project.getTitle();
      description.textContent = project.getDescription();

      card.removeChild(editTitle);
      card.removeChild(editDescription);
      card.removeChild(confirmBtn);
      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(editBtn);
    });
  };

  const editProject = (project, card) => {
    const projectInfo = document.querySelector('.project-info');

    const editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.name = 'edit-title';
    editTitle.id = 'edit-title';
    const editDescription = document.createElement('textarea');
    editDescription.name = 'edit-description';
    editDescription.id = 'edit-description';
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor', 'material-symbols-outlined');
    confirmBtn.textContent = 'save';
    confirmBtn.id = 'project-save';

    const title = document.querySelector('h2.title');
    editTitle.value = title.textContent;
    const description = document.querySelector('.project.description');
    editDescription.value = description.textContent;
    const editBtn = document.querySelector('#project-edit');

    card.removeChild(title);
    projectInfo.removeChild(description);
    card.removeChild(editBtn);
    card.appendChild(editTitle);
    projectInfo.appendChild(editDescription);
    card.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
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

  const addNewProject = (project, index) => {
    const projects = document.querySelector('.projects');
    const newProject = createProjectCard(project, index);
    const addNewProjectBtn = document.querySelector('.add.new-project');
    projects.insertBefore(newProject, addNewProjectBtn);
    editProjectCard(project, newProject);
  };

  const editChecklistItem = (todo, cardIndex, itemIndex) => {
    const checklist = document.querySelector(`[class = '${cardIndex} checklist']`);

    const item = checklist.childNodes[itemIndex];
    const itemName = item.childNodes[0];
    const buttons = item.childNodes[1];
    const editBtn = buttons.childNodes[0];

    const editItemName = document.createElement('input');
    editItemName.type = 'text';
    editItemName.name = 'edit-item-name';
    editItemName.id = 'edit-item-name';
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor', 'material-symbols-outlined');
    confirmBtn.textContent = 'save';
    confirmBtn.id = 'checklist-save';

    editItemName.value = itemName.textContent;

    item.removeChild(itemName);
    buttons.removeChild(editBtn);
    item.insertBefore(editItemName, buttons);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
      todo.editItem(itemIndex, editItemName.value);
      itemName.textContent = editItemName.value;

      item.removeChild(editItemName);
      buttons.removeChild(confirmBtn);
      item.insertBefore(itemName, buttons);
      buttons.appendChild(editBtn);
    });
  };

  const addChecklistItem = (todo, index) => {
    const newItem = createListItem(todo, todo.getList().length - 1);
    const checklist = document.querySelector(`[class = '${index} checklist']`);
    checklist.insertBefore(newItem, document.querySelector(`[class = '${index} add-checklist-item']`));
    editChecklistItem(todo, index, todo.getList().length - 1);
  };

  const removeChecklistItem = (cardIndex, itemIndex) => {
    const checklist = document.querySelector(`[class = '${cardIndex} checklist']`);
    checklist.removeChild(checklist.childNodes[itemIndex]);

    for (let i = parseInt(itemIndex, 10); i < checklist.childNodes.length - 1; i += 1) {
      const listItem = checklist.childNodes[i];
      listItem.classList.replace(
        listItem.classList[0],
        listItem.classList - 1,
      );
      const listName = listItem.childNodes[0];
      listName.classList.replace(
        listName.classList[0],
        listName.classList[0] - 1,
      );
      const listButtons = listItem.childNodes[1];
      listButtons.classList.replace(
        listButtons.classList[0],
        listButtons.classList[0] - 1,
      );
      listButtons.childNodes[0].classList.replace(
        listButtons.childNodes[0].classList[0],
        listButtons.childNodes[0].classList[0] - 1,
      );
      listButtons.childNodes[1].classList.replace(
        listButtons.childNodes[1].classList[0],
        listButtons.childNodes[1].classList[0] - 1,
      );
    }
  };

  const editTodo = (todo, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} todo buttons']`);

    const editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.name = 'edit-title';
    editTitle.id = 'edit-title';

    const editType = document.createElement('select');
    editType.name = 'edit-type';
    editType.id = 'edit-type';
    const optionExercise = document.createElement('option');
    optionExercise.textContent = 'Exercise';
    editType.appendChild(optionExercise);
    const optionSelfImprovement = document.createElement('option');
    optionSelfImprovement.textContent = 'Self-Improvement';
    editType.appendChild(optionSelfImprovement);
    const optionLearning = document.createElement('option');
    optionLearning.textContent = 'Learning';
    editType.appendChild(optionLearning);
    const optionPersonal = document.createElement('option');
    optionPersonal.textContent = 'Personal';
    editType.appendChild(optionPersonal);
    const optionWork = document.createElement('option');
    optionWork.textContent = 'Work';
    editType.appendChild(optionWork);
    const optionSchool = document.createElement('option');
    optionSchool.textContent = 'School';
    editType.appendChild(optionSchool);
    const optionCleaning = document.createElement('option');
    optionCleaning.textContent = 'Cleaning';
    editType.appendChild(optionCleaning);
    const optionOther = document.createElement('option');
    optionOther.textContent = 'Other';
    editType.appendChild(optionOther);

    const editPriority = document.createElement('select');
    editPriority.name = 'edit-priority';
    editPriority.id = 'edit-priority';
    const priority1 = document.createElement('option');
    priority1.textContent = 'Priority: 1';
    priority1.value = '1';
    const priority2 = document.createElement('option');
    priority2.textContent = 'Priority: 2';
    priority2.value = '2';
    const priority3 = document.createElement('option');
    priority3.textContent = 'Priority: 3';
    priority3.value = '3';
    const priority4 = document.createElement('option');
    priority4.textContent = 'Priority: 4';
    priority4.value = '4';
    const priority5 = document.createElement('option');
    priority5.textContent = 'Priority: 5';
    priority5.value = '5';
    editPriority.appendChild(priority1);
    editPriority.appendChild(priority2);
    editPriority.appendChild(priority3);
    editPriority.appendChild(priority4);
    editPriority.appendChild(priority5);
    const editDueDate = document.createElement('input');
    editDueDate.type = 'date';
    editDueDate.name = 'edit-due-date';
    editDueDate.id = 'edit-due-date';
    const editDescription = document.createElement('textarea');
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor', 'material-symbols-outlined');
    confirmBtn.textContent = 'save';
    confirmBtn.id = 'todo-save';

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);
    editTitle.value = title.textContent;
    const type = document.querySelector(`[class = '${card.classList[0]} type']`);
    editType.value = type.textContent;
    const priority = document.querySelector(`[class = '${card.classList[0]} priority']`);
    editPriority.value = priority.textContent;
    const dueDate = document.querySelector(`[class = '${card.classList[0]} due-date']`);
    editDueDate.value = todo.getDueDate();
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    editDescription.value = description.textContent;
    const editBtn = document.querySelector(`[class = '${card.classList[0]} editor todo-edit material-symbols-outlined']`);

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

    confirmBtn.addEventListener('click', () => {
      todo.setTitle(editTitle.value);
      todo.setType(editType.value);
      todo.setPriority(editPriority.value);
      todo.setDueDate(editDueDate.value);
      todo.setDescription(editDescription.value);

      title.textContent = todo.getTitle();
      type.textContent = todo.getType();
      priority.textContent = todo.getPriority();
      dueDate.textContent = format(parseISO(todo.getDueDate()), 'MM/dd/yyyy');
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

  const addNewTodo = (todo, index) => {
    const todos = document.querySelector('.project-info');
    const newTodo = createTodoCard(todo, index);
    const addNewTodoBtn = document.querySelector('.add.new-todo');
    todos.insertBefore(newTodo, addNewTodoBtn);
    expandTodo(todo, newTodo);
    editTodo(todo, newTodo);
  };

  const removeTodo = (index) => {
    const projectInfo = document.querySelector('.project-info');
    const badChild = document.querySelector(`[class = '${index} card todo']`);
    projectInfo.removeChild(badChild);
    const childrenLength = projectInfo.childNodes.length;
    for (let i = parseInt(index, 10) + 1; i < childrenLength - 1; i += 1) {
      const currentChild = document.querySelector(`[class = '${i} card todo']`);
      currentChild.classList.replace(
        currentChild.classList[0],
        currentChild.classList[0] - 1,
      );
      for (let j = 0; j < currentChild.childNodes.length; j += 1) {
        currentChild.childNodes[j].classList.replace(
          currentChild.childNodes[j].classList[0],
          currentChild.childNodes[j].classList[0] - 1,
        );
      }
      if (currentChild.childNodes.length > 5) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(
          currentButtons.childNodes[0].classList[0],
          currentButtons.childNodes[0].classList[0] - 1,
        );
        currentButtons.childNodes[1].classList.replace(
          currentButtons.childNodes[1].classList[0],
          currentButtons.childNodes[1].classList[0] - 1,
        );
      }
    }
  };

  const expandNote = (note, card) => {
    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    const description = document.createElement('p');
    description.classList.add(card.classList[0], 'description');
    description.textContent = note.getDescription();

    card.appendChild(description);

    // eslint-disable-next-line no-use-before-define
    title.addEventListener('click', () => undoExpandNote(note, card), { once: true });

    const buttons = document.createElement('div');
    buttons.classList.add(card.classList[0], 'buttons');
    const editBtn = document.createElement('div');
    editBtn.classList.add(card.classList[0], 'editor', 'note-edit', 'material-symbols-outlined');
    editBtn.textContent = 'edit_note';
    const deleteBtn = document.createElement('div');
    deleteBtn.classList.add(card.classList[0], 'editor', 'note-delete', 'material-symbols-outlined');
    deleteBtn.textContent = 'delete_forever';
    buttons.appendChild(editBtn);
    buttons.appendChild(deleteBtn);
    card.appendChild(buttons);
  };

  const undoExpandNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    card.removeChild(buttons);
    card.removeChild(description);

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);

    title.addEventListener('click', () => expandNote(note, card), { once: true });
  };

  const createNoteCard = (note, index) => {
    const card = document.createElement('div');
    card.classList.add(index, 'card', 'note');

    const title = document.createElement('h3');
    title.classList.add(index, 'title');
    title.textContent = note.getTitle();

    title.addEventListener('click', () => expandNote(note, card), { once: true });

    card.appendChild(title);

    return card;
  };

  const notesOverviewMain = (notesList) => {
    const main = document.createElement('div');
    main.id = 'main';

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Notes';
    main.appendChild(title);

    const notes = document.createElement('div');
    notes.classList.add('notes');

    for (let i = 0; i < notesList.length; i += 1) {
      notes.appendChild(createNoteCard(notesList[i], i));
    }
    main.appendChild(notes);

    const addNewNoteBtn = document.createElement('div');
    addNewNoteBtn.classList.add('add', 'new-note');
    addNewNoteBtn.textContent = '+';
    notes.appendChild(addNewNoteBtn);

    return main;
  };

  const notesOverview = (notesList) => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(notesOverviewMain(notesList));
  };

  const editNote = (note, card) => {
    const buttons = document.querySelector(`[class = '${card.classList[0]} buttons']`);

    const editTitle = document.createElement('input');
    editTitle.type = 'text';
    editTitle.name = 'edit-title';
    editTitle.id = 'edit-title';
    const editDescription = document.createElement('input');
    editDescription.type = 'text';
    editDescription.name = 'edit-description';
    editDescription.id = 'edit-description';
    const confirmBtn = document.createElement('div');
    confirmBtn.classList.add('editor', 'material-symbols-outlined');
    confirmBtn.textContent = 'save';
    confirmBtn.id = 'note-save';

    const title = document.querySelector(`[class = '${card.classList[0]} title']`);
    editTitle.value = title.textContent;
    const description = document.querySelector(`[class = '${card.classList[0]} description']`);
    editDescription.value = description.textContent;
    const editBtn = document.querySelector(`[class = '${card.classList[0]} editor note-edit material-symbols-outlined']`);

    card.removeChild(title);
    card.removeChild(description);
    buttons.removeChild(editBtn);
    card.appendChild(editTitle);
    card.appendChild(editDescription);
    buttons.appendChild(confirmBtn);

    confirmBtn.addEventListener('click', () => {
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

  const addNewNote = (note, index) => {
    const notes = document.querySelector('.notes');
    const newNote = createNoteCard(note, index);
    const addNewNoteBtn = document.querySelector('.add.new-note');
    notes.insertBefore(newNote, addNewNoteBtn);
    expandNote(note, newNote);
    editNote(note, newNote);
  };

  const removeNote = (index) => {
    const notes = document.querySelector('.notes');
    const badChild = document.querySelector(`[class = '${index} card note']`);
    notes.removeChild(badChild);
    const childrenLength = notes.childNodes.length;
    for (let i = parseInt(index, 10) + 1; i < childrenLength; i += 1) {
      const currentChild = document.querySelector(`[class = '${i} card note']`);
      currentChild.classList.replace(currentChild.classList[0], currentChild.classList[0] - 1);
      for (let j = 0; j < currentChild.childNodes.length; j += 1) {
        currentChild.childNodes[j].classList.replace(
          currentChild.childNodes[j].classList[0],
          currentChild.childNodes[j].classList[0] - 1,
        );
      }
      if (currentChild.childNodes.length > 1) {
        const currentButtons = document.querySelector(`[class = '${i - 1} buttons']`);
        currentButtons.childNodes[0].classList.replace(
          currentButtons.childNodes[0].classList[0],
          currentButtons.childNodes[0].classList[0] - 1,
        );
        currentButtons.childNodes[1].classList.replace(
          currentButtons.childNodes[1].classList[0],
          currentButtons.childNodes[1].classList[0] - 1,
        );
      }
    }
  };

  const settingsOverviewMain = () => {
    const main = document.createElement('div');
    main.id = 'main';

    const title = document.createElement('h2');
    title.classList.add('title');
    title.textContent = 'Settings';
    main.appendChild(title);

    return main;
  };

  const settingsOverview = () => {
    const content = document.querySelector('#content');
    deleteMain();
    content.appendChild(settingsOverviewMain());
  };

  return {
    initialSetup,
    projectsOverview,
    projectFocus,
    notesOverview,
    settingsOverview,
    addNewProject,
    addNewNote,
    addNewTodo,
    editProjectCard,
    editProject,
    editTodo,
    removeTodo,
    editNote,
    removeNote,
    addChecklistItem,
    editChecklistItem,
    removeChecklistItem,
  };
})();

export default displayController;
