import React from 'react'

export default function Container({children,className}:{children : React.ReactNode,className?:string}) {
  return (
    <div className={`max-w-7xl px-6 lg:px-8 mx-auto ${className}`}>{children}</div>
  )
}
