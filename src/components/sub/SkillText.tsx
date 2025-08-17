// @ts-nocheck

import React from 'react'
import { motion } from "framer-motion"
import { SparklesIcon } from '@heroicons/react/16/solid'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '../utils/motion'

const SkillText = () => {
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box border border-[#7042f88b] opacity-[0.9] py-[8px] px-[7px] mb-10'
        >
            <SparklesIcon className='text-[#b49bff] mr-[12px] ml-[10px] h-5 w-5'/>
            <h1 className='Welcome-text text-[32px] px-3'>
                Skills
            </h1>
        </motion.div>

        <motion.div
        variants={slideInFromLeft(0.5)}
        className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
        >
            Data Analytics Enhanced by Technical Implementation
        </motion.div>

        <motion.div
        variants={slideInFromRight(0.5)}
        className='cursive text-[20px] text-gray-200 mb-10 mt-[10px] text-center'
        >
            From Software Development to Data Analytics
        </motion.div>
    </div>
  )
}

export default SkillText
