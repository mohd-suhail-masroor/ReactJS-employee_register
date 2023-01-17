import '../Create/Create.css'
import { useState } from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

function Edit() {
  const { id } = useParams();
  const url = `http://localhost:8000/employees/${id}`
  const [name, setName] = useState()
  const [fatherName, setFatherName] = useState()
  const [age, setAge] = useState()
  const [mobileNumber, setMobileNumber] = useState()
  const [designation, setDesignation] = useState('')
  const [address, setAddress] = useState('')
  const [salary, setSalary] = useState()
  const [advance, setAdvance] = useState()
  const [installment, setInstallment] = useState()
  const [image, setImage] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();


  useEffect(()=>{
    const AbortCont = new AbortController();

      fetch(url,{signal: AbortCont.signal})
      .then(res => {
        if(!res.ok){
          throw Error('could not fetch the data');
        }else
        return res.json();
      })
      .then(data=>{
        setName(data.name)
        setFatherName(data.fatherName)
        setAge(data.age)
        setDesignation(data.designation)
        setMobileNumber(data.mobileNumber)
        setAddress(data.address)
        setSalary(data.salary)
        setAdvance(data.advance)
        setInstallment(data.installment)
        setImage(data.image)
      })
  },[url])

  const handleUpdate = (e) => {
    e.preventDefault();

    const Employee = {name,fatherName,age,mobileNumber,designation,address,salary,advance,installment,image}

    setIsLoading(true)

    fetch(`http://localhost:8000/employees/${id}`,{
      method: 'PUT',
      headers: { "content-type":"application/json"},
      body: JSON.stringify(Employee)
    })
    .then(
      setIsLoading(false),
      navigate('/employees/'+id)
    )

  }

  return (
    <div className='create'>
        <h1>Edit an Employee</h1>
        <form className='newEmployeeForm' onSubmit={handleUpdate}>
          <div className="inputs">

            <div className="left-part">

              <label>Name:</label>
              <input type="text" required value={name} onChange={(e) =>setName(e.target.value)}/>

              <label>Age:</label>
              <input type="number" required value={age} onChange={(e) =>setAge(e.target.value)}/>

              <label>Mobile Number:</label>
              <input type="phone" value={mobileNumber} onChange={(e) =>setMobileNumber(e.target.value)}/>

              <label>Designation:</label>
              <input type="text" required value={designation} onChange={(e) =>setDesignation(e.target.value)}/>

            </div>
            <div className="right-part">

              <label>Father Name:</label>
              <input type="text" required value={fatherName} onChange={(e) =>setFatherName(e.target.value)}/>

              <label>Address:</label>
              <input type="text" required value={address} onChange={(e) =>setAddress(e.target.value)}/>

              <label>Salary:</label>
              <input type="number" required value={salary} onChange={(e) =>setSalary(e.target.value)}/>

              <label>Advance:</label>
              <input type="number" value={advance} onChange={(e) =>setAdvance(e.target.value)}/>

              <label>Installment:</label>
              <input type="number" value={installment} onChange={(e) =>setInstallment(e.target.value)}/>

          </div>
        </div>  


          <div className="submitButton">
            {!isLoading && <button >Update Employee</button>}
            {isLoading && <button disabled >Updating Employee</button>}
          </div>
        </form>

    </div>
  )
}

export default Edit