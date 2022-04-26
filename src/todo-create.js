const todo = (title, description, dueDate, priority, type) => {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.type = type;
  let status = false;

  const getTitle = () => {
    return this.title;
  };
  const setTitle = (newTitle) => {
    this.title = newTitle;
  }
  const getDescription = () => {
    return this.description;
  };
  const setDescription = (newDescription) => {
    this.description = newDescription;
  };
  const getDueDate = () => {
    return this.dueDate;
  };
  const setDueDate = (newDueDate) => {
    this.dueDate = newDueDate;
  };
  const getPriority = () => {
    return this.priority;
  };
  const setPriority = (newPriority) => {
    this.priority = newPriority;
  };
  const getType = () => {
    return this.type;
  };
  const setType = (newType) => {
    this.type = newType;
  };

  const changeStatus = () => {
    status = !status;
  };
  const getStatus = () => {
    return status;
  };

  return {getTitle, setTitle, getDescription, setDescription, getDueDate, 
    setDueDate, getPriority, setPriority, getType, setType, changeStatus,
    getStatus};
};

const project = (title, description) => {
  this.title = title;
  this.description = description;
  let todos = [];

  const getTitle = () => {
    return this.title;
  };
  const setTitle = (newTitle) => {
    this.title = newTitle;
  }
  const getDescription = () => {
    return this.description;
  };
  const setDescription = (newDescription) => {
    this.description = newDescription;
  };

  const addTodo = (newTodo) => {
    todos.push(newTodo);
  };
  const removeTodo = (badTodo) => {
    todos.splice(todos.indexOf(badTodo), 1);
  };

  return {getTitle, setTitle, getDescription, setDescription, addTodo, removeTodo};
}