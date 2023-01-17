import useFetch from '../hooks/useFetch'
import EmployeeList from './EmployeeList/EmployeeList'

const Home = () => {
  const {data:employees, isPending, error} = useFetch('http://localhost:8000/Employees')
  
  return (
    <div className='home'>
        {error && <div>{error}</div> }
        {isPending && <p>Loading!!!</p> }
        {employees && <EmployeeList employees={employees} title='All Employees'/>}
    </div>
  )
}

export default Home
