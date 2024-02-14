import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsappIcon from '../components/WhatsappIcon';

const About = () => {
  return (
    <div>
        <Navbar />
        <WhatsappIcon/>
    <div className="container mx-auto pb-8 pt-28">
      <div className="max-w-2xl mx-auto text-center">
       <i> <h6 className="text-sm text-gray-600">About Magic Land</h6></i>
        <h4 className="text-3xl text-indigo-700 font-bold mb-4">Welcome to Magic Land - Where Dreams Find a Home!</h4>

        <p className="text-lg leading-relaxed">
          At Magic Land, we believe in the transformative power of finding the perfect property. Our commitment is not just about buying or selling real estate; it's about helping you discover a place where memories are made, and dreams are realized. We understand that real estate is more than just transactions; it's about finding your sanctuary, your investment, and your future.
        </p>

        <div className="mt-8">
          <h5 className="text-xl text-indigo-700 font-bold mb-4">Our Vision</h5>
          <p className="text-lg leading-relaxed">
            Envision a world where every individual finds their ideal piece of land, where families create legacies, and businesses thrive in the perfect location. At Magic Land, we are dedicated to making this vision a reality.
          </p>
        </div>

        <div className="mt-8">
          <h5 className="text-xl text-indigo-700 font-bold mb-4">Why Choose Magic Land?</h5>
          <ul className="list-disc pl-4 text-lg leading-relaxed">
            <li><strong>Expertise:</strong> With a team of seasoned real estate professionals, Magic Land brings decades of industry expertise. We navigate the complexities of the market to ensure you make informed decisions.</li>
            <li><strong>Personalized Approach:</strong> Your dreams are unique, and so is our approach. We take the time to understand your aspirations, tailoring our services to match your specific needs.</li>
            <li><strong>Integrity and Transparency:</strong> Trust is the foundation of any successful real estate journey. At Magic Land, we operate with utmost integrity and transparency, fostering trust in every interaction.</li>
            <li><strong>Comprehensive Services:</strong> Whether you're buying, selling, or investing, Magic Land offers a comprehensive suite of services. From property valuation to market analysis, we've got you covered.</li>
          </ul>
        </div>

        <div className="mt-8">
          <h5 className="text-xl text-indigo-700 font-bold mb-4">Our Commitment</h5>
          <p className="text-lg leading-relaxed">
            At Magic Land, our commitment extends beyond transactions. We are committed to building lasting relationships with our clients, partners, and the communities we serve. Every property we represent is a testament to our dedication to excellence.
          </p>
        </div>

        <p className="text-lg leading-relaxed mt-8">
          Join us on a journey where possibilities are endless, and your perfect property awaits. Discover the Magic Land difference – where expertise meets passion, and dreams find their home.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Contact us today to embark on your real estate journey with confidence!
        </p>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default About;
