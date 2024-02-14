import React from 'react';
import User1 from '../assets/User1.jpg';
import User2 from '../assets/User2.jpg';
import User3 from '../assets/User3.jpg';

const CommentSection = () => {
  const comments = [
    { user: "Charlie",place: "Germany", rating: 5, text: "Great Handling! Highly recommended.", image: User1 },
    { user: "Bob",place: "United Kingdom", rating: 4, text: "Good quality. Satisfied with the plot.", image: User2 },
    { user: "Alice",place: "Norway", rating: 3, text: "Average in dealings.Could be better.", image: User3 }
  ];

  return (
    <div className="comment-section">
      <h6 className="flex text-3xl font-medium mt-3 gap-2 text-gray-80">What <div className='text-indigo-700'>Customers</div> say about US</h6>
        <span className="block w-24 h-0.5 my-3 bg-blue-400"></span>
      <ul className='flex gap-5 justify-center items-center'>
        {comments.map((comment, index) => (
          <li key={index} className="comment">
            <div className="user flex bg-gray-100 rounded mb-3 w-84 h-32 shadow-lg gap-3">
              <img src={comment.image} className='rounded' alt={`Profile of ${comment.user}`} />
            <div>
              <h4 className='text-xl font-semibold'>{comment.user}</h4>
              <h6 className='text-gray-500'>{comment.place}</h6>
            <div className="rating text-orange-500">{renderStars(comment.rating)}</div>
            <div className="text">{comment.text}</div>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<span key={i}>★</span>);
  }
  return stars;
};

export default CommentSection;
