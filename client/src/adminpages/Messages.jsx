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

function createData(firstName, lastName, Phone, Email, Howdidyouhere, Message) {
  return { firstName, lastName, Phone, Email, Howdidyouhere, Message };
}


export default function BasicTable() {

  const[messages,setMessages] = useState([])

useEffect( () => {
  let fetchMessage=async ()=>{
    let message=await axios.get('http://localhost:5000/admin/GetMessage')
   await setMessages(message.data)
    }
fetchMessage();
},[])




  return (
    <div className='flex'>
      <AdminNavbar/>
      <div  className="w-full ml-64">
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell width={100}>FirstName</TableCell>
            <TableCell align="center" width={100} >LastName</TableCell>
            <TableCell align="center" width={100}>Phone</TableCell>
            <TableCell align="center" width={100}>Email</TableCell>
            <TableCell align="center" width={100}>Referral</TableCell>
            <TableCell align="center">Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {messages.map((row) => (
            <TableRow
              key={row.email}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.howdidyouhere}</TableCell>
              <TableCell align="center">{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </div>
  );
}