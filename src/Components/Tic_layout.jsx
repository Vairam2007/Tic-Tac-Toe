import React from 'react'
import TicTacToe from "./TicTacToe"

const Tic_layout = () => {
    function reload(){
        document.location.reload()
    }

  return (
    <>
    <div className="w-ful min-h-[100vh] bg-gray-900 flex justify-center items-center flex-col gap-[30px]">
        <div className="text-[40px] text-white font-bold">Tic Tac Toe</div>
        <TicTacToe />
        <button onClick={reload} className='bg-blue-400 py-[10px] px-[20px] rounded-[20px] font-semibold '>Reset</button>
        <audio src="public/Images/mixkit-kidding-around-9.mp3" autoPlay></audio>
    </div>
    </>
  )
}

export default Tic_layout