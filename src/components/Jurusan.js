import React, {useEffect, useState} from 'react'


function Jurusan() {
const [textJurusan, setTextJurusan] = useState("")
  return (
    
    
    <div>
        <br></br>
        <button  onClick={()=>setTextJurusan("Teknik Komputer")}>Jurusan</button>
        <p>{textJurusan}</p>
        {textJurusan === "Teknik Komputer" && <button onClick={()=>setTextJurusan("")}>kosongin</button>}
        <br></br>
    </div>

    
    
  )
}

export default Jurusan