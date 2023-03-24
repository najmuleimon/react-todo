import React from 'react'

const TodoTable = ({todos, handleEdit, handleDelete}) => {
  return (
    <table className='w-full table-auto'>
        <thead>
            <tr>
                <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Serial</th>
                <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Name</th>
                <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Designation</th>
                <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Date</th>
                <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Action</th>
            </tr>
            {
                todos.map((item, i) => (
                    <tr key={i}>
                        <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>{item.id}</td>
                        <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>{item.name}</td>
                        <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>{item.designation}</td>
                        <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>{item.date}</td>
                        <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>
                            <div className="flex items-center gap-2">
                                <button onClick={() => handleEdit(item.id)} className='bg-blue-700 text-white font-medium text-base px-4 py-2 transition-all duration-300 rounded-lg hover:bg-blue-800'>Edit</button>
                                <button onClick={() => handleDelete(item.id)} className='bg-red-700 text-white font-medium text-base px-4 py-2 transition-all duration-300 rounded-lg hover:bg-red-800'>Delete</button>
                            </div>
                        </td>
                    </tr>
                ))
            }
        </thead>
    </table>
  )
}

export default TodoTable