import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom"; 
import InstructorList from './components/Instructor/InstructorList';
import MainComponent from './components/MainComponent';
import CourseList from './components/Courses/CourseList';
import App from './App';
import AssignCourse from './components/Courses/AssignCourse';
import Login from './components/Login';
import Dashboard from './components/Dashboard/Dashboard';

  const appRouter = createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
        path: "/App",
        element: <App />, 
        children: [
            {path:"" , element:<MainComponent />},  
            {path:"Dashboard" , element:<Dashboard />},  
            {  path: "InstructorList", element: <InstructorList />  },
            {  path: "CourseList", element: <CourseList />  },
            {  path: "AssignCourse", element: <AssignCourse />  },
        ],
      },
    ]);
 

export default appRouter