import React from 'react'

function AddCourse() {
  return (
    <form>
    <div className="card-body">
      <div className="form-group">
        <label for="exampleInputCourse">Course Name</label>
        <input type="text" className="form-control" id="exampleInputCourse" placeholder="Enter Course Name" />
      </div>
      <div className="form-group">
        <label for="exampleInputLevel">Level</label>
        <input type="text" className="form-control" id="exampleInputLevel" placeholder="Enter Level" />
      </div>
      <div className="form-group">
        <label for="exampleInputLevel">Description</label>
        <textarea className='form-control'></textarea> 
      </div>
      <div className="form-group">
        <label for="exampleInputLevel">Image</label>  
      </div>
      <div className="form-group">
        <label for="exampleInputLevel">Batches</label>  
        <select className='form-control'>
          <option>--Select--</option>
          <option> Batch 1</option>
          <option> Batch 2</option>
          <option> Batch 3</option>
        </select>
      </div>
      {/* <div className="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
      </div> */}
      
     
    </div>
    {/* card-body  */}

    <div className="card-footer">
    <button className='btn btn-primary'> Add </button> 
    </div>
  </form>
  )
}

export default AddCourse