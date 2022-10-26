import React, {useEffect, useState} from 'react'


function Angkatan() {
const [textAngkatan, setTextAngkatan] = useState("")
  return (
    
    
    <div>
        <button  onClick={()=>setTextAngkatan("2019")}>Angkatan</button>
        <p>{textAngkatan}</p>
        {textAngkatan === "2019" && <button onClick={()=>setTextAngkatan("")}>kosongin</button>}
        
    </div>

    
    
  )
}

export default Angkatan