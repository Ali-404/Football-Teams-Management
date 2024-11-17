import { motion } from 'motion/react'
import { FC, ReactNode } from 'react'

interface IAnimatedContainer  {
    children: ReactNode,
    className?:string
}

const AnimatedContainer:FC<IAnimatedContainer> = ({children, className}) => {
  return (
    <motion.div
    className={className}
    initial={{
        opacity: 0,
        
    }}

    animate={{
        opacity: 1,
        transition: {duration: 0.4, ease: "easeInOut"}
    }}

    
    >
      {children}
    </motion.div>
  )
}

export default AnimatedContainer
