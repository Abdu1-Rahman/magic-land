import React, { useEffect, useState } from 'react';
import AdminNavbar from '../admincomponents/AdminNavbar';
import axios from 'axios';

const Users = () => {

  const[users,setUsers] = useState([])

  let token=localStorage.getItem('token')
   
  useEffect(() => {
    let fetchUser = async () => {
      try {
         
        let user = await axios.get('http://localhost:5000/admin/Getusers', { headers: { Authorization: `Bearer ${token}` } });
        setUsers(user.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchUser();
  }, []);

  return (
    <div className='flex'>
      <AdminNavbar/>
      <div className="text-gray-900 bg-gray-200 w-full ml-64">
        <div className="p-4 flex">
          <h1 className="text-3xl">Users</h1>
        </div>
        <div className="px-3 py-4 flex justify-center">
          <table className="w-full text-md bg-white shadow-md rounded mb-4">
            <tbody>
              <tr className="border-b">
                <th className="text-left p-3 px-5">Name</th>
                <th className="text-left p-3 px-5">Email</th>
              </tr>
              {
                users.map(user => {
                 return(
                   <tr className='border-b hover:bg-orange-100 bg-gray-100'>
                    <td className='p-3 px-5'>{user.username}</td>
                    <td className='p-3 px-5'>{user.email}</td>
                  </tr>
                )})

              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
