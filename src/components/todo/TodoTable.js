

const TodoTable = ({todos, handleEdit, handleDelete}) => {
  return (
    <div className="overflow-x-auto">
      <table className='w-full table-auto'>
          <thead>
              <tr>
                  <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Id</th>
                  <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Title</th>
                  <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Edit</th>
                  <th className='text-base font-semibold border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>Delete</th>
              </tr>
              {
                todos.map((item, i) => (
                  <tr key={i}>
                      <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>{item.id}</td>
                      <td className={`text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left ${item.completed ? 'line-through text-green-700' : ''}`}>{item.title}</td>
                      <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>
                        <button onClick={() => handleEdit(item.id)} className='bg-blue-500 text-white font-medium text-base px-4 py-2 transition-all duration-300 rounded-lg hover:bg-blue-700'>Edit</button>
                      </td>
                      <td className='text-base font-normal border border-cyan-600 p-2 text-gray-800 mb-10 text-left'>
                        <button onClick={() => handleDelete(item.id)} className='bg-red-500 text-white font-medium text-base px-4 py-2 transition-all duration-300 rounded-lg hover:bg-red-700'>Delete</button>
                      </td>
                  </tr>
                ))
              }
          </thead>
      </table>
    </div>
  )
}

export default TodoTable