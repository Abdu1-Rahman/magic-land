import React from 'react'
import AdminNavbar from '../admincomponents/AdminNavbar'
import SearchBox from '../admincomponents/SearchBox'

const MainDashboard = () => {
  return (
    <div className='flex'>
      <AdminNavbar/>
      
      <SearchBox/>
    </div>
  )
}

export default MainDashboard