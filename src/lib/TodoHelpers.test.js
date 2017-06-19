import { addTodo, findbyId,
        toggleTodo, updateTodo,
        removeTodo, filterTodos } from './TodoHelpers';

// range act assert test

test('addTodo should add the passed todo to the list', () => {
  //range
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: true},
    {id: 2, name:"Walk the cat", isCompleted: false}
  ];

  const newTodo = {id: 3, name:"Learn React", isCompleted: false};
  const expected = [
    {id: 1, name:"Clean room", isCompleted: true},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];

  // act
  const result = addTodo(startTodos, newTodo);

  //assert
  expect(result).toEqual(expected);
});

test('addTodo should not mutate the existing todo array', () => {
  //range
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: true},
    {id: 2, name:"Walk the cat", isCompleted: false}
  ];

  const newTodo = {id: 3, name:"Learn React", isCompleted: false};
  const expected = [
    {id: 1, name:"Clean room", isCompleted: true},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];

  // act
  const result = addTodo(startTodos, newTodo);

  //assert
  expect(result).not.toBe(startTodos);
});

test('findbyId should return the expected item from an array', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: true},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];

  const expected = {id: 3, name:"Learn React", isCompleted: false};
  const result = findbyId(3, startTodos);
  expect(result).toEqual(expected);
});

test('toggleTodo should toggle the isComplete prop of a todo', () => {
  const startTodo = {id: 1, name:"Learn React", isCompleted: false};
  const expected = {id: 1, name:"Learn React", isCompleted: true};
  const result = toggleTodo(startTodo);
  expect(result).toEqual(expected);
});

test('toggleTodo should not mutate the original todo', () => {
  const startTodo = {id: 1, name:"Learn React", isCompleted: false};
  const result = toggleTodo(startTodo);
  expect(result).not.toBe(startTodo);
});

test('updateTodo should update an item by ID', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];

  const updatedTodo = {id: 3, name:"Learn React", isCompleted: true};
  const expectedTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: true}
  ];
  const result = updateTodo(startTodos, updatedTodo);
  expect(result).toEqual(expectedTodos);
});

test('updateTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];

  const updatedTodo = {id: 3, name:"Learn React", isCompleted: true};
  const expectedTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: true}
  ];
  const result = updateTodo(startTodos, updatedTodo);
  expect(result).not.toBe(startTodos);
});

test('removeTodo should remove an item by id', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];
  const targetID = 2;

  const updatedTodo = {id: 3, name:"Learn React", isCompleted: false};
  const expectedTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];
  const result = removeTodo(startTodos, targetID);
  expect(result).toEqual(expectedTodos);
});

test('removeTodo should not mutate the original array', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];
  const targetID = 2;
  const result = removeTodo(startTodos, targetID);
  expect(result).not.toBe(startTodos);
});

test('filterTodos should return all items for the root route', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];
  const result = filterTodos(startTodos, '/');
  expect(result).toEqual(startTodos);
});

test('filterTodos should return only completed items for the complete route', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: true},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: false}
  ];

  const expected = [
    {id: 1, name:"Clean room", isCompleted: true}
  ];

  const result = filterTodos(startTodos, '/complete');
  expect(result).toEqual(expected);
});

test('filterTodos should return only incompleted items for the active route', () => {
  const startTodos = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false},
    {id: 3, name:"Learn React", isCompleted: true}
  ];

  const expected = [
    {id: 1, name:"Clean room", isCompleted: false},
    {id: 2, name:"Walk the cat", isCompleted: false}
  ];

  const result = filterTodos(startTodos, '/active');
  expect(result).toEqual(expected);
});
