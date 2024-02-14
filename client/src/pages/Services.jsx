import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PropertyManagement from '../assets/PropertyManagement.jpg';
import MortgageService from '../assets/MortgageService.jpg';
import LegalSupport from '../assets/LegalSupport.jpg';
import HomeSelling from '../assets/HomeSelling.jpg';
import ConsultingService from '../assets/ConsultingService.jpg';
import HomeBuying from '../assets/HomeBuying.jpg';
import WhatsappIcon from '../components/WhatsappIcon';

const Services = () => {
  return (
    <div>
          <Navbar />
      <WhatsappIcon/>
      <h6 className='text-4xl text-center my-8 pt-28'>Services Offered</h6>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4'>
        {servicesData.map((service, index) => (
          <div key={index} className='w-full md:w-80 mx-auto mb-8'>
            <img src={service.image} alt={service.title} className='w-full h-48 object-cover mb-4' />
            <h1 className='text-lg font-semibold mb-2'>{service.title}</h1>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

const servicesData = [
  {
    title: 'Property Management',
    image: PropertyManagement,
    description: 'We provide transparent, ideal and reliable property management solutions, including rental property management services.',
  },
  {
    title: 'Mortgage Service',
    image: MortgageService,
    description: 'We provide mortgage services for more consumer and commercial loan products than any other loan service provider in Kerala.',
  },
  {
    title: 'Consulting Service',
    image: ConsultingService,
    description: 'Our management consulting services focus on the most critical issues and opportunities of our clients.',
  },
  {
    title: 'Legal Support',
    image: LegalSupport,
    description: 'We provide legal aids for customers and we help for the registration, agreement drafting, verification, and related procedures.',
  },
  {
    title: 'Home Buying',
    image: HomeBuying,
    description: 'Magic Land provides home buying services which are reliable and budget-friendly. We will guide through the whole process.',
  },
  {
    title: 'Home Selling',
    image: HomeSelling,
    description: 'We offer home selling services for which we have posted the details of many houses for sale in Kerala on our website.',
  },
];

export default Services;
