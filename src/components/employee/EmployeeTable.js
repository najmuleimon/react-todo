import React from 'react'

const EmployeeTable = ({employees}) => {
  return (
    <table className='w-full table-fixed'>
        <thead>
            <tr>
                <th className='text-base font-semibold border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>Serial</th>
                <th className='text-base font-semibold border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>Name</th>
                <th className='text-base font-semibold border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>Designation</th>
                <th className='text-base font-semibold border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>Date</th>
            </tr>
            {
                employees.map((item, i) => (
                    <tr key={i}>
                        <td className='text-base font-normal border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>{i + 1}</td>
                        <td className='text-base font-normal border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>{item.name}</td>
                        <td className='text-base font-normal border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>{item.designation}</td>
                        <td className='text-base font-normal border border-indigo-600 p-2 text-gray-800 mb-10 text-left'>{item.date}</td>
                    </tr>
                ))
            }
        </thead>
    </table>
  )
}

export default EmployeeTable