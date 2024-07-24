// rfce
// import React, { useState } from "react";

// function AddTodo({ onAdd }) {
//   const [text, setText] = useState("");
//   const handleChange = (e) => setText(e.target.value);
//   const handleSubmit = (e) => {
//     e.preventDefault(); // 새로고침 막기
//     onAdd({ id: 789, text: text, status: "active" });
//     setText("");
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Add Todo"
//         value={text}
//         onChange={handleChange}
//       />
//       <button>Add</button>
//     </form>
//   );
// }

// export default AddTodo;
