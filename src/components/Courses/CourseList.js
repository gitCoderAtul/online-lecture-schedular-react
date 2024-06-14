import React from 'react'
import AddCourse from './AddCourse'
import ListOfCourse from './ListOfCourse'

function CourseList() {
  return (
    <div>
    <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Courses </h1>
        </div>
        {/* <div class="col-sm-6">
          <ol class="breadcrumb float-sm-right">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active">General Form</li>
          </ol>
        </div> */}
      </div>
    </div> 
  </section>

 <section className='content'>
        <div className='container-fluid'>
          <div className='row'>
          <div className='col-md-6'>
            <div className='card card-primary'>
            <div className="card-header">
              <h3 className="card-title">Course Form</h3>
            </div> 
            <AddCourse></AddCourse>
            </div>              
          </div>
          <div className='col-md-6'>
            <div className='card card-primary'>
            <div className="card-header">
              <h3 className="card-title">List of Course</h3>
            </div> 
            <ListOfCourse></ListOfCourse>
            </div>              
          </div>

          </div>
        </div>

 </section> 
 </div>
  )
}

export default CourseList