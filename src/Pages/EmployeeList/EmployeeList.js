import './EmployeeList.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'



function EmployeeList({employees, title}) {
  const [searchInput, setSearchInput] = useState('')
 
  
  return (
    <div className='Employee-list'>
      <span className="header">
        <h1 className='title'>{title}</h1>
        <input className='search-bar' 
               type="text" 
               placeholder='Search...' 
               onChange={e => 
                setSearchInput(e.target.value) 
               }/>
      </span>
      {employees.filter(employee => employee.name.toLowerCase().includes(searchInput)).map(employee =>(
          <div className="employee-preview" key={employee.id}>
            <Link to={`/employees/${employee.id}`} >
              <span className="info">
                <h2>{employee.name}</h2>
                <p>Father Name: {employee.fatherName}</p>
                <p>Designation: {employee.designation}</p>
                <p>Age: {employee.age}</p>
                <p>Mobile Number: {employee.mobileNumber}</p>
              </span>
            </Link>
          </div>
      ))}
    </div>
  )
}

export default EmployeeList
