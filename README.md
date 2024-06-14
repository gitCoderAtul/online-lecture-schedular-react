 
### Formik
```
const AddInstructorSchema = Yup.object({
    instructorName: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required Instructor Name'), 
  });
  
  function handleSubmit(values, { setSubmitting,resetForm  }) { 
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        fetch('http://localhost:8100/instructorList',{
          method:'POST',
          mode: "cors", // no-cors, *cors, same-origin 
          credentials: "same-origin", // include, *same-origin, omit
          headers:{
            "Content-Type": "application/json",
          },
          body:JSON.stringify(values)
         })
         console.log(values);
         resetForm()
        setSubmitting(false);
      }, 400);
     
  }
<Formik initialValue={{}} validationSchema={nameofSchema} onSubmit={functionName-handleSubmit}>
{({ errors, touched }) => ( 
    <Form>
        <Field name="instructorName" placeholder="Enter Instructor Name" className="form-control" type="text" />
           {/* If this field has been touched, and it contains an error, display it */}
           
           {touched.instructorName && errors.instructorName && <div>{errors.instructorName}</div>}

    </Form> 
  )}
</Formik>
```

### Library Install

npm install react-router-dom 
npm i bootstrap
npm install formik --save
npm i yup
npm install @reduxjs/toolkit react-redux

# Run json server

npx json-server db.json
npx json-server --watch db.json --port 8500

### Overview: This will be a lecture scheduling module, 
you have to build an admin panel 
wherein the admin should have the functionality to add courses and their lectures along with the date of the lectures. 
The backend code written should make sure that no two schedules set for lectures clash with each other. 
#### Admin Panel: 
1. admin can see list of all Instructors (You can add random users) 
2. admin can add courses Course will have the following details 
    a. Name 
    b. Level 
    c. Description 
    d. Image 
    e. Multiple Lectures (batches) -> 
    can be added after the course is added. as one course can have multiple batches 
3. These lectures could be assigned to any instructor on any particular date. 
    Once a lecture is assigned to an instructor on a particular date, 
    The admin panel shouldn't allow the instructor to be assigned to any other lecture on that date. 
4. When a course is added the dates will be assigned to the selected instructor 
5. No other course can be assigned to that instructor with the same date again 
    (example: if a course's lecture has been assigned to instructor rahul on 1st January, 
    then the admin should be unable to assign him any other lecture on 1st January. 
 ### Instructor panel: 
    This panel should have the list of all lectures assigned to the logged in instructor with dates and course names.

## Available Scripts 
In the project directory, you can run:

### `npm start`
 
### `npm run build`
 
 

 