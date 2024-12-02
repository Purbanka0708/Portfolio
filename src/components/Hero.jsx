import React from 'react'
import HeroImage from '../assets/Hero-image.jpg'

function Hero() {
  const handleResume = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/file/d/10HU0bmjdMlE85oWZTC0U9TEbhMVyly8l/view?usp=drive_link';
    link.setAttribute('download', 'Purbanka_Ghosh_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {""}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Purbanka Ghosh</span>, A Developer By Heart
        </h1>
        <p className='mt-4 text-lg text-gray-300 '>I specialize in building modern and responsive web applications</p>
        <div className='mt-8 space-x-4'>
            <a className='bg-gradient-to-r from-gray-400 to-blue-500 text-white hidden md:inline px-4 py-2 rounded-full' href='#contact'>Contact with me</a>
            <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' onClick={handleResume}>Resume</button>
        </div>
    </div>
  )
}

export default Hero