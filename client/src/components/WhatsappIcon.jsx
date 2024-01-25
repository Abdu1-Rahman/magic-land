import React from 'react';
import whatsAppIcon from '../assets/whatsAppIcon.png';

const WhatsappIcon = () => {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=1234567890'; // Replace with your actual WhatsApp link

  return (
    <div className='fixed bottom-7 right-7'>
      <a href={whatsappLink} target='_blank' rel='noopener noreferrer'>
        <img className='w-12 cursor-pointer' src={whatsAppIcon} alt='WhatsappIcon' />
      </a>
    </div>
  );
};

export default WhatsappIcon;
