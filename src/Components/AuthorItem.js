import React from 'react'
import "../index.css"
import { BsGithub, BsInstagram, BsTwitter } from "react-icons/bs"
import { AiFillEye, AiFillHeart } from "react-icons/ai"

function AuthorItem({imgLink, name, job, githubLink, instagramLink, twitterLink, views, like, desc}) {
  return (
    <div className="flex w-full sm:w-5/6 lg:w-2/5 flex-col gap-5 bg-white px-12 py-8 border rounded-md">
        <div className='flex justify-between items-center'>
            <div className='flex items-center'>
                <img src={imgLink} alt="pp_Foto" className='flex w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16 rounded-full mr-4' />

                <div>
                    <p className='font-medium text-base md:text-lg xl:text-2xl'>{name}</p>
                    <span className='font-medium text-xs text-gray-600 md:text-sm xl:text-lg'>{job}</span>
                </div>
            </div>
     

            <div className='flex items-center gap-3'>

                <a href={githubLink} className='bg-[#222222] p-2 cursor-pointer rounded-md  transition-all duration-300 hover:-translate-y-2 md:p-3 xl:p-4'>
                    <BsGithub className='w-2 h-2 sm:w-3 sm:h-3 xl:w-4 xl:h-4' color='#fff'/>
                </a>

                <a href={instagramLink} className='bg-[#C837AB] p-2 cursor-pointer rounded-md  transition-all duration-300 hover:-translate-y-2 md:p-3 xl:p-4'>
                    <BsInstagram className='w-2 h-2 sm:w-3 sm:h-3 xl:w-4 xl:h-4' color='#fff'/>
                </a>
                
                <a href={twitterLink} className='bg-[#1D9BF0] p-2 cursor-pointer rounded-md  transition-all duration-300 hover:-translate-y-2 md:p-3 xl:p-4'>
                    <BsTwitter className='w-2 h-2 sm:w-3 sm:h-3 xl:w-3 xl:h-3' color='#fff'/>
                </a>
                
            </div>
        </div>

        <div className='flex gap-6 pl-2'>
            <span className='flex gap-2'>
                <AiFillEye className='w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6'/>
                <p className='text-gray-500 text-xs md:text-sm xl:text-base'>{views}</p>
            </span>

            <span className='flex gap-2'>
                <AiFillHeart className='w-4 h-4 md:w-5 md:h-5 xl:w-6 xl:h-6' color="#C20000"/>
                <p className='text-gray-500 text-xs md:text-sm xl:text-base'>{like}</p> 
            </span>
        </div>

        <p className='text-gray-700 text-sm line-clamp-4 md:text-medium xl:text-xl'>{desc}
        </p>

    </div>
  )
}

export default AuthorItem