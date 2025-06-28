import React, { useState,useRef } from 'react'
import './TicTacToe.css'
import circle_icon from '../assets/circle.png'
import cross_icon from '../assets/cross.png'

let data = ["","","","","","","","","",]

const TicTacToe = () => {

    let [count, setCount] = useState(0);
    let [lock, setlock] = useState(false);
    let titleRef = useRef(null);
    let box1 = useRef(null);
    let box2 = useRef(null);
    let box3 = useRef(null);
    let box4 = useRef(null);
    let box5 = useRef(null);
    let box6 = useRef(null);
    let box7 = useRef(null);
    let box8 = useRef(null);
    let box9 = useRef(null);

    let box_array=[box1,box2,box3,box4,box5,box6,box7,box8,box9]
    

    const toggle = (e,num)=>{ //e is the event and m is the index to give boxes
        if(lock){
            return 0; 
        }
        if(data[num] !== "") return 0; 
        if(count%2==0){
        e.target.innerHTML = `<img src="${cross_icon}">`

        data[num] = "x";
        setCount(++count);
        }
        else{
            e.target.innerHTML= `<img src="${circle_icon}">`
            data[num]="o";
            setCount(++count);
        }
        checkWin()
    }

    const checkWin=()=>{
       if (data[0] == data[1] && data[1] == data[2] && data[2] != "") {
        won(data[0]);
        } else if (data[3] == data[4] && data[4] == data[5] && data[5] != "") {
        won(data[3]);
        } else if (data[6] == data[7] && data[7] == data[8] && data[8] != "") {
        won(data[6]);
        } else if (data[0] == data[3] && data[3] == data[6] && data[6] != "") {
        won(data[0]);
        } else if (data[1] == data[4] && data[4] == data[7] && data[7] != "") {
        won(data[1]);
        } else if (data[2] == data[5] && data[5] == data[8] && data[8] != "") {
        won(data[2]);
        } else if (data[0] == data[4] && data[4] == data[8] && data[8] != "") {
        won(data[0]);
        } else if (data[2] == data[4] && data[4] == data[6] && data[6] != "") {
        won(data[2]);
}

    }
    const won = (winner)=>{
        setlock(true);
        if(winner === 'x'){
            titleRef.current.innerHTML = `congratulations: For cross win ( <img src = ${cross_icon} won the Game> )`
        }
        else{
            titleRef.current.innerHTML = `congratulations: For circle win ( <img src = ${circle_icon} >)`
        }
    }

    const reset = ()=>{ 
        setlock(false); 
        let data = ["","","","","","","","","",]
        setCount(0);
        titleRef.current.innerHTML = `Tic Tac Toe Game In <span>React</span>`
        box_array.map((e)=>{
            e.current.innerHTML = "";; 
        })
    }

  return (
    <div className="container" style={{backgroundColor:'#0f1B21'}}>

    <h1 className="title" ref = {titleRef}>Tic Tac Toe Game In{" "}<span>React</span></h1>
    <div className="board">
        {/* Row-1 */}
        <div className="row1">
            <div className="boxes" ref={box1} onClick={(e)=>{toggle(e,0)}}></div>
            <div className="boxes" ref={box2} onClick={(e)=>{toggle(e,1)}}></div>
            <div className="boxes" ref={box3} onClick={(e)=>{toggle(e,2)}}></div>
        </div>
        {/* Row-2 */}
        <div className="row2">
            <div className="boxes" ref={box4} onClick={(e)=>{toggle(e,3)}}></div>
            <div className="boxes" ref={box5} onClick={(e)=>{toggle(e,4)}}></div>
            <div className="boxes" ref={box6} onClick={(e)=>{toggle(e,5)}}></div>
        </div>
        {/* Row-3 */}
        <div className="row3">
            <div className="boxes" ref={box7} onClick={(e)=>{toggle(e,6)}}></div>
            <div className="boxes" ref={box8} onClick={(e)=>{toggle(e,7)}}></div>
            <div className="boxes" ref={box9} onClick={(e)=>{toggle(e,8)}}></div>
        </div>
    </div>
    <button className="reset" onClick={()=>{reset()}}>Reset</button>
    </div>
  )
}

export default TicTacToe
