const todo = (title, description, dueDate, priority, type) => {
  let status = false;
  let list = [];

  const getTitle = () => {
    return title;
  };
  const setTitle = (newTitle) => {
    title = newTitle;
  }
  const getDescription = () => {
    return description;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getDueDate = () => {
    return dueDate;
  };
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };
  const getPriority = () => {
    return priority;
  };
  const setPriority = (newPriority) => {
    priority = newPriority;
  };
  const getType = () => {
    return type;
  };
  const setType = (newType) => {
    type = newType;
  };

  const changeStatus = () => {
    status = !status;
  };
  const getStatus = () => {
    return status;
  };

  const addItem = (title) => {
    list.push({name: title, completed: false});
  };
  const removeItem = (item) => {
    list.splice(list.indexOf(item), 1);
  }
  const checkItem = (item) => {
    item.completed = !(item.completed);
  };

  return {getTitle, setTitle, getDescription, setDescription, getDueDate, 
    setDueDate, getPriority, setPriority, getType, setType, changeStatus,
    getStatus, addItem, removeItem, checkItem};
};

const project = (title, description) => {
  let todoList = [];

  const getTitle = () => {
    return title;
  };
  const setTitle = (newTitle) => {
    title = newTitle;
  }
  const getDescription = () => {
    return description;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };
  const getTodoList = () => {
    return todoList;
  }

  const addTodo = (newTodo) => {
    todoList.push(newTodo);
  };
  const removeTodo = (badTodo) => {
    todoList.splice(todoList.indexOf(badTodo), 1);
  };

  return {getTitle, setTitle, getDescription, setDescription, getTodoList, 
    addTodo, removeTodo};
}

const note = (title, description) => {
  const getTitle = () => {
    return title;
  };
  const setTitle = (newTitle) => {
    title = newTitle;
  };
  const getDescription = () => {
    return description;
  };
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  return {getTitle, setTitle, getDescription, setDescription};
}

export {todo, project, note};