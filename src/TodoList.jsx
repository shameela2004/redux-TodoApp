// import React from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTask, setTask, updateTask } from "./redux/taskSlice";

// function TodoList() {
//   const [value, setValue] = useState("");
//   const dispatch = useDispatch();
//   const { task } = useSelector((state) => state.task);
//   const [editIndex,setEditIndex]=useState(null)
//   const [editvalue,setEditValue]=useState("")
//   function handleUpdate(){
//        if(editvalue.trim()!==""){
//         dispatch(updateTask({index:editIndex,newValue:editvalue}))
//         setEditIndex(null)
//         setEditValue("")
//        }
//   }
//   function handleEdit(index,text){
//     setEditIndex(index)
//     setEditValue(text)
//   }
//   function handleDelete(index){
//     dispatch(deleteTask(index))
//   }
//   return (
//     <div style={{display:"flex",flexDirection:"column"}}>
//         <h2>Add Task</h2>
      
//       <input
//         type="text"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//       />
//       <button onClick={() => {
//         if (value.trim() !== "") {
//       dispatch(setTask(value));
//       setValue(""); 
//     }
//       }}>Add</button>
      
//         <h1>
//           To Do List</h1>
//           <ul>
//             {task.map((t, index) => (
//               <li key={index}>
//                 {editIndex===index?(
//                     <>
//                     <input type="text" value={editvalue} onChange={(e)=>setEditValue(e.target.value)}/>
//                     <button onClick={handleUpdate}>Update</button>
//                     </>
//                 ):(
//                     <>
//                     {t}
//                     <button onClick={()=>handleEdit(index,t)}>Edit</button>
//                     <button onClick={()=>handleDelete(index)}>Delete</button>
//                     </>
                    
                    
//                 )
                 
//                 }
//                 </li>
//             ))}
//           </ul>
       
//     </div>
//   );
// }

// export default TodoList;










import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, setTask, updateTask } from "./redux/taskSlice";

function TodoList() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const { task } = useSelector((state) => state.task);
  const [editIndex, setEditIndex] = useState(null);
  const [editvalue, setEditValue] = useState("");

  function handleUpdate() {
    if (editvalue.trim() !== "") {
      dispatch(updateTask({ index:editIndex, newValue:editvalue }));
      setEditIndex(null);
      setEditValue("");
    }
  }

  function handleEdit(index, text) {
    setEditIndex(index);
    setEditValue(text);
  }

  function handleDelete(index) {
    dispatch(deleteTask(index));
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Add Task</h2>

      <div style={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter task..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={styles.input}
        />
        <button
          style={styles.addButton}
          onClick={() => {
            if (value.trim() !== "") {
              dispatch(setTask(value));
              setValue("");
            }
          }}
        >
          Add
        </button>
      </div>

      <h2 style={styles.header}>To Do List</h2>
      <ul style={styles.taskList}>
        {task.map((t, index) => (
          <li key={index} style={styles.taskItem}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  value={editvalue}
                  onChange={(e) => setEditValue(e.target.value)}
                  style={styles.input}
                />
                <button style={styles.updateBtn} onClick={handleUpdate}>
                  Update
                </button>
              </>
            ) : (
              <>
                <span style={styles.taskText}>{t}</span>
                <button style={styles.editBtn} onClick={() => handleEdit(index, t)}>
                  Edit
                </button>
                <button style={styles.deleteBtn} onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

const styles = {
  container: {
    maxWidth: "500px",
    margin: "50px auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "12px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "15px",
  },
  inputContainer: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 12px",
    border: "none",
    backgroundColor: "#28a745",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },
  taskList: {
    listStyleType: "none",
    padding: 0,
  },
  taskItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    boxShadow: "0 0 5px rgba(0,0,0,0.1)",
  },
  taskText: {
    flex: 1,
  },
  editBtn: {
    marginLeft: "10px",
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
  deleteBtn: {
    marginLeft: "5px",
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#dc3545",
    color: "white",
    borderRadius: "4px",
    cursor: "pointer",
  },
  updateBtn: {
    marginLeft: "10px",
    padding: "5px 10px",
    border: "none",
    backgroundColor: "#ffc107",
    color: "black",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

