import React from 'react'

function AssignCourse() {
  return (
    <div>

    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Assign Course </h1>
          </div>
          {/* <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">General Form</li>
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
                <h3 className="card-title">Assign Course Form</h3>
              </div> 
              
              <form>
    <div className="card-body">
    <div className="form-group">
        <label for="exampleInputCourse">Instructor Name</label>
        <select className="form-control">
          <option>--Select Instructor--</option>
          <option>Instructor 1</option>
        </select>
        {/* <input type="text" className="form-control" id="exampleInputCourse" placeholder="Enter Instructor Name" /> */}
      </div>
      <div className="form-group">
        <label for="exampleInputCourse">Course Name</label>
        <select className="form-control">
          <option>--Select Course--</option>
          <option>Course 1</option>
        </select>
        {/* <input type="text" className="form-control" id="exampleInputCourse" placeholder="Enter Course Name" /> */}
      </div>
      <div className="form-group">
        <label for="exampleInputLevel">Date</label>
        <input type="date" className="form-control" id="exampleInputDate" placeholder="Enter date" />
      </div>
      <div className="form-group">
        <label for="exampleInputLevel">Start Time</label>
        <input type="time" className="form-control" id="exampleInputDate" placeholder="Enter Start Time" /> 
      </div>
      <div className="form-group">
        <label for="exampleInputLevel">End Time</label>
        <input type="time" className="form-control" id="exampleInputDate" placeholder="Enter End Time" /> 
      </div> 
      {/* <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div> */}
      
     
    </div>
    {/* card-body  */}

    <div className="card-footer">
    <button className='btn btn-primary'> Assign  </button> 
    </div>
  </form>
  

              </div>              
            </div>
            {/* <div className='col-md-6'>
              <div className='card card-primary'>
              <div className="card-header">
                <h3 className="card-title">List of Instructor</h3>
              </div> 
              <ListOfInstructor></ListOfInstructor>
              </div>              
            </div> */}

            </div>
          </div>

   </section>  
    </div>
  )
}

export default AssignCourse