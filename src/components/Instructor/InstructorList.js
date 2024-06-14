import React, { useEffect, useState } from "react";  
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function InstructorList() {
let [instList, setinstList] = useState(null);


  //formik form
  const formik = useFormik({
    initialValues: {
      instructorName: "",
    },
    validationSchema: Yup.object({
      instructorName: Yup.string()
        .min(2, "Too Short!")
        .max(15, "Too Long!")
        .required("Required Instructor Name"),
      // email: Yup.string().email('Invalid email').required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      console.log(values);

      try{
        fetch(process.env.REACT_APP_API+'/instructorList',{
          method:"POST",
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(values)
        })
        .then(res=>res.json)
        .then(value=>{
          console.log(value);
          resetForm();
          fetchData();
          
        })
      }catch(error){
        console.log(error);
      }
    },
  });


  // use effect
  function fetchData(){
    try{
      fetch(process.env.REACT_APP_API+'/instructorList')
      .then(res=>res.json())
      .then(value=>{
        console.log(value);
        setinstList(value)
      })
    }catch(error){
      console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchData();
  },[]) 



  return (
    <div>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>INSTRUCTOR </h1>
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

      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Instructor Form</h3>
                </div>
                <form onSubmit={formik.handleSubmit}>
                  <div class="card-body">
                    <div class="form-group">
                      <label for="exampleInputInstructor">
                        Instructor Name
                      </label>
                      <input
                        className="form-control"
                        placeholder="Enter Instructor Name"
                        id="instructorName"
                        name="instructorName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.instructorName}
                      />
                      {formik.touched.instructorName &&
                      formik.errors.instructorName ? (
                        <div>{formik.errors.instructorName}</div>
                      ) : null}

                      {/* <input type="text" class="form-control" id="exampleInputInstructor" placeholder="Enter Instructor Name" /> */}
                    </div>
                  </div>

                  <div class="card-footer">
                    <button className="btn btn-primary" type="submit">
                      {" "}
                      Add
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">List of Instructor</h3>
                </div>
                <div className="card-body">
       <table className="table table-hover  table-bordered table-md table-responsive-sm">
       <thead className='table-primary'>
          <tr>
            <th style={{"width":"100px"}}>Sr No.</th>
            <th>Instructor Name </th> 
          </tr>
        </thead>
        <tbody>
            {
            instList && instList.length > 0 && instList.map((value,index) =>
              <tr key={value.id}>
                <td>{index}</td>
                <td>{value.instructorName}</td>
              </tr>

            )
          }  
          
        </tbody>
      </table>
       
    </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
