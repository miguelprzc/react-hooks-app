const initialSate = [{
  id: 1,
  tood: 'Buy bread',
  done: false
}];

const todoReducer = (state = initialSate, action) => {

  if(action?.type === 'add') {
    return [...state, action.payload];
  }

  return state;
};



let todos = todoReducer();

const newTodo = {
  id: 2,
  tood: 'Buy milk',
  done: false
};

const addTodoAction = {
  type: 'add',
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);


console.table(todos);