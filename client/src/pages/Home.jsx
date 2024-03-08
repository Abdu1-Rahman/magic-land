import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import land2 from '../assets/land2.jpg';
import Footer from '../components/Footer';
import axios from 'axios';
import './Home.css';
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from 'react-icons/fa6';
import WhatsappIcon from '../components/WhatsappIcon';
import HashLoader from 'react-spinners/HashLoader';
import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';
import slide4 from '../assets/slide4.jpg';
import slide5 from '../assets/slide5.jpg';
import CommentSection from '../components/CommentSection'
import Features from '../components/Features';
import { IoLocation } from "react-icons/io5";

const LoaderComponent = ({ loading }) => (
  <div className="flex justify-center items-center h-screen">
    <HashLoader
      color={'#3949ab'}
      loading={loading}
      size={100}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  </div>
);

const Home = ({isLoggedIn}) => {
  const slides = [slide1, slide2, slide3, slide4, slide5];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 3000); 
  
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const [propertys, setPropertys] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    let fetchProperty = async () => {
      try {
        let property = await axios.get(`http://localhost:5000/Getproperty`);
        console.log(property);
        setPropertys(property.data.propertys);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error fetching property:', error);
      }
    };
    fetchProperty();
  }, []);

  return (
    <div className="overflow-hidden min-h-screen">
      <div className="mb-24">
        <Navbar isLoggedIn={isLoggedIn}/>
      </div>
      <WhatsappIcon />
      <div className="relative">
        <img
          src={land2}
          alt="pics"
          className="h-64 sm:h-96 w-full object-cover transition-transform duration-200 ease-in-out transform hover:scale-110 overflow-hidden"
        />
      </div>
      <div className="ml-3">
        <h6 className="flex gap-2 text-3xl font-medium mt-3 text-gray-800">Best Properties For Sale in <div className='text-indigo-700'>UK</div></h6>
        <span className="block w-24 h-0.5 my-3 bg-blue-400"></span>
        <Link to={'/allproperties'}>
          <button className="p-3 flex gap-2 text-gray-700 bg-blue-100 hover:bg-blue-200 ml-auto mr-8">
            See all properties<FaArrowRightLong className="mt-1" />
          </button>
        </Link>
      </div>
      <div>
        {loading ? (
          <LoaderComponent loading={loading} />
        ) : (
          <div className="card-container flex sm:gap-10 md:gap-16 lg:gap-20 xl:gap-4 overflow-x-auto mx-1 p-6 whitespace-nowrap">
            {propertys.slice(0, 5).map((property, index) => (
              <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mt-5 px-2">
                <div className="bg-white border border-gray-200 rounded-lg shadow">
                  <a href="#">
                    <img className="rounded-t-lg w-full" src={property.file} alt="" />
                  </a>
                  <div className="p-4">
                    <div className='flex gap-8'>
                      <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 ">{property.Name}</h5><br/>
                    <h6 className='flex text-gray-400 justify-end'><IoLocation className='text-blue-700 mt-1'/>{property.Location}</h6>
                    </div>
                    <p className='text-gray-500'>{property.title}</p>
                    <hr />
                    <div className="flex mt-2 gap-3">
                      <p className="font-bold mt-1 mr-3">₹{property.Price}</p>
                      <a
                        href={`/Details/${property._id}`}
                        className="inline-flex items-center ml-5 px-3 py-2 text-sm font-medium text-center border duration-300 border-blue-700 ease-in-out text-blue-700 bg-white rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4  focus:ring-blue-300 "
                      >
                        View Details
                        <svg
                          className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 14 10"
                        >
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <div id="default-carousel" className="relative w-full mx-auto mb-4" data-carousel="slide">
          <div className="relative h-56 sm:h-96 overflow-hidden rounded-lg md:h-96">
              {slides.map((slide, index) => (
                  <div key={index} className={`${index === currentSlide ? '' : 'hidden'} duration-700 ease-in-out`} data-carousel-item>
                      <img src={slide} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 object-cover" alt="slide" />
                  </div>
              ))}
          </div>

          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {slides.map((_, index) => (
                  <button key={index} type="button" className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'}`} aria-current={index === currentSlide ? 'true' : 'false'} aria-label={`Slide ${index + 1}`} data-carousel-slide-to={index} onClick={() => goToSlide(index)}></button>
              ))}
          </div>

          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={goToPrevSlide}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
                  </svg>
                  <span className="sr-only">Previous</span>
              </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={goToNextSlide}>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="sr-only">Next</span>
              </span>
          </button>
      </div>
      <Features/>
      <CommentSection comments={propertys} />
    </div>
    <Footer />
  </div>
);
};

export default Home;
