import React, { useState } from 'react'


function Tictactoe() {

    const [move,setMove]=useState('x')
    const [board,setBoard]=useState(Array(9).fill(''))



    const click=(e)=>{
        let square=[...board]
        if(board[e]!==''){
            alert("already clicked")
            return
        }

        square[e]=move
        setBoard(square)
        if(move==="x"){
            setMove("o")
        }else{
            setMove("x")
        }
        if(checkWin(square)){
            alert('Winner')
            square.fill('')
            setBoard(square)
        }
        if(checkDraw(square)){
            alert('Match draw')
            square.fill('')
        }
    }
    const checkDraw=(board)=>{
        let count=0
        board.forEach(element=>{
            if(element!==''){
                count++
            }
        })
        if(count>=9){
            return true
        }else{
            return false
        }
    }


    const checkWin=(board)=>{
        const conditions=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]
        let flag=false;
        conditions.forEach(element=>{
            console.log(element)
            if(board[element[0]]!==""&&board[element[1]]!==""&&board[element[2]]!==''){
                if(board[element[0]]===board[element[1]]&&board[element[1]]===board[element[2]]){
                    flag=true;
                }
            }

        })
        return flag

    }
    






    
  return (
    <div><h1 className='text-center'>Tictactoe</h1>

    <table>

        <tbody>
            <tr>
                <td onClick={()=>click(0)}>{board[0]}</td>
                <td onClick={()=>click(1)}>{board[1]}</td>
                <td onClick={()=>click(2)}>{board[2]}</td>
            </tr>
            <tr>
                <td onClick={()=>click(3)}>{board[3]}</td>
                <td onClick={()=>click(4)}>{board[4]}</td>
                <td onClick={()=>click(5)}>{board[5]}</td>
            </tr>
            <tr>
                <td onClick={()=>click(6)}>{board[6]}</td>
                <td onClick={()=>click(7)}>{board[7]}</td>
                <td onClick={()=>click(8)}>{board[8]}</td>
            </tr>
        </tbody>

    </table>
    
    
    </div>
  )
}

export default Tictactoe