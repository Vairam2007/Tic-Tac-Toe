import React from 'react'
import { Link } from 'react-router-dom'
import homeimg from "/Images/homeimg.jpg"

const Home = () => {

    return (
        <>
        <div className="w-full min-h-[100vh] bg-gray-900 flex justify-center items-center flex-col gap-[50px]">
            <img className='h-[50vh] w-[80vh]' src={homeimg} alt="home img" />
            <Link to="/Play" >
            <div className="w-[100px] min-h-[50px] bg-blue-600 rounded-[20px] text-white flex justify-center items-center font-bold ">Play</div>
            </Link>
           <audio src="/Images/mixkit-bridge-n-98-621.mp3" autoPlay ></audio>
        </div>
        </>
      )
}

export default Home
