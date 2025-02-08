import React from 'react';

const Recruitment = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-dark bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 '>
      <div className='bg-gray1 p-6 rounded-md shadow-md w-full max-w-md'>
        <h1 className='text-black underline font-bold text-xl mb-2'>
          Recruitments
        </h1>
        <p className='text-black'>
          {' '}
          We're always looking for talented individuals to join our team!
        </p>
        <ul className='list-disc p-3'>
          <li className='text-black'>
            <span className='font-bold'>Open Positions: </span> Explore our job
            listings to find roles that match your skills.
          </li>
          <li className='text-black'>
            <span className='font-bold'>How To Apply: </span>
            Submit your resume and cover letter through our careers page.
          </li>
        </ul>
        <p className='text-black'>
          For inquiries, contact our recruitment team.
        </p>
        <button
          className='text-primary mt-6 bg-blue text-red px-4 py-2 rounded hover:underline'
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Recruitment;
