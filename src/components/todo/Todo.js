import { useEffect, useState } from 'react';
import TodoTable from './TodoTable';

const Todo = () => {
    const nextTodoId = (todos) => {
        const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), 0)
        return maxId + 1;
    }

    const [todos, setTodos] = useState([]);
    const [edit, setEdit] = useState(false);

    // initial todo item
    const [todo, setTodo] = useState({
        userId: 1,
        title: "",
        completed: false
    });

    // get all todos from local storage
    let allTodos = JSON.parse(localStorage.getItem('todos'))

    // get todos from api
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(data => {
        localStorage.setItem('todos', JSON.stringify(allTodos.length > 0 ? allTodos : data))
        setTodos(allTodos ? allTodos : data)
      })
    }, [])

    // submit from
    const handleForm = (e) => {
        e.preventDefault();

        if(edit){
            const update = todos.map((item) => {
                if(item.id === todo.id){
                    item = todo;
                    return item;
                }
                else{
                    return item;
                }
            })
            setTodos(update)
            localStorage.setItem('todos', JSON.stringify(update))
            setEdit(false)
            setTodo({
              userId: 1,
              title: "",
              completed: false
            })
        }
        else{
            const singleTodo = {
                id: nextTodoId(todos),
                ...todo
            }
            setTodos([...todos, singleTodo]);
            localStorage.setItem('todos', JSON.stringify([...todos, singleTodo]))
            setTodo({
              userId: 1,
              title: "",
              completed: false
            })
        }
    }

    // edit todo
    const handleEdit = (id) => {
        const editTodo = todos.find((todo) => todo.id === id);
        setTodo(editTodo)
        setEdit(true)
    }

    // delete todo
    const handleDelete = (id) => {
      
      let allTodo = JSON.parse(localStorage.getItem('todos'))
      const index = allTodo.findIndex(todo => todo.id === id);

      if(index > -1){
        allTodo.splice(index, 1)
        localStorage.setItem('todos', JSON.stringify(allTodo))
      }

      setTodos(todos.filter((todo) => todo.id !== id))
    }
    
    return (
        <div className='container py-20'>
            <h1 className='text-center text-lg font-semibold text-gray-800'>Add Todo</h1>
            <p className='text-center text-sm font-normal text-gray-600 mb-10'>Add todo information in the form.</p>
            <form onSubmit={handleForm}>

                <input type="text" value={todo.title} placeholder='title' onChange={(e) => setTodo({...todo, title:e.target.value})} className="w-full h-10 my-2 border border-cyan-600 px-5 rounded-lg text-base text-gray-800 outline-none placeholder:text-gray-400 placeholder:text-base placeholder:capitalize" />

                <label htmlFor="complete" className='flex items-center gap-2 my-2 text-base text-gray-800 font-medium'>
                  <input id="complete" className='h-4 w-4 accent-cyan-500' type="checkbox" checked={todo.completed} onChange={(e) => setTodo({...todo, completed: e.target.checked})} />
                  Completed?
                </label>

                <button type='submit' className='w-full bg-cyan-500 text-white font-medium text-base py-2 transition-all duration-300 rounded-lg hover:bg-cyan-600'>{edit ? 'Update' : 'Submit'}</button>
            </form>

            <div className='mt-10 '>
                <h1 className='text-center text-lg font-semibold text-gray-800'>Todo List</h1>
                <p className='text-center text-sm font-normal text-gray-600 mb-10'>Add todo information in the form to see the list</p>
            
                {
                  todos.length > 0 ?
                  <TodoTable todos={todos} handleDelete={handleDelete} handleEdit={handleEdit}/>
                  : <p className='text-center text-base font-normal text-gray-600 mt-10'>No todo to show!</p>
                }
            </div>
        </div>
    )
}

export default Todo