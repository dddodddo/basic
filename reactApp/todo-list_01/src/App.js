// import { useState } from "react";
// import "./App.css";
// import AddTodo from "./components/Todolist/AddTodo";

// function App() {
//   const [todos, setTodos] = useState([
//     { id: 123, text: "react공부", status: "active" },
//     { id: 456, text: "js공부", status: "active" },
//   ]);
//   const handleAdd = (todo) => setTodos([...todos, todo]);

//   return (
//     <>
//       <section>
//         <ul>
//           {
//             /* {todos.map((item) => {
//             return <li>{item.text}</li>;
//             })} */
//             todos.map((item) => (
//               <li key={item.id}>{item.text}</li>
//             ))
//           }
//         </ul>
//         <AddTodo onAdd={handleAdd} />
//       </section>
//     </>
//   );
// }

// export default App;

//rfce
import React, { useState } from "react";
import TodoList from "./components/Todolist/TodoList";
// import { WiDayFog } from "react-icons/wi"; //icon 사용법
// <div>App<WiDayFog/></div>

function App() {
  const [todos, setTodos] = useState([
    {
      id: 123,
      text: "공부하기",
      status: "active",
    },
    {
      id: 456,
      text: "청소하기",
      status: "active",
    },
  ]);
  return <TodoList />;
}

export default App;
