import { useState } from "react";


function Counter(){
    // react에서 (가상 DOM) 변경되는 값 관리 HOOK
    // useState() : 변수의 상태를 관리하는 훅

    //let number = 0 => 재정의 x
    const[number, setNumber] = useState(0)

    const onIncres = ()=>{
        //+눌렀을 때 실행될 함수
        console.log(number)
        // number = number+1
        if (number >= 10){
            setNumber(10);
        }else{
            setNumber(n=>n+1)
            // 함수형 엡데이트 : 컴포넌트에 최적화 실킬때 사용
        }
    }

    const onDecres = ()=>{
        //-눌렀을 때 실행될 함수
        console.log(number)
        // number = number-1
        if(number<=0){
            setNumber(0)
        }else{
            setNumber(n=>n-1)
        }
    }

    return(
        <div>
            <h1>{number}</h1>
            {/* 함수를 정의해 놓고 onClick으로 호출 */}
            <button onClick={onIncres}>+</button>
            <button onClick={onDecres}>-</button>
        </div>
        
    )
}

export default Counter;