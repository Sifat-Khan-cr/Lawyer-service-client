import React from 'react';

const Blog = () => {
    return (
        <div className='w-3/4 mx-auto md:block hidden'>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>Difference between SQL and NoSQL</h1>
                <p className='text-xl font-normal'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>

            </div>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>What is JWT, and how does it work? </h1>
                <p className='text-xl font-normal'>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.</p>

            </div>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>What is the difference between javascript and NodeJS?</h1>
                <p className='text-xl font-normal'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>

            </div>
            <div className='text-center m-2'>
                <h1 className='text-3xl font-semibold m-3'>How does NodeJS handle multiple requests at the same time?</h1>
                <p className='text-xl font-normal'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them</p>

            </div>
        </div>
    );
};

export default Blog;