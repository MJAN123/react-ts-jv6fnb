import React from 'react'

interface HelloWorldProps{
  message: string
  setMessage: Function
}

const HelloWorld=(props:HelloWorldProps)=>{
  return (
    <div>
    {message}
    </div>
  )
}
export default HelloWorld;