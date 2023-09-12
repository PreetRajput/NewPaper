import React from 'react'

export default function NewsItem(props) {
  return (
    <div className='p-1 m-2 transition duration-300 cursor-pointer hover:scale-110  shadow-md shadow-black bg-gradient-to-tr from-blue-300 to-pink-300  flex-col inline-flex rounded-md newsItem '>
     <div className='shadow-md shadow-black  rounded-md '>
      <img className='w-full h-60  rounded-md ' src={props.image} alt="" />
      </div>
      <div className=" shadow-md shadow-black rounded-md p-2 mt-2 bg-white h-full">
                <div>
                        <h4 className='underline'>{props.title}</h4>
                        <p>{props.story}</p>
                </div>
                <div className=' flex justify-end items-end p-2'>
                        <button className='bg-blue-300 font-serif shadow-sm shadow-black p-2 rounded '>
                            <a href={props.url} target='_blank' rel="noreferrer">Read More</a>
                        </button>
                </div>
      </div>
    </div>
  )
}
