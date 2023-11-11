import { useState } from "react"

export default function App() {
  const [color,setcolor]=useState("black");
  return (
   <div className="w-full h-screen duration-200 "
   style={{backgroundColor:color}}
   
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2"> 
      <div className="flex flex-wrap justify-center gap-5 shadow-xl bg-white px-3 py-2 rounded-xl ">
        <button
        className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
        style={{backgroundColor: "red"}}
        onClick={()=>setcolor("red")}
       >Red</button>
         <button
        className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
        style={{backgroundColor: "Green"}}
        onClick={()=>setcolor("Green")}
        >Green</button>
         <button
        className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
        style={{backgroundColor: "Blue"}}
        onClick={()=>setcolor("Blue")}
        
        >Blue</button>
         <button
        className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
        style={{backgroundColor: "Pink"}}
        onClick={()=>setcolor("Pink")}
        >Pink</button>
         <button
        className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
        style={{backgroundColor: "Magenta"}}
        onClick={()=>setcolor("Magenta")}
        >Magenta</button>
          <button
        className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
        style={{backgroundColor: "Crimson"}}
        onClick={()=>setcolor("Crimson")}
        >Crimson</button>
          <button
        className="outline-none px-4 py-1 rounded-3xl text-white shadow-lg"
        style={{backgroundColor: "DarkKhaki"}}
        onClick={()=>setcolor("DarkKhaki")}
        >DarkKhaki</button>
      </div>
    </div>
   </div>
    
  )
}