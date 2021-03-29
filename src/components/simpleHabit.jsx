import React, { useCallback, useEffect, useRef, useState } from 'react';


const SimpleHabit = (props) => {    
    const [count, setCount] = useState(0);
    // useState -> hook api 값을 메모리에 저장해준다.
    const spanRef = useRef();
    
    // const handleIncrement = () => {
    //     setCount(count + 1);
    // };
    const handleIncrement = useCallback(() => {
        setCount(count + 1);
    }, [count]);
    // 두번째 인자 []->처음에만 출력 ,[count]->전달한 인자가 변할때 출력


    useEffect(() => {
        console.log(`mounted & updated!: ${count}`);
    });
    
    return (
        <li className="habit">
            <span ref={spanRef} className="habit-name">Reading</span>
            <span className="habit-count">{count}</span>
            <button className="habit-button habit-increase" onClick={handleIncrement}>
                <i className="fas fa-plus-square"></i>
            </button>
        </li>
    );
};
// component가 변경되면 함수이기 때문에 전체가 호출된다.
export default SimpleHabit;
