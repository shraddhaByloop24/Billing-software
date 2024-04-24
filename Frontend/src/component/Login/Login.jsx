import { Link, useNavigate } from 'react-router-dom';
import './Loginstyle.css';
import axios from 'axios';
import { useState } from 'react';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { email, password });
      if (response.data === 'Success') {
        navigate('/Dashboard');
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="container-fluid  Login">
      <div className="row">
        <div className="col-lg-6 px-0">
          <img src="/image/login-img2.png" className='img-fluid' alt="" />
        </div>
        <div className="col-lg-6 login-col">
          <div className='backgroundimage'>
            <img src="/image/login-img.png" className="login-image" alt="" />
          </div>
          <div className="">
            <div className="box-root flex-flex flex-direction--column">
              <div className="formbg-outer">
                <span className="password-toggle" onClick={togglePasswordVisibility}>
                  {showPassword ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}
                </span>
                <div className="formbg">
                  <div className="formbg-inner padding-horizontal--48">
                    <h1 className='login-heading'>Sign in to your account 👋</h1>
                    <form id="stripe-login" onSubmit={handleSubmit}>
                      <div className="field padding-bottom--24">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='Enter your email' name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="field padding-bottom--24">
                        <label htmlFor="password">Password</label>
                        <input type={showPassword ? 'text' : 'password'}  placeholder='Enter your password' name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="field padding-bottom--24 d-grid gap-2">
                        <button className="btn login-btn "  type="submit">Submit</button>
                      </div>
                      <div className='newAcc'>
                        <span>New on our platform? <Link to="/Signup">Create an account</Link></span>
                      </div>
                      <div className="field or pt-4">
                        <hr />
                        <p>or</p>
                        <hr />
                      </div>
                    </form>
                  </div>
                  <div className="footer-link pb-3">
                    <div className="listing flex-flex center-center">
                      <span className='icon'>
                        <a href=""><i className="fa-brands fa-facebook-f"></i></a>
                      </span>
                      <span className='icon'>
                        <a href=""><i className="fa-brands fa-google"></i></a>
                      </span>
                      <span className='icon'>
                        <a href=""><i className="fa-brands fa-twitter"></i></a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
