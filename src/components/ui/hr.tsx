import  { ReactNode } from 'react'



const Hr = (props: {children: ReactNode, className?: string}) => {
  return (
    <div className={`relative flex py-5 items-center ${props.className}`}>
      <div className="flex-grow border-t border-gray-400"></div>
      <span className="flex-shrink mx-4 text-gray-400">{props.children}</span>
      <div className="flex-grow  border-t border-gray-400"></div>
    </div>
  )
}

export default Hr
