const baseUrl = 'http://localhost:8080/todos';

export const loadToods = () => {
  return fetch(baseUrl)
    .then(res => res.json());
}

export const creatTodo = (todo) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
}

export const saveTodo = (todo) => {
  return fetch(`${baseUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
}

export const destroyTodo = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });
}
