import React, { useState } from 'react'
import xmark from "/Images/xmarkimg.png"
import omark from "/Images/omarkimg.jpg"

var data=["","","","","","","","",""];
var asval=true;
var count=0;

const TicTacToe = () => {

    function click(ids,index){
                if(asval){
                    // console.log(asval)
                    if(document.getElementById(ids).querySelector("img") == null){
                        if(count%2 === 0){
                            var select=document.getElementById(ids)
                            select.innerHTML=`<img src=${xmark} />`;
                            data[index]="X"
                        }
                        else{
                            var select=document.getElementById(ids)
                            select.innerHTML=`<img src=${omark} />`;
                            data[index]="O"
                        }
                        
                        count++;
                        console.log(data)
                        console.log(ids)
                        checkwinner()
                    }
                    }
    }

    function checkwinner(){ 

        var val=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        val.forEach(element => {
            if(data[element[0]] == data[element[1]] && data[element[1]] == data[element[2]] && data[element[2]] !== "" ){
                document.getElementById("text").textContent=`${data[element[0]]} is the winner`
                asval = false;
            }
        });
        
    }

    return (
        <>
        
        <div className="w-full flex justify-center items-center text-[40px] font-bold text-white" id='text'></div>
    <div className="w-full h-[50vh] flex justify-center items-center flex-col">
        <div className="w-[330px] h-[100px] flex justify-center items-center my-[5px]">
            <button  id="one" onClick={()=>{click("one",0)}}  className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
            <button id='two' onClick={()=>{click("two",1)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
            <button id='three' onClick={()=>{click("three",2)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
        </div>
        <div className="w-[330px] h-[100px] flex justify-center items-center my-[5px]">
            <button id='four' onClick={()=>{click("four",3)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
            <button id='five' onClick={()=>{click("five",4)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
            <button id='six' onClick={()=>{click("six",5)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
        </div>
        <div className="w-[330px] h-[100px] flex justify-center items-center my-[5px]">
            <button id='seven' onClick={()=>{click("seven",6)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
            <button id='eight' onClick={()=>{click("eight",7)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
            <button id='nine' onClick={()=>{click("nine",8)}} className="w-[100px] h-[100px] bg-gray-700 mx-[5px] rounded-[10px]"></button>
        </div>
    </div>
    </>
  )
}

export default TicTacToe
