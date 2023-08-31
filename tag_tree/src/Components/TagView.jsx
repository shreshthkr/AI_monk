import React, { useState } from 'react'
import "./TagView.css";

const TagView = ({handleIncrement}) => {
 
  const [showData, setShowData] = useState(false)
  const [count, setCount] = useState(1);
  const onClick = () => {
      setShowData(!showData)
  }

  return (
    <div className='case'>
      <div className='tags'>
      <div>
        <div>
           <button onClick={onClick} >{showData ? ">" : "v"}</button>
        <p className='child-count'>child {handleIncrement()}</p>
        </div>
      
       
        </div>
      <div>
        <button>Add Child</button>
      </div>
      </div>
      {showData && <div>
          <label>Data</label>
          <input type="text" />
        </div>}
    </div>
  )
}

export default TagView;
