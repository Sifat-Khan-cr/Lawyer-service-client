import React from 'react';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    useTitle('Add-service');
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const info = form.info.value;
        const image = form.image.value;


        const service = {
            name: name,
            info: info,
            price: price,
            image: image,

        }
        console.log(service);


        fetch('https://lawyer-ph-assaignment-11-server.vercel.app/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data.acknowledged) {
                    alert('service stored successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    };
    return (
        <div className='w-6/12 mx-auto my-10'>

            <form onSubmit={handleSubmit}>

                <div className="mb-6">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">price</label>
                    <input type="text" name='price' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='type product price' required />
                </div>
                <div className="mb-6">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">service name</label>
                    <input type="text" name='name' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='type product name' required />
                </div>
                <div className="mb-6">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">service info</label>
                    <input type="text" name='info' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='type product info' required />
                </div>
                <div className="mb-6">
                    <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image url</label>
                    <input type="text" name='image' id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='enter image url' required />
                </div>
                <div className="flex items-start mb-6">

                </div>
                <input type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" />
            </form>


        </div>
    );
};

export default AddService;