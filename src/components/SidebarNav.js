import React from 'react'
import { Link } from 'react-router-dom'

function SidebarNav() {
  return (
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
    {/* <!-- Brand Logo --> */}
    <a href="index3.html" class="brand-link text-center">
     
      <span class="brand-text font-weight-light">OLSModule</span>
    </a>

    {/* <!-- Sidebar --> */}
    <div class="sidebar">
      {/* <!-- Sidebar user panel (optional) --> */}
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
            {/* <img src='assets/img/user2-160x160.jpg' class="img-circle elevation-2" alt="User Image" ></img> */}
          {/* <img src="assets/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image" /> */}
        </div>
        <div class="info">
          <a href="#" class="d-block">Alexander Pierce</a>
        </div>
      </div>

      {/* <!-- SidebarSearch Form --> */}
      <div class="form-inline">
        <div class="input-group" data-widget="sidebar-search">
          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search"/>
          <div class="input-group-append">
            <button class="btn btn-sidebar">
              <i class="fas fa-search fa-fw"></i>
            </button>
          </div>
        </div>
      </div>

      {/* <!-- Sidebar Menu --> */}
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          
          {/* <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Dashboard
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Dashboard v1</p>
                </a>
              </li> 
            </ul>
          </li> */}
            <li class="nav-item">
          <Link to="/App/Dashboard" class="nav-link active">
          <i class="nav-icon fas fa-tachometer-alt"></i>  
              <p>
                Dashboard 
              </p>
           </Link>
          </li>
          <li class="nav-item">
          <Link to="/App/InstructorList" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Instructor List
                <span class="right badge badge-danger">New</span>
              </p>
           </Link>
          </li>
          <li class="nav-item">
          <Link to="/App/CourseList" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Course List
                <span class="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
          <li class="nav-item">
          <Link to="/App/AssignCourse" class="nav-link">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Assign Course
                <span class="right badge badge-danger">New</span>
              </p>
            </Link>
          </li>
         
        </ul>
      </nav>
      {/* <!-- /.sidebar-menu --> */}
    </div>
    {/* <!-- /.sidebar --> */}
  </aside>
  )
}

export default SidebarNav