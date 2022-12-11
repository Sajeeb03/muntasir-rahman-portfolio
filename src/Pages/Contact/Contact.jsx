import React from 'react';

const Contact = () => {
    return (
        <div className='h-screen grid place-items-center p-3 md:p-0'>
            <div className='bg-secondary w-full md:w-96 p-8 rounded-lg'>
                <h3 className="text-3xl font-bold text-primary text-center">Contact Me</h3>
                <form action="https://formsubmit.co/sajeebmuntasir0@gmail.com" method="POST">
                    <label className="label">
                        <span className="label-text text-white">Your Name</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" required className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text text-white">Email</span>
                    </label>
                    <input type="email" name='email' placeholder="Email" className="input input-bordered w-full max-w-xs" />
                    <label className="label">
                        <span className="label-text text-white">Your Message</span>
                    </label>
                    <textarea className="textarea textarea-bordered w-full" name="message" required placeholder="Your Message"></textarea>
                    <button type="submit" className='btn btn-outline btn-primary w-1/2 m-auto mt-2 block'>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;