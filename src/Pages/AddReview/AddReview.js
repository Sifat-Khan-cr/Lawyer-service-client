import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const AddReview = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.displayName || form.name.value;
        const email = user?.email || form.email.value;
        const review = form.review.value;
        const photo = user?.photoURL;
        form.reset();

        const userReview = {
            userName: name,
            email: email,
            review: review,
            photo: photo
        }
        console.log(userReview);
    };
    return (
        <div className='w-6/12 mx-auto'>

            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                    <input type="email" name='email' id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user?.email} required />
                </div>
                <div className="mb-6">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your name</label>
                    <input type="text" name='name' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue={user?.displayName} required />
                </div>
                <div className="mb-6">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your review</label>
                    <input type="text" name='review' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='type your review' required />
                </div>
                <div className="flex items-start mb-6">

                </div>
                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            </form>


        </div>
    );
};

export default AddReview;