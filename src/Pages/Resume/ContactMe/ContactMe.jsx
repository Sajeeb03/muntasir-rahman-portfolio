import React from 'react';
import fb from '../../../assets/icons8-facebook-96.png';
import li from '../../../assets/icons8-linkedin-circled-96.png';
import tg from '../../../assets/telegram.png';
import wa from '../../../assets/whatsapp.png';
import mail from '../../../assets/gmail.png';
const ContactMe = () => {
    return (
        <div className='bg-secondary md:p-8 md:m-12 rounded-lg md:flex'>
            <div className='bg-secondary w-full md:w-96 m-auto p-8 rounded-lg' data-aos="fade-right">
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
            <div className='md:w-96 h-[400px] m-auto p-2 rounded-lg' data-aos="fade-left">
                <h3 className="text-2xl md:text-3xl mb-2 font-bold text-primary text-center">Find Me On Social Media</h3>
                <div className='mt-8 ml-12 m-auto'>
                    <a href="https://www.linkedin.com/in/muntasir-sajeeb/" target="_blank" className='text-white flex items-center gap-2'><img src={li} className="w-12 max-h-12" alt="fbIcon" /><span className='text-lg'>/MuntasirRahman</span></a>
                    <a href="https://www.facebook.com/sajeebmuntasir/" target="_blank" className='flex items-center gap-2'><img src={fb} className="w-12 h-12" alt="fbIcon" /><span className='text-white text-lg'>/MuntasirRahman</span></a>
                    <p className='text-white flex items-center gap-2'>
                        <img src={tg} className="w-10 h-10 ml-1" alt="" title='telegram' />@MuntasirRahanSajeeb or +88 01796113255
                    </p>
                    <p className='text-white flex items-center gap-2'>
                        <img src={wa} className="w-10 h-10 ml-1" alt="" title='telegram' />+88 01796113255
                    </p>
                    <p className='text-white flex items-center gap-2'>
                        <img src={mail} className="w-10 h-10 ml-1 mt-2" alt="" title='telegram' /><a href="https://sajeebmuntasir0@gmail.com">sajeebmuntasir0@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;