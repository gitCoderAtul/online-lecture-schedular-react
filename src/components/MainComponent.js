import React from 'react'
import { Outlet } from 'react-router-dom'

function MainComponent() {
  return (
    // <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      
      <Outlet></Outlet> 
     
    </div>
    // <!-- /.content-wrapper -->
  )
}

export default MainComponent