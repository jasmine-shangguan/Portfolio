// @ts-nocheck
import React, { useState } from 'react'
import { motion, spring, AnimatePresence } from 'framer-motion';

const ProjectCard = ({ src, title, description, source_code, deployed_app }) => {

  const [isExpanded, setIsExpanded] = useState(false);


  const MAX_LENGTH = 100;
  const shouldTruncate = description.length > MAX_LENGTH;

const containerVariants = {
  initial: {opacity: 0 },
  animate: {opacity:1,
    transition: {duration:0.6}
  },
}


  return (
    <motion.div 
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit={"initial"}
      className='flex-col justify-around relative w-auto w-max md:w-[300px] overflow-hidden text-wrap rounded-lg shadow-lg border border-[#7886C7] m-2 '
      >
      <a
      
      href={deployed_app} target='_blank' rel='noopener noreferrer'>

        <motion.img 
        whileHover={{scale:1.05}}
        whileTap={{scale:0.9}}
        transition={{type:"spring", stiffness:200, damping:10}}
        src={src} alt={title}
        width={400}
        height={400}
        className='object-cover w-auto' 
        />
      </a>

      <div className='relative p-4 flex flex-col items-baseline'>
          <h1 className='text-white font-semibold text-md md:text-2xl'>{title}</h1>
          <p className='relative text-gray-300 mt-2'>
            {shouldTruncate && !isExpanded
            ? `${description.slice(0, MAX_LENGTH)}...`
            : description}
          </p>

          {/* Show the "Read More" button only if truncation is needed */}
          {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className='mt-2 text-[#FFECDB] hover:underline text-sm'
            >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
          )}
        </div>
    </motion.div>
    
  )
}

export default ProjectCard
