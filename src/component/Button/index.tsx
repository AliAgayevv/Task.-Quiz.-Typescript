import  {ReactNode } from 'react'

interface ButtonProps {
    children: ReactNode,
    onClick: () => void
}

export default function Button({children, onClick} : ButtonProps) {

  return (
    <button onClick={onClick} className='w-96 h-[60px] border bg-red-500 rounded-xl p-2 border-none '>
        {children}
    </button>
  )
}
