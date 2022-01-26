import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logo1 from '../../public/logos/logo1.jpeg';
import logo2 from '../../public/logos/logo2.jpeg';
import logo3 from '../../public/logos/logo3.jpeg';
const images = [logo1, logo2, logo3];

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
            setIndex((prevIndex) =>  prevIndex === images.length - 1 ? 0: prevIndex + 1)
        }, 2500)
        return () => resetTimeout();
    },[index]);
    return (
        <Image src={images[index]} alt="Hongkong" width={700} height={700}/>
    )
}