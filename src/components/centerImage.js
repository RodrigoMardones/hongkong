import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import carrousel from '../data/dataCenterImage';

export default function CenterImage() {
    const [index, setIndex ] = useState(0);
    const timeoutRef = useRef(null);
    function resetTimeout() {
        if(timeoutRef.current){
            clearTimeout(timeoutRef.current);
        }
    }
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex((prevIndex) =>  prevIndex === carrousel.length - 1 ? 0: prevIndex + 1)
        }, 2500)
        return () => resetTimeout();
    },[index]);
    return (
        <div className="col text-center">
            <Image src={carrousel[index]} alt="Hongkong" width={700} height={700}/>
        </div>
    )
}