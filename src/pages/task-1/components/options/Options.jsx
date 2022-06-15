import React from 'react'
import "./Options.css"



import Option1 from '../Option1/Option1';
import Option2 from '../Option2/Option2';
import Option3 from '../Option3/Option3';


const Options = () => {
  return (
    <div className='Options__Body'>
      <div className='Options__Icons'>
        <Option1></Option1>
        <Option2></Option2>
        <Option3></Option3>
      </div>
    </div>
  )
}

export default Options