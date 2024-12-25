import React from "react";
import { ReactTyped } from "react-typed";
import hero from "../assets/hero.png";
import blob from '../assets/blob.svg'
const Hero = () => {
    return (
        <div 
          className='bg-cover bg-center h-screen '
          style={{ backgroundImage: `url(${blob})` }}
        >
            <div className="text-2xl lg:text-5xl font-bold">
                <div className="mt-4 left-3 text-black" > 
                    <h1 className='md:text-7xl sm:text-6xl text-3xl p-2 font-bold  text-left'>
                        Empowering Minds,
                    </h1>
                    <h1 className='text-teal-500 marker:first-letter:md:text-7xl sm:text-6xl text-3xl p-4 font-bold  text-left'>
                        Shaping Futures at
                    </h1>
                    <h1 className='md:text-7xl sm:text-6xl text-4xl p-2 font-bold  text-left'>
                        Tesla Academy.
                    </h1>

                    <div className='mt-4'>
                        <ReactTyped strings={['SCIENCE...', 'MATHEMATICS...', 'SOCIAL STUDIES...']} className="md:text-3xl sm:text-2xl text-2xl p-2 font-bold text-teal-500 text-left"typeSpeed={50} backSpeed={80} loop />
                    </div>
                    
                    <div className="flex justify-end">
                      <img
                      src={hero}
                      alt="Description of the image"
                      className="w-4/2 " // Increase size and add shadow
 />
        </div>             
                </div>
            </div>
        </div> 
    );
};

export default Hero;
