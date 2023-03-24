import React from 'react'

const InputField = ({type, placeholder, name}) => {
  return (
    <input type={type} placeholder={placeholder} name={name} className="w-full h-10 my-2 border border-indigo-600 px-5 rounded-lg text-base text-gray-800 capitalize placeholder:text-gray-400 placeholder:text-base"/>
  )
}

export default InputField