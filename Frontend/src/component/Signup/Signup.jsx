import { Link ,useNavigate} from 'react-router-dom';
import './Signup.css'
import axios from 'axios';
import { useState } from 'react';


const Signup = () => {
  const [name, setName] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [address, setAddress] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
      e.preventDefault()
      axios.post('http://localhost:3001/register', {name, password, email, mobile, address})
      .then(result => console.log(result))
      .catch(err => console.log(err))
        navigate('/');
  }

  return (
    <div className='container-fluid Signup px-5    '>
      <div className="row rows">
        <div className="col-lg-5  heading-section">
          <div>
            <div className='h-1'>
            <hr /> 
            <h1 className='heading1 text-center'>Hello! Foodies <img src="/public/icons/fried-chicken.png " className='icons' width={60} alt="" /> </h1>
            <hr />
            </div>
            <div className='h-2'>
            <hr /> 
            <h1 className='heading text-center'>Welcome to our Restaurant</h1>
            <hr />
            <p className='registration-paragraph'><i className="fas fa-quote-left"></i>Indulge in culinary excellence at our restaurant, where every dish tells a story of flavor and finesse. 
              From the sizzle of our signature steaks to the delicate dance of spices in our exotic dishes, 
              we invite you on a gastronomic journey like no other<i className="fas fa-quote-right"></i></p>
            </div>
          </div>
        </div>
        <div className='col-lg-3 img-section p-0'>
            <img src="img2.png" className="responsive-image  pt-5" alt="" />
        </div>
        <div className="col-lg-4 p-0 form-section registration">
        
          <form action="#" onSubmit={handleSubmit} className="form p-lg-5">
            <h1 className='header'>Registration here 👋</h1>
            <div className="input-box">
              <label>Full Name</label>
              <input type="text" placeholder="Enter full name"
              name='name'
              // onChange={(e) =>setName(e.target.value)}
              onChange={(e) => setName(e.target.value)}
              required="" />
            </div>
            <div className="input-box">
              <label>Email Address</label>
              <input type="text" placeholder="Enter email address"
              name='email'
              onChange={(e)=>setEmail(e.target.value)}
              required="" />
            </div>
            <div className="column">
              <div className="input-box">
                <label>Password</label>
                <input type="password" placeholder="Enter your password"
                name='password' 
                onChange={(e)=> setPassword(e.target.value)}
                required="" />
              </div>
              <div className="input-box">
                <label>Mobile no</label>
                <input type="number" placeholder="Enter phone number" 
                name='mobile'
                onChange={(e)=>setMobile(e.target.value)}
                required="" />
              </div>
            </div>
            <div className="input-box">
                <label>Address</label>
                <input type="text" placeholder="Enter phone Address" 
                onChange={(e)=>setAddress(e.target.value)}
                required="" />
              </div>
              <div className="agree">
                  <input type="checkbox" id="termsAndConditions" name="termsAndConditions" required/>
                <label className='mt-2 px-2 agree-line' >I agree to the terms and conditions</label>
              </div>
              <div className='newAcc'>
                  <span>
                    New on our platform?  <Link to="/">
                    if have already account</Link>
                  </span>
                  
                

               
              </div>
                      
              <div className=" d-grid gap-2 mt-2">
                 <button className="btn register-btn p-2" type="submit">Submit</button>
              </div>
          </form>
        </div>
        {/* <div className="col-lg-2 bg-info"></div> */}
      {/* </div> */}








       {/* <!-- Modal --> */}
       
      
    </div>
    </div>
           

  )
}

export default Signup

