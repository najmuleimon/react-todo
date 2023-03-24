import React from 'react'

const TodoInput = ({type, placeholder, name, value, todo, setTodo}) => {
  return (
    <input value={value} type={type} placeholder={placeholder} name={name} onChange={(e) => setTodo({...todo, name:e.target.value})} className="w-full h-10 my-2 border border-indigo-600 px-5 rounded-lg text-base text-gray-800 capitalize placeholder:text-gray-400 placeholder:text-base"/>
  )
}

export default TodoInput