import React, { useEffect, useState } from 'react';
import SingleReview from '../SingleReview/SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            {
                reviews.map(review => <SingleReview reviews={review} key={review._id}></SingleReview>)
            }

        </div>
    );
};

export default Reviews;