import './NotFound.css'
import {Link} from 'react-router-dom'

function NotFound() {
  return (
    <div>
      <h2>Sorry</h2>
      <p>Page Not found</p>
      <Link to='/'>Go Back to Home Page</Link>
    </div>
  )
}

export default NotFound