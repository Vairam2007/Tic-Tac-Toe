import React from 'react'
import TicTacToe from "./TicTacToe"
import { Link } from 'react-router-dom'

const Tic_layout = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
    <div className="py-[20px] w-ful min-h-[100vh] bg-gray-900 flex justify-center items-center flex-col gap-[30px]">
        <div className="text-[40px] text-white font-bold">Tic Tac Toe</div>
        <TicTacToe />
        <div  className="w-[50%] flex justify-around items-center gap-[10px]">
        <button onClick={handleReload} id="btnRefresh" type="button" className='w-[80px] h-[30px] bg-blue-600 rounded-[20px] text-white flex justify-center items-center font-bold '>Reset</button>
        <Link to="/" >
            <div className="w-[80px] h-[30px] bg-blue-600 rounded-[20px] text-white flex justify-center items-center font-bold ">Home</div>
        </Link>
        </div>
        <audio src="/Images/mixkit-kidding-around-9.mp3" autoPlay></audio>
    </div>
    </>
  )
}

export default Tic_layout