import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('https://lawyer-ph-assaignment-11-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-2 my-5 gap-3'>
            {
                reviews.map(review => <SingleReview reviews={review} key={review._id}></SingleReview>)
            }

        </div>
    );
};

export default Reviews;