import { useState } from 'react';
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
        name: "",
        designation: "",
        date: ""
    });

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
            setEdit(false)
            setTodo({
                name: "",
                designation: "",
                date: ""
            })
        }
        else{
            const singleTodo = {
                id: nextTodoId(todos),
                ...todo
            }
            setTodos([...todos, singleTodo]);
            setTodo({
                name: "",
                designation: "",
                date: ""
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
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // const handleInput = (e, val) => {
    //     // {
    //     //     name: "",
    //     //     designation: "",
    //     //     date: ""
    //     // }
    //     todo[val] = e.target.value
    // }
    
    return (
        <div className='container py-20'>
            <h1 className='text-center text-lg font-semibold text-gray-800'>Add Todo</h1>
            <p className='text-center text-sm font-normal text-gray-600 mb-10'>Add todo information in the form.</p>
            <form onSubmit={handleForm}>
                {/* <input type="text" defaultValue={todo.name} placeholder='name' onChange={(e) => handleInput(e, "name")} className="w-full h-10 my-2 border border-cyan-600 px-5 rounded-lg text-base text-gray-800 placeholder:text-gray-400 placeholder:text-base" /> */}

                <input type="text" value={todo.name} placeholder='name' onChange={(e) => setTodo({...todo, name:e.target.value})} className="w-full h-10 my-2 border border-cyan-600 px-5 rounded-lg text-base text-gray-800 placeholder:text-gray-400 placeholder:text-base" />

                <input type="text" value={todo.designation} placeholder='designation' onChange={(e) => setTodo({...todo, designation:e.target.value})} className="w-full h-10 my-2 border border-cyan-600 px-5 rounded-lg text-base text-gray-800 placeholder:text-gray-400 placeholder:text-base" />

                <input type="date" value={todo.date} placeholder='date' onChange={(e) => setTodo({...todo, date:e.target.value})} className="w-full h-10 my-2 border border-cyan-600 px-5 rounded-lg text-base text-gray-800 placeholder:text-gray-400 placeholder:text-base" />

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