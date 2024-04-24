import './App.css'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Login from './component/Login/Login';
import Signup from './component/Signup/Signup';
import Dashboard from './component/Dashboard/Dashboard';
// import SubCategory from './Layout/SubCategory';
function App() {
  

  return (
  
    <>
      
      <Router>
      {/* <Navbar title = "Shraddha" aboutText = "About" numberFom={13212}/> */}
      <div className="">
        <Routes>
          <Route exact path ='/' element={<Login/>}/>
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Dashboard" element={<Dashboard/>} />
          {/* <Route path='/Subcategory' element={<SubCategory/>}/> */}
        </Routes>
      </div> 
      </Router>  
    </>
  )
}

export default App
