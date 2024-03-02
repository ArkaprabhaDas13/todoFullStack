import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [input, setInput] = useState('');
  const [editedValue, setEditedValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [todoFlag, setTodoFlag] = useState();
  const [todoId, setTodoId] = useState();

  useEffect(()=>{
    fetchTodo()
  },[])

  const fetchTodo = async ()=>{
    try{
      const response = await axios.get('http://localhost:3000/todos');
      setTodos(response.data)
    }catch(error){
      console.error("Error faced while GET request :-", error)
    }
  }


  const handleInput = async()=>{

    try{
      const response = await axios.post('http://localhost:3000/todos',{
        message:input 
      })

      fetchTodo()
      // setTodos([...todos,response.data])

    }catch(error){
      console.error('Error occured during fetching data at POST request:-',error);
    }


    // setTodos([...todos,{'id':todos.length+1, 'message':input}])
    console.log(todos);
    setInput('');
  }

  function handleEdit(todoData){
    setEditedValue(input);
    setTodoFlag(todoData.id);
    setTodoId(todoData.id);
  }

  const putFunction = async (id)=>{
    console.log("putFunction running !!!")
    console.log(editedValue)
    await axios.put(`http://localhost:3000/todos/${todoId}`, { message: editedValue });
    fetchTodo();
  }

  const handleSave = ()=>{

    const newTodo = todos.map((todo)=>{
      if(todo.id == todoId)
      {
        putFunction(todo.id);
        // fetchTodo();
        return({id:todoId, message:editedValue});
      }
      else{
        return({id:todo.id, message:todo.message});
      }
    })

    setTodos(newTodo);
    setTodoFlag('');
    setEditedValue('');
    // setTodoId('');
    
  }

  const handleDelete = async (delId)=>{
    console.log('delId = ',delId);
    try {
      await axios.delete(`http://localhost:3000/todos/${delId}`);
      fetchTodo();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  }

  return (
    
    <div>

      <input type="text" value={input} onChange={(e)=>{setInput(e.target.value)}}/>
      <button className='btn btn-primary' onClick={handleInput}>Add Task</button>

      <ol>
        {
          todos.map((todo, index) => (
            <li key={index}>

              {todo.id!==todoFlag ? <span>{todo.message} <button className='btn btn-warning' onClick={()=>handleEdit(todo)}>Edit</button> </span>:
              <span><input type="text" placeholder={todo.message} onChange={(e)=>setEditedValue(e.target.value)} value={editedValue}/> <button onClick={()=>handleSave()} className='btn btn-success'>Save</button></span>}
              
              <button className='btn btn-danger' onClick={()=>handleDelete(todo.id)}>Delete</button> 
                        
            </li>
          ))
        }

      </ol>

    </div>
        
  )
}

export default App
