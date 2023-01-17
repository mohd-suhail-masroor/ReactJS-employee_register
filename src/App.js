// package imports
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

// stylesheet imports
import './App.css';

//components imports
import Navbar from './Components/Navbar/Navbar';

// pages imports
import Home from './Pages/Home'
import Create from './Pages/Create/Create'
import EmployeeDetail from './Pages/EmployeeDetail/EmployeeDetail'
import NotFound from './Pages/NotFound/NotFound'
import Edit from './Pages/Edit/Edit';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} /> 
            <Route path='/create' element={<Create />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/employees/:id' element={<EmployeeDetail />} />
            <Route path='*' element={<NotFound />} />            
          </Routes>
        </div>
      </div>

    </Router>
  );
}

export default App;
