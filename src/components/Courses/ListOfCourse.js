import React from 'react' 

function ListOfCourse() {
  return (
    <div className="card-body">
       <table className="table table-hover  table-bordered table-md table-responsive-sm">
       <thead className='table-primary'>
          <tr>
            <th style={{"width":"100px"}}>Sr No.</th>
            <th>Course Name </th> 
            <th>Level</th>
            <th>Description</th>
            <th>Batch</th>
          </tr>
        </thead>
        <tbody>
         
        </tbody>
      </table>
       
    </div>
  )
}

export default ListOfCourse