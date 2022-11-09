import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import SingleReview from '../SingleReview/SingleReview';


const MyReview = () => {
    const [reviews, setReviews] = useState([]);
    const { user } = useContext(AuthContext);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE',
                headers: {
                    // 'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = reviews.filter(review => review._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }







    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user.email}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div>
            {
                reviews.length > 0 ?
                    <>
                        {
                            reviews.map(review => <div className='my-10'><SingleReview key={review._id} reviews={review}></SingleReview>
                                <div className='flex justify-center' >
                                    <button className="btn btn-warning">Edit</button>
                                    <button onClick={() => handleDelete(review._id)} className="btn btn-error">Delete</button>
                                </div>
                            </div>)
                        }</>
                    : <>
                        <h1 className='text-5xl text-center'>You have no review</h1>
                    </>
            }



        </div>
    );
};

export default MyReview;