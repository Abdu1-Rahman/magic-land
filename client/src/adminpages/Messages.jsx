import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AdminNavbar from '../admincomponents/AdminNavbar';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

function createData(firstName, lastName, phone, email, referral, message) {
  return { firstName, lastName, phone, email, referral, message };
}


export default function BasicTable() {
  let token=localStorage.getItem('token')

  const[messages,setMessages] = useState([])
  const[done,setDone] = useState([])

useEffect( () => {
  let fetchMessage=async ()=>{
    let message=await axios.get('http://localhost:5000/admin/GetMessage', { headers: { Authorization: `Bearer ${token}` } })
     setMessages(message.data)
    }
fetchMessage();
},[])

// Handle delete
const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/admin/message/${id}`);
    toast.success('Message deleted successfully');
    setDone(!done);
  } catch (error) {
    console.error('Error deleting message:', error);
  }
};


  return (
    <div className='flex'>
      <ToastContainer />
      <div  className="w-full ml-56 mt-5">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={100}><div className='font-semibold'>FirstName</div></TableCell>
            <TableCell align="center" width={100} ><div className='font-semibold'>LastName</div></TableCell>
            <TableCell align="center" width={100}><div className='font-semibold'>Phone</div></TableCell>
            <TableCell align="center" width={100}><div className='font-semibold'>Email</div></TableCell>
            <TableCell align="center" width={100}><div className='font-semibold'>Referral</div></TableCell>
            <TableCell align="center"><div className='font-semibold'>Message</div></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.referral}</TableCell>
              <TableCell align="center">{row.message}</TableCell>
              <TableCell align="center">
              <button className='bg-red-500 text-white p-1 rounded-md' onClick={() => { handleDelete(row._id) }}>Delete</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}