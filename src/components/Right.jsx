import React from 'react'
import './Right.css'
import Heart from '../Assets/heart.png'
import guy from '../Assets/guy.png'
import circle from '../Assets/circle.png'
import { motion } from 'framer-motion'


function Right() {
  return (
    <>
    <motion.div initial={{right:'50px'}} whileInView={{right:'150px'}} transition={{type:'tween', duration:1.5}} className="heart">
        <img src={Heart} alt="" />
        <span>Heart Rate</span>
        <span>116 bpm</span>
    </motion.div>
    
    <div className="guy">
        <img src={guy} alt="" />
    </div>

    <motion.div initial={{right:'330px'}} whileInView={{right:"420px"}} transition={{type:"tween", duration:1.5}} className="circle">
        <img src={circle} alt="" />

    </motion.div>
    
    
    </>
  )
}

export default Right