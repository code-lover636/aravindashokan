import React,{useEffect} from 'react'
import { useAnimate, stagger } from "framer-motion"
import '../styles/loading.scss'

const Loading = () => {
    const [scope, animate] = useAnimate()
    useEffect(() => {
        animate(scope.current, { y: "-100vh" }, { duration: 1, delay: 10 }, )
     }, [])
    return (
    <>
        <div ref={scope} className="loading-screen">
            <h1 class="myname1">ARAVIND</h1>
            <h1 class="myname2">ARAVIND</h1>
        </div>
        
    </>
    )
}

export default Loading
