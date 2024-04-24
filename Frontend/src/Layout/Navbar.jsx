import React, { useState } from 'react';
import './Style.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isCollapsedTwo, setIsCollapsedTwo] = useState(false);

  const toggleCollapseTwo = () => {
    setIsCollapsedTwo(!isCollapsedTwo);
  };

  return (
    <div> 
      <ul className="navbar-nav bg-gradient-danger fixed-left sidebar sidebar-dark accordion" id="accordionSidebar">
        {/* Sidebar - Brand */}
        <a
          className="sidebar-brand d-flex align-items-center justify-content-center"
          // href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
          {/* <img src="/icons/logo.png" alt="" /> */}
          </div>
          <div className="sidebar-brand-text mx-3">
            Patepooja
          </div>
        </a>
        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Nav Item - Dashboard */}
        <li className="nav-item active">
          <a className="nav-link" href="/Dashboard">
            <i className="fas fa-fw fa-tachometer-alt iii" />
            <span className='sidenav-menu'>Dashboard</span>
          </a>
          <hr className="sidebar-divider" />
        </li>
        <div className="sidebar-heading"> <i className="fa-solid fa-utensils "></i><b className='px-2'>Category</b></div>

        {/* Add Menu */}
        <li className={`nav-item ${isCollapsedTwo ? 'active' : ''} menus`}>
          <div className="nav-link" onClick={toggleCollapseTwo}>
            <div className='d-flex justify-content-between'>
              <i className="fa-solid fa-bowl-rice text-white pt-2 iii"></i>
              <span className='text-white sidenav-menu'>Add Menu</span>
              <i className={`fas fa-angle-${isCollapsedTwo ? 'down' : 'right'} ml-auto text-white`}></i>
            </div>
          </div>
          <div className={`collapse ${isCollapsedTwo ? 'show' : ''} list-menu`} style={{ transition: 'height 2.3s ease !important' }}>
            <div className="  py-2 collapse-inner rounded border-none">
              <div className="bg-danger ">
              <a href="/Subcategory" className="list-group-item list-group-item-action ">
                  Sub Category
                </a>
                <a href="#" className="list-group-item list-group-item-action ">Pulao naan lunch combo </a>
                <a href="#" className="list-group-item list-group-item-action">North Indian Thali / Indian</a>
                <a href="#" className="list-group-item list-group-item-action">Mattar TIkki</a>
              </div>
            </div>
          </div>
        </li>

        {/* Divider */}
        <hr className="sidebar-divider" />
        {/* Addons */}
        <div className="sidebar-heading"> <i className="fa-solid fa-blender"></i> <b className='px-1'>Addons</b></div>

        {/* Drinks */}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fa-solid fa-blender text-white iii"></i>
            <span className='text-white '>Drinks</span>
          </a>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Login Screens:</h6>
              <a className="collapse-item" href="login.html">
                Login
              </a>
              <a className="collapse-item" href="register.html">
                Register
              </a>
              <a className="collapse-item" href="forgot-password.html">
                Forgot Password
              </a>
              <div className="collapse-divider" />
              <h6 className="collapse-header">Other Pages:</h6>
              <a className="collapse-item" href="404.html">
                404 Page
              </a>
              <a className="collapse-item" href="blank.html">
                Blank Page
              </a>
            </div>
          </div>
        </li>

        {/* Charts */}
        <li className="nav-item">
          <a className="nav-link" href="charts.html">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>

        {/* Tables */}
        <li className="nav-item">
          <a className="nav-link" href="tables.html">
            <i className="fas fa-fw fa-table" />
            <span>Tables</span>
          </a>
        </li>

        {/* Sidebar Toggler (Sidebar) */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
