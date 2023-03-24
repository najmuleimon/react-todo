import { useState } from 'react';
import EmployeeTable from './EmployeeTable';
import InputField from './InputField';

const Employee = () => {
    const [employees, setEmployees] = useState([]);

    const handleForm = (e) => {
        e.preventDefault();
        const employee = {
            name: e.target.empName.value,
            designation: e.target.designation.value,
            date: e.target.date.value
        }
        setEmployees([...employees, employee]);
        e.target.reset();
    }
    
    return (
        <div className='container py-20'>
            <h1 className='text-center text-lg font-semibold text-gray-800'>Add Employee</h1>
            <p className='text-center text-sm font-normal text-gray-600 mb-10'>Add employee information in the form.</p>
            <form onSubmit={handleForm}>
                <InputField type="text" placeholder='name' name="empName"/>
                <InputField type="text" placeholder='designation' name="designation"/>
                <InputField type="date" placeholder='date' name="date"/>
                <button type='submit' className='w-full bg-indigo-700 text-white font-medium text-base py-2 transition-all duration-300 rounded-lg hover:bg-indigo-800'>Submit</button>
            </form>

            <div className='mt-10 '>
                <h1 className='text-center text-lg font-semibold text-gray-800'>Employee List</h1>
                <p className='text-center text-sm font-normal text-gray-600 mb-10'>Add employee information in the form to see the list</p>
            
                {
                    employees.length > 0 ?
                    <EmployeeTable employees={employees}/>
                    : <p className='text-center text-base font-normal text-gray-600 mt-10'>No Items to show!</p>
                }
            </div>
        </div>
    )
}

export default Employee