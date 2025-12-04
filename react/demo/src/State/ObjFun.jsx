// import React, { useState } from 'react'

// function Funobj() {

//     const [data, setdata] = useState({
//         name: "harsh",
//         count: 0,
//         isImage: true
//     })
//     console.log(data)

//     return (
//         <div>
//             <h1>Hello name : {data.name}</h1>

//             <button onClick={() => setdata({ ...data, name: "Abc " })}>Change name</button>
//             <button onClick={() => setdata({ ...data, name: "Xyz " })}>Change name2</button>

//             <h1>Hello count : {data.count}</h1>
//             <button onClick={()=>setdata({...data,count :data.count+1})}>Increment</button>
//             <button onClick={()=>setdata({...data,count :data.count-1})}>Decrement</button>
//             <button onClick={()=>setdata({...data,count:(0)})}>Zero</button>
//         </div>

//     )
// }

// export default Funobj