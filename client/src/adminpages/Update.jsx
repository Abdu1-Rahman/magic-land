import React, { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import AdminNavbar from '../admincomponents/AdminNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchBox from '../admincomponents/SearchBox';
import './prop.css'

const Update = () => {


  const {id}= useParams()
    const [image, setimage] = useState();
    const [data, setdata] = useState();
    const [success, setsuccess] = useState();
    const [done, setdone] = useState(true);
   /*  const [Rdata,setRdata]=useState(['']) */
    const [properties, setproperties] = useState('')

    useEffect(()=>{
        let fetchProperty =async() =>{
              let property =await axios.get(`http://localhost:5000/admin/edit/${id}`)
        console.log(property);
        setproperties(property.data)
}
fetchProperty()
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[done])// 'id' is intentionally excluded from the dependency array



    // handlechange

    let handlechange=(event)=>{
        setdata({...data,[event.target.name]:event.target.value})
        console.log(data)
    }


    // handlesubmit

    let handlesubmit = async (event) => {
        event.preventDefault();
        let newdata = {
            ...data,
            file: image
        };
        console.log(newdata);
      /*   let response = await axios.post(`http://localhost:5000/admin/property/edit/${id}`, newdata); */
      let response = await axios.put(`http://localhost:5000/admin/edit/${id}`, newdata);
        console.log(response.data.status);
        setdone(!done);
        if (response.data.status) {
            toast.success('update successfully')
        } else {
             toast.error('oops! failed to update')
             setsuccess(false);
        }
    };

    
    return (
        <div className='flex'>
            <ToastContainer/>
            <AdminNavbar />
            <SearchBox/>
            <div className='flex flex-col mt-20 ml-96'>
            <form className='flex flex-col gap-2 items-center justify-center m-10 shadow-xl' onSubmit={handlesubmit}>
               
                    <img src={properties.file} alt='real estate' className='w-28 h-28'/>
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='Location' placeholder={properties.Location} />
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='Price' placeholder={properties.Price} />
                     <input className='border border-solid border-indigo-700 outline-none' type="text" onChange={handlechange} name='description' placeholder={properties.description} />
                     <label className='label'>
                     <FileBase64
                    onDone={(res) => setimage(res.base64)} /><span>Select a file</span>
                    </label>

                <input className='text-white bg-blue-500 rounded p-1' type="submit" />
            </form>
            {success ?
                <h2>Inserted successfully</h2>
                :
                success === false &&
                <h2>Not successful</h2>
            }

           
            </div>
        </div>
    );
};

export default Update;
