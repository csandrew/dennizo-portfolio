import React from 'react'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '',
  ...props 
}) => {
  const baseStyles = 'font-body font-bold uppercase tracking-wider rounded-lg transition-all transform inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-white text-black hover:bg-gray-200 hover:scale-105',
    secondary: 'border-2 border-white/40 text-white hover:bg-white hover:text-black',
    accent: 'bg-primary text-white hover:bg-primary-dark hover:scale-105',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  }
  
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
