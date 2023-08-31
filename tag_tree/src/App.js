
import { useState } from 'react';
import './App.css';
import TagView from './Components/TagView';

function App() {

 const [showData, setShowData] = useState(false);
 const [child, setChild] = useState([]);

 const handleChild = () => {
  setChild([...child, <TagView key={child.length} handleIncrement={getCount} />])
 }
 
 const onClick = () => {
     setShowData(!showData)
 }
 const getCount = () => {
  return child.length + 1;
};

 return (
  <div>
   <div className='container'>
     <div className='tags'>
     <div>
       <div>
          <button onClick={onClick} >{showData ? ">" : "v"}</button>
       <p>root</p>
       </div>
     
      
       </div>
     <div>
       <button onClick={handleChild}>Add Child</button>
     </div>
     </div>
     <div className='child'>
      {child.map((el,index) =>( 
          <div key={index}> {el}</div>  
      ))}
     </div>
     {showData && <div>
         <label>Data</label>
         <input type="text" />
       </div>}
   </div>
   <button>Export</button>
   </div>
 )
  
}

export default App;
