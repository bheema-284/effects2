import { useEffect, useState } from "react"

export const Stopwatch = ()=>{
    const [timer, setTimer] = useState(0);

    useEffect(() =>{
        const id = setInterval(() =>{
            setTimer((prev)=>{
                if(prev >=50){
                    clearInterval(id);
                    return 0;
                }
                return prev + 1;

            });
        }, 1000);
        return () =>{
             clearInterval(id);
        }
    } , [])
    return <div>Timer : {timer}</div>;

};