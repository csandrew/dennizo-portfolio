import React from 'react'

const Card = ({
  children,
  variant = 'dark',
  className = '',
  ...props
}) => {
  const baseStyles = 'rounded-3xl p-8'
  
  const variants = {
    dark: 'bg-gray-900 border border-white/10',
    light: 'bg-white border border-gray-200',
  }
  
  return (
    <div 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card
