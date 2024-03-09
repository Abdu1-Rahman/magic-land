import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ManageProperty = () => {
    let token = localStorage.getItem('token');
    
    const [Rdata, setRdata] = useState(['']);
    const [data, setData] = useState();
    const [success, setSuccess] = useState();
    const [done, setDone] = useState(true);
    const [properties, setProperties] = useState(['']);

    useEffect(() => {
        let fetchProperty = async () => {
            let property = await axios.get('http://localhost:5000/admin/property', { headers: { Authorization: `Bearer ${token}` } });
            setProperties(property.data);
        }
        fetchProperty();
    }, [done]);

    

   
    let handledelete = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/admin/property/${id}`, { headers: { Authorization: `Bearer ${token}` } });
            toast('successful');
            setDone(!done);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex flex-col sm:flex-row'>
            <ToastContainer />
            <div className='flex flex-col sm:mt-8 sm:ml-96'>
                <div className='flex flex-wrap'>
                    {properties.map((item) => (
                        <div key={item._id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-10 ml-8 bg-white border border-gray-200 rounded-lg shadow'>
                            <a href="#">
                                <img className="rounded-t-lg" src={item.file} alt="" />
                            </a>
                            <div className="p-5">
                                <a href="#">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{item.Location}</h5>
                                </a>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.Price}</p>
                                <h2>{item.description}</h2>
                                <Link to={`/admin/update/${item._id}`}>
                                    <button className='bg-indigo-700 text-white rounded p-1 mr-2'>edit</button>
                                </Link>
                                <button className='bg-indigo-700 text-white rounded p-1' onClick={() => { handledelete(item._id) }}>delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ManageProperty;
