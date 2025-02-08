import logo from '../assets/DukaBora.png';
const About = () => {
  return (
    <div className='container mx-auto px-6 py-12'>
      <section className='flex flex-col md:flex-row items-center gap-8 mb-12'>
        <div className='md:w-1/2'>
          <h1 className='text-4xl font-bold mb-4 text-black'>
            About <span className='text-primary'>Duka Bora</span>
          </h1>
          <p className='text-gray-700 leading-relaxed mb-4'>
            At Duka Bora, we believe that quality shopping should be easy,
            affordable, and enjoyable. Our platform is designed to bring you
            high-quality products at unbeatable prices, ensuring a seamless and
            trustworthy shopping experience. Whether you’re looking for fashion,
            electronics, accessories, or household essentials, we’ve got you
            covered with a handpicked selection of the best products.
          </p>
          <p className='text-gray-700 leading-relaxed'>
            With Duka Bora, shopping is more than just buying—it’s an
            experience!
          </p>
        </div>

        {/* About Image */}
        <div className='md:w-1/2'>
          <img
            src={logo}
            alt='About Duka Bora'
            className='rounded-2xl shadow-lg object-cover w-full h-full'
          />
        </div>
      </section>

      <section className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-12'>
        {[
          { count: '1k+', text: 'Positive Reviews' },
          { count: '5k+', text: 'Happy Customers' },
          { count: '2k+', text: 'Products Sold' },
          { count: '5+', text: 'Years in Business' },
        ].map((stat, index) => (
          <div
            key={index}
            className='bg-gray-100 text-center p-6 rounded-2xl shadow-md hover:scale-105 hover:-translate-y-2 transform duration-300'
          >
            <h2 className='text-3xl font-bold text-primary mb-2'>
              {stat.count}
            </h2>
            <p className='text-gray-600'>{stat.text}</p>
          </div>
        ))}
      </section>

      {/* Vision and Mission Section */}
      <section className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12'>
        <div className='bg-gray-100 p-6 rounded-2xl shadow-md'>
          <h3 className='text-xl font-bold mb-4 text-black'>Our Vision</h3>
          <p className='text-gray-600'>
            To be the leading e-commerce platform that provides quality,
            affordability, and convenience, making online shopping accessible
            and enjoyable for everyone.
          </p>
        </div>
        <div className='bg-gray-100 p-6 rounded-2xl shadow-md'>
          <h3 className='text-xl font-bold mb-4 text-black'>Our Mission</h3>
          <p className='text-gray-600'>
            To make shopping easier, faster, and more enjoyable with a
            user-friendly platform.
          </p>
        </div>
      </section>

      <section>
        <h3 className='text-2xl text-black font-bold mb-4'>Our Offices</h3>
        <div className='bg-gray-100 p-6 rounded-2xl shadow-md flex gap-5 justify-center items-center'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.81707950275!2d36.822514874437985!3d-1.2836287356220994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129d3e9e4a7%3A0xd7a2234ccaf4740e!2sTom%20Mboya%20St%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1728472153114!5m2!1sen!2ske'
            style={{ border: 0 }}
            allowfullscreen=''
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            className='rounded-lg h-[300px] w-[400px] md:h-[400px] md:w-[600px]'
          ></iframe>
          <div>
            <div className='flex flex-col gap-6 m-auto'>
              <div className=''>
                <p className='text-slate-600 font-bold text-lg'>Opens</p>
                <p className='text-slate-500 text-lg'>Mondays - Saturdays</p>
                <p className='text-slate-500 text-md'>7.00 am - 7.00 pm</p>
              </div>
              <div>
                <p className='text-slate-600 font-bold text-lg'>Closes</p>
                <p className='text-slate-500 text-lg'>Sundays</p>
              </div>
              <div>
                <p className='text-slate-600 font-bold text-lg'>Location</p>
                <p className='text-slate-500 text-lg'>
                  Tom Mboya Street, Nairobi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
