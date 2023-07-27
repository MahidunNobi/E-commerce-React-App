import React from 'react'

const Contact = () => {
  return (
    <div className='container mx-auto'>
        <div className="map w-full h-56 my-[30px]"> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4575152392435!2d89.01782437522026!3d23.262819907320196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff231a2677cb8f%3A0x3a6730b78599d2db!2sChowgacha%20Bus%20Stand!5e0!3m2!1sen!2sbd!4v1685418076470!5m2!1sen!2sbd" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full h-full'></iframe>
        </div>
        <div className="form mb-10">
          <form action="https://formspree.io/f/moqzzbov" method='POST' className='flex flex-col items-center md:w-96 mx-auto border-[1px] border-gray-400 rounded-lg w-[95%] '>
            <input type="text" placeholder='User Name' name='username' required autoComplete='off' className='w-[90%] mx-auto my-6 outline-none' />
            <input type="email" placeholder='E-mail' name='email' required autoComplete='off' className='w-[90%] mx-auto my-6 outline-none' />
            <textarea name="message" placeholder='Enter your Message' id="" cols="30" rows="10" required autoComplete='off' className=' w-[90%] h-[80px] outline-none'></textarea>
            <input type="submit" value="Send" className='bg-blue-600 text-white cursor-pointer px-10 py-3 my-6' />
          </form>
        </div>
    </div>
  )
}

export default Contact