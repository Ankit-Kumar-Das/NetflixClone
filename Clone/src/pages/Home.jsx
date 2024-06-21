import React from 'react'
import HeroSection from '../components/HeroSection'
import EnjoyComponent from '../components/EnjoyComponent'
import DownloadComponent from '../components/DownloadComponent'
import WatchComponent from '../components/WatchComponent'
import ProfileComponent from '../components/ProfileComponent'
import { FaqData } from '../data/FaqData'
import FaqComponent from '../components/FaqComponent'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <HeroSection/>
        <EnjoyComponent/>
        <DownloadComponent/>
        <WatchComponent/>
        <ProfileComponent/>
        
      {/* FAQ section */}
        <div className='mb-10'>    
        <h2 className='text-white text-center lg:text-5xl md:text-5xl text-3xl font-bold  py-10'>Frequently Asked <br className=' lg:hidden md:hidden' /> Questions</h2>
        <div className='mb-10'>
          {FaqData.map((item, index) => {
            const { title, desc } = item
            return (
                
                <FaqComponent key={index} title={title} desc={desc} />
            )
          })}
        </div>
        {/* input and button section */}
        <div>
        <div className="flex flex-wrap justify-center items-center space-x-2">
                            <input
                                type="text"
                                className=' bg-[#1d1e1e] text-white text-lg py-3 px-3 w-80 lg:w-96 rounded-md opacity-80 border border-gray-300 hover:ring-1 hover:ring-gray-50   outline-none mb-5 md:mb-0 lg:mb-0'
                                placeholder='Email address'
                            />
                            <button
                                className='bg-[#e50815] flex items-center gap-2 py-3 px-5 rounded-lg'>
                                <p className='text-white font-bold text-xl'>
                                    Get Started
                                    </p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white ">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        </div>
        </div>
        
    </div>
    <div className='hr_Line h-2 bg-gray-600' />
          <Footer/>
    </div>
  )
}

export default Home