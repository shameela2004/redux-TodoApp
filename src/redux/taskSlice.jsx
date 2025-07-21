import {createSlice} from "@reduxjs/toolkit"
const initialState={
    task:[]
}
const todoSlice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        setTask:(state,action)=>{
            state.task.push(action.payload)
        },
        deleteTask:(state,action)=>{
            state.task.splice(action.payload,1)
        },
        updateTask:(state,action)=>{
            const {index,newValue}=action.payload
            state.task[index]=newValue
        }
    }
})
export default todoSlice.reducer
export const {setTask,deleteTask,updateTask}=todoSlice.actions