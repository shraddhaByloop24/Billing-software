import axios from 'axios';
import { useState } from 'react';
import Navbar from './Navbar'
import Header from './Header'
import Calculated from './Calculated'
import Footer from './Footer'

const Subcategory = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [foodtype, setFoodtype] = useState('');
  const [foodcategory, setFoodcategory] = useState('');
  const [description, setDescription] = useState('');
  const [foodimg, setFoodimg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:3001/food', {
        name,
        price,
        foodtype,
        foodcategory,
        description,
        foodimg
      })
      .then((response) => {
        console.log('Food item created successfully:', response.data);
        // Clear form fields after successful submission
        setName('');
        setPrice('');
        setFoodtype('');
        setFoodcategory('');
        setDescription('');
        setFoodimg('');
      })
      .catch((error) => {
        console.error('Error creating food item:', error);
      });
  };

  return (
    <>
      <div id="wrapper" className='sub-category'>
        <Navbar/>
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header/>
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-download fa-sm text-white-50" /> Generate Report
                </a>
              </div>
              <Calculated/>
              <div className="row">
                <div className="col-xl-12 col-lg-12 ">
                  <div className="card shadow mb-4">
                    <div className="card-header py-3  flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Earnings Overview 
                      </h6>
                      <section className="mt-2 ">
                      <form className="contact-form row p-0" onSubmit={handleSubmit} >
                          <div className="form-field col-lg-6">
                            <input
                              name="name"
                              className="input-text js-input"
                              type="text"
                              onChange={(e)=>setName(e.target.value)}
                              required=""
                            />
                            <label className="label" htmlFor="name">
                              Food Name
                            </label>
                          </div>
                          <div className="form-field col-lg-6 ">
                            <input
                              name="price"
                              className="input-text js-input"
                              type="number"
                              onChange={(e)=>setPrice(e.target.value)}
                              required=""
                            />
                            <label className="label" htmlFor="">
                              Price
                            </label>
                          </div>
                          <div className="form-field col-lg-6 ">
                          <select className="input-text " name="foodtype" onChange={(e)=>setFoodtype(e.target.value)}>
                            <option value="Veg">🟢Veg</option>
                            <option value="Non-Veg">🔴Non-Veg</option>
                          </select>

                               <label className="label" htmlFor="company">
                                 Food Type
                               </label>
                          </div>
                          <div className="form-field col-lg-6 ">
                              <select className="input-text " name="foodcategory" onChange={(e)=>setFoodcategory(e.target.value)}>
                                   <option value="Stater">Stater</option>
                                   <option value="Lunch">Lunch</option>
                                   <option value="3">Dinner</option>
                                </select>
                               <label className="label" htmlFor="company">
                                 Food Category
                               </label>
                          </div>
                          
                          <div className="form-field col-lg-6">
                            <input
                              name="description"
                              className="input-text js-input"
                              type="text"
                              onChange={(e)=>setDescription(e.target.value)}
                              required=""
                            />
                            <label className="label" htmlFor="">
                            Description
                            </label>
                          </div>
                          <div className="form-field col-lg-6">
                            <input
                              name="foodimg"
                              className="pt-2 js-input"
                              type="file"
                              onChange={(e)=>setFoodimg(e.target.value)}
                              required=""
                            />
                           
                          </div>

                          <div className="form-field ">
                            <button className="btn bg-gradient-danger text-white px-5" type="submit"  >Submit</button>
                          </div>
                        </form>
                      </section>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
      <a className="scroll-to-top rounded" href="#page-top">
        <i className="fas fa-angle-up" />
      </a>
      <div
        className="modal fade"
        id="logoutModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <a className="btn btn-primary" href="login.html">
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subcategory
