const todo = (initTitle, initDescription, initDueDate, initPriority, initType, initChecklist = []) => {
  let title = initTitle;
  let description = initDescription;
  let dueDate = initDueDate;
  let priority = initPriority;
  let type = initType;
  const list = initChecklist;
  let status = false;

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => description;
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getDueDate = () => dueDate;
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const getPriority = () => priority;
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const getType = () => type;
  const setType = (newType) => {
    type = newType;
  };

  const changeStatus = () => {
    status = !status;
  };
  const getStatus = () => status;

  const getList = () => list;
  const addItem = (itemTitle) => {
    list.push({ name: itemTitle, completed: false });
  };
  const editItem = (index, newTitle) => {
    list[index].name = newTitle;
  };
  const removeItem = (index) => {
    list.splice(list[index], 1);
  };
  const checkItem = (index) => {
    list[index].completed = !(list[index].completed);
  };

  const listAsString = () => {
    let string = '[';
    for (let i = 0; i < list.length; i += 1) {
      string += `{"name":"${list[i].name}","completed":"${list[i].completed}"}`;
      if (i < list.length - 1) {
        string += ',';
      }
    }
    string += ']';
    return string;
  };

  const toString = () => `{"title":"${title}","description":"${description}","dueDate":"${dueDate}","priority":"${priority}","type":"${type}","list":${listAsString()}}`;
  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
    getType,
    setType,
    changeStatus,
    getStatus,
    getList,
    addItem,
    removeItem,
    checkItem,
    editItem,
    toString,
  };
};

const project = (initTitle, initDescription, initTodoList = []) => {
  let title = initTitle;
  let description = initDescription;
  const todoList = initTodoList;

  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => description;
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getTodoList = () => todoList;

  const addTodo = (newTodo) => {
    todoList.push(newTodo);
  };
  const removeTodo = (index) => {
    todoList.splice(index, 1);
  };

  const todoListAsString = () => {
    let string = '[';
    for (let i = 0; i < todoList.length; i += 1) {
      string += todoList[i].toString();
      if (i < todoList.length - 1) {
        string += ',';
      }
    }
    string += ']';
    return string;
  };

  const toString = () => `{"title":"${title}","description":"${description}","todoList":${todoListAsString()}}`;

  return {
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getTodoList,
    addTodo,
    removeTodo,
    toString,
  };
};

const note = (initTitle, initDescription) => {
  let title = initTitle;
  let description = initDescription;
  const getTitle = () => title;
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => description;
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const toString = () => `{"title":"${title}","description":"${description}"}`;

  return {
    getTitle, setTitle, getDescription, setDescription, toString,
  };
};

export { todo, project, note };
