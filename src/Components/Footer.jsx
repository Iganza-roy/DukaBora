import logo from '../assets/DukaBora.webp';
import {
  FaLocationDot,
  FaTwitter,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa6';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaPhoneAlt, FaFacebookF } from 'react-icons/fa';
import { BiSolidMessageSquareDetail } from 'react-icons/bi';
import { useState } from 'react';
import TermsModal from '../utils/TermsConditions';
import Privacy from '../utils/Privacy';
import FAQ from '../utils/FAQ';
import Legal from '../utils/Legal';
import Cookies from '../utils/Cookies';
import Recruitment from '../utils/Recruitment';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Footer = () => {
  const [activeModal, setActiveModal] = useState(null);
  const handleNavigate = (webLink) => {
    window.open(webLink, '_blank');
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    console.log('Email submitted:', email);
    toast.success('Email submitted successfully!');
  };

  return (
    <div>
      <div className='flex flex-col lg:flex-row md:justify-between items-center md:items-start gap-10 md:gap-20 mt-10 py-1'>
        <img
          src={logo}
          alt='logo'
          className='w-[120px] md:w-40 cursor-pointer hover:-translate-y-0.5 transition-transform duration-300 mb-auto'
        />
        <div className='flex flex-col gap-2'>
          <p className='text-black text-lg'>Quick Links</p>
          <a
            className='text-black text-lg hover:text-primary hover:underline cursor-pointer'
            onClick={() => setActiveModal('terms')}
          >
            Terms and Conditions
          </a>
          {activeModal === 'terms' && <TermsModal onClose={closeModal} />}
          <a
            className='text-black text-lg hover:text-primary hover:underline cursor-pointer'
            onClick={() => setActiveModal('privacy')}
          >
            Privacy Policy
          </a>
          {activeModal === 'privacy' && <Privacy onClose={closeModal} />}
          <a
            className='text-black text-lg hover:text-primary hover:underline cursor-pointer'
            onClick={() => setActiveModal('faq')}
          >
            FAQs
          </a>
          {activeModal === 'faq' && <FAQ onClose={closeModal} />}
          <a
            className='text-black text-lg hover:text-primary hover:underline cursor-pointer'
            onClick={() => setActiveModal('legal')}
          >
            Legal
          </a>
          {activeModal === 'legal' && <Legal onClose={closeModal} />}
          <a
            className='text-black text-lg hover:text-primary hover:underline cursor-pointer'
            onClick={() => setActiveModal('cookies')}
          >
            Cookies
          </a>
          {activeModal === 'cookies' && <Cookies onClose={closeModal} />}
          <a
            className='text-black text-lg hover:text-primary hover:underline cursor-pointer'
            onClick={() => setActiveModal('recruit')}
          >
            Recruitmens
          </a>
          {activeModal === 'recruit' && <Recruitment onClose={closeModal} />}
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex gap-4'>
            <FaLocationDot className='text-black text-3xl hover:text-primary' />
            <p className='text-black text-lg cursor-pointer hover:text-primary'>
              Location
            </p>
          </div>
          <p
            className='hover:text-primary cursor-pointer text-black'
            onClick={() =>
              handleNavigate('https://maps.app.goo.gl/mtzLV2hufrP5TyBy8')
            }
          >
            P.O. Box 001-10000, KPR <br />
            Tom Mboya Strt, Nairobi
          </p>
          <div className='flex gap-4'>
            <IoLogoWhatsapp className='text-black text-3xl hover:text-primary' />
            <p className='text-black text-lg cursor-pointer hover:text-primary'>
              Whatsapp
            </p>
          </div>
          <a
            href=''
            className='hover:text-primary text-black'
            onClick={() => handleNavigate('https://wa.me/+2547000000000')}
          >
            +2547000000000
          </a>
          <div className='flex gap-4'>
            <FaPhoneAlt className='text-black text-3xl hover:text-primary' />
            <p className='text-black text-lg cursor-pointer hover:text-primary'>
              Telephone
            </p>
          </div>
          <a href='' className='hover:text-primary '>
            +2547000000000
          </a>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex flex-col gap-4'>
            <p className='text-black text-lg'>Stay In Touch</p>
            <div className='flex gap-6'>
              <FaFacebookF
                className='text-black text-3xl md:text-4xl hover:text-primary '
                onClick={() =>
                  handleNavigate('https://facebook.com/dukabora25')
                }
              />
              <FaTwitter
                className='text-black text-3xl md:text-4xl hover:text-primary '
                onClick={() => handleNavigate('https://x.com/dukabora25')}
              />
              <FaLinkedin
                className='text-black text-3xl md:text-4xl hover:text-primary '
                onClick={() =>
                  handleNavigate('https://linkedin.com/dukabora25')
                }
              />
              <FaInstagram
                className='text-black text-3xl md:text-4xl hover:text-primary '
                onClick={() =>
                  handleNavigate('https://instagram.com/dukabora25')
                }
              />
            </div>
          </div>
          <div className='py-12 flex flex-col gap-2'>
            <div>
              <form action='' onSubmit={handleSubmit}>
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  required
                  className='rounded-sm h-8 w-[200px] text-black bg-gray1 p-2 outline-none '
                />
                <input
                  type='submit'
                  className='text-black rounded-sm h-8 w-20 bg-white transition-transform duration-300 hover:scale-105 '
                />
              </form>
            </div>
            <p className='text-black'>
              Subscribe to our newsletters for latest offers
            </p>
          </div>
        </div>
      </div>
      <div className='border-t border-slate-400 py-6 relative max-w-280'>
        <div className='flex items-start justify-center text-black cursor-pointer absolute -top-3 right-0 bg-dark'>
          <p className='text:md md:text-lg hover:text-primary  hover:underline bg-gray2'>
            Have a question?
          </p>
        </div>
        <BiSolidMessageSquareDetail
          className='text-primary text-5xl -top-[60px] lg:-top-6 absolute -right-3 lg:-right-14 transtion:transform duration-300 hover:text-primary hover:-translate-y-1 '
          onClick={() => {
            navigate('/support');
            scrollTo(0, 0);
          }}
        />
        <div className='container mx-auto flex justify-center items-center'>
          <p className='text-black text-sm md:text-base'>
            Duka Bora ©2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
