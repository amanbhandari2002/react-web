import React from 'react'
import "./Left.css"
import { motion } from 'framer-motion'
import { useState ,useEffect  } from 'react'




function Left() {
  const [coach,setcoach]= useState(100)
  const [member,setmember]= useState(100)
  const [program,setprogram]= useState(100)
  return (
    <>
    <div className="s1">
        <motion.div initial={{left:'300px'}} whileInView={{left:'4%'}} transition={{type:'tween', duration:2.5}} className="s1box"></motion.div>
        <span>THE BEST FITNESS CLUB IN THE TOWN</span>
    </div>

    <div className="s2">
        <span className='s2a'>SHAPE</span>
        <span className='s2b'>YOUR</span>
    </div>
    <div className="s3">
        <span>IDEAL</span>
        <span>BODY</span>
    </div>

    <div className="s4">
      <span>Join our fitness training program and get yourself in your best shape.</span>
    </div>

    <div className="stats">
      <div className="coach sCom">
        <span>+{coach}</span>
        <span className='stats-sp'>Expert Coaches</span>
      </div>

      <div className="member sCom">
        <span>+{member}</span>
        <span className='stats-sp'>Members Joined</span>
      </div>
      <div className="program sCom">
        <span>+{program}</span>
        <span  className='stats-sp'>Fitness Program</span>
      </div>
    </div>

    <div className="left-btn">
      <div className="start-btn">
        <button>Get Started</button>
      </div>
      <div className="learn-m">
        <button>Learn More</button>
      </div>
    </div>

    

    </>

  )
}

export default Left