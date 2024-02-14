import React, { useEffect, useState } from 'react'
import AdminNavbar from '../admincomponents/AdminNavbar'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const MainDashboard = () => {
  let token=localStorage.getItem('token')
  const [count,setcount]=useState()

  useEffect(()=>{
    let fetchCount=async ()=>{
      try{

        let userCount=await axios.get('http://localhost:5000/admin/usercount',{ headers: { Authorization: `Bearer ${token}` } })
        setcount(userCount.data)
      }
      catch(e){
        console.log(e);

      }
    }
    fetchCount()
  },[])

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
   const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' ,
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data:[65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data:[65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };
  return (
    <>
    <div className='flex justify-between '>
      <div className='w-[50%] m-auto'>
<div>
  <div className='bg-white text-black w-[200px] shadow-lg p-10 mt-10'>
    Users : {count}
  </div>
</div>
       <Bar options={options} data={data} />
      </div>
    </div>
    </>
  )
}

export default MainDashboard