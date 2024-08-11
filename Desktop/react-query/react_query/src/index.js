import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



const todos = [
{
  id: 1,
  title: "Learn HTML",
  completed: false
},
{
  id: 2,
  title: "Learn CSS",
  completed: false
},
{
  id: 3,
  title: "Learn Javascript",
  completed: false
},
{
  id: 4,
  title: "Learn React",
  completed: false
},
{
  id: 5,
  title: "Learn Next.js",
  completed: false
},
{
  id: 5,
  title: "Learn Vue.js",
  completed: false
}
]

export const fetchTodos = async (query = "") => {
 await new Promise((resolve)=>setTimeout(resolve, 1000));
 const filteredTodos = todos.filter((todo) =>
 todo.title.toLowerCase().includes(query.toLowerCase())
  );
  console.log("fetched todos");
  return filteredTodos;
  
}

export const addTodo = async(todo) => {
    await new Promise((resolve)=> setTimeout(resolve,1000));
    console.log("addTodo param", todo.title);
    const newTodo = {
      id : todos.length +1,
      title : todo.title,
      completed: false,
    };
    todos.push(newTodo)
    console.log("addTodo");
    console.log(todos);
    return newTodo;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

