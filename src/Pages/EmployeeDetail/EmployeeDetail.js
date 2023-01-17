import { useParams,useNavigate,Link } from 'react-router-dom'
import useFetch from '../../hooks/useFetch';
import './EmployeeDetail.css'


function EmployeeDetail() {
    const { id } = useParams();
    const {data: employee, isPending, error } = useFetch('http://localhost:8000/employees/' + id)

    const navigate = useNavigate();


    const handleDelete = ()=>{
      fetch('http://localhost:8000/employees/'+id,{
        method: 'DELETE'
      })
      navigate('/')
    }

  return (
    <div>
      <div className="employee-details">
        {isPending && <h2>Loading!!!</h2>}
        {error && <div>{error}</div>}
        {employee && (
          <div className='employee-detail-container'>
            <span className="employee-info">
              <span className="text-info">
                <h2>Name: {employee.name}</h2>
                <p>Father Name: {employee.fatherName}</p>
                <p>Age: {employee.age}</p>
                <p>Designation: {employee.designation}</p>
                <p>Address: {employee.address}</p>
                <p>Mobile Number: {employee.mobileNumber}</p>
                <p>Salary: {employee.salary}</p>
                {employee.advance && (<>
                  <p>Advance: {employee.advance}</p>
                  <p>Installment: {employee.installment}</p>
                </>  
                )}
              </span>  
            </span>
            <span className="buttons">
              <button className='edit-button btn'><Link to={`/edit/${id}`}>Edit Employee</Link></button>
              <button className='delete-button btn' onClick={handleDelete}>Delete Employee</button>
            </span>

            
            
          </div>
        )}
        

      </div>
    </div>
  )
}

export default EmployeeDetail