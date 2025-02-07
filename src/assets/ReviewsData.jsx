import { CardStack } from '../Components/CardStack';

const reviewsData = [
  {
    id: 1,
    content: 'This is the best store I’ve ever shopped at. Highly recommend!',
    name: 'John Doe',
    designation: 'Customer',
  },
  {
    id: 2,
    content: 'Great products and amazing support. Will definitely come back!',
    name: 'Jane Smith',
    designation: 'Frequent Buyer',
  },
  {
    id: 3,
    content: 'The delivery was fast, and the quality was outstanding.',
    name: 'Emily Johnson',
    designation: 'Verified Customer',
  },
];

const ClientReviews = () => {
  return (
    <div className='flex justify-center items-center '>
      <CardStack items={reviewsData} />
    </div>
  );
};

export default ClientReviews;
