import './Create.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Create() {
  const [name, setName] = useState('')
  const [fatherName, setFatherName] = useState('')
  const [age, setAge] = useState()
  const [mobileNumber, setMobileNumber] = useState()
  const [designation, setDesignation] = useState('')
  const [address, setAddress] = useState('')
  const [salary, setSalary] = useState()
  const [advance, setAdvance] = useState()
  const [installment, setInstallment] = useState()
  const [isPending, setIsPending] = useState(false)
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();

    const Employee = {name,fatherName,age,mobileNumber,designation,address,salary,advance,installment}

    setIsPending(true)

    fetch('http://localhost:8000/employees',{
      method: 'POST',
      headers: { "content-type":"application/json"},
      body: JSON.stringify(Employee)
    })
    .then(
      setIsPending(false),
      navigate('/')
    )
  }

  return (
    <div className='create'>
      <h1>Add a New Employee</h1>
      <form className='newEmployeeForm' onSubmit={handleSubmit}>
        <div className="inputs">
          <div className="left-part">
            <label>Name:</label>
            <input type="text" required onChange={(e) =>setName(e.target.value)}/>
            <label>Age:</label>
            <input type="number" required onChange={(e) =>setAge(e.target.value)}/>
            <label>Mobile Number:</label>
            <input type="phone"  onChange={(e) =>setMobileNumber(e.target.value)}/>
            <label>Designation:</label>
            <input type="text" required onChange={(e) =>setDesignation(e.target.value)}/>
          </div>
          <div className="right-part">
            <label>Father Name :</label>
            <input type="text" required onChange={(e) =>setFatherName(e.target.value)}/>
            <label>Address:</label>
            <input type="text" required onChange={(e) =>setAddress(e.target.value)}/>
            <label>Salary:</label>
            <input type="number" required onChange={(e) =>setSalary(e.target.value)}/>
            <label>Advance:</label>
            <input type="number"  onChange={(e) =>setAdvance(e.target.value)}/>
            {advance && (<>
              <label>Installment:</label>
              <input type="number"  onChange={(e) =>setInstallment(e.target.value)}/>
              </>
            )}
          </div>
        </div>  
        <div className="submitButton">
          {!isPending && <button >Add Employee</button>}
          {isPending && <button disabled >Adding Employee</button>}
        </div>
      </form>
    </div>
  )
}

export default Create