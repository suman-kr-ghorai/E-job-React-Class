import { useEffect, useState } from "react";

const Useeff=()=>{
    const [count,setCount]=useState<number>(0);
    const [datam,setDatam]=useState<number>(0);
    const increment=()=>{
        setCount(count+1);
    }
    const increment2=()=>{
        setDatam(datam+1);
    }
    useEffect(()=>{
        console.log("UseEffect called");
    },[count,datam])
    return(
        <>

        {/* {console.log("Component Load")        } */}
        <h1>Example of useEffect hooks</h1>
        <h2>Count is : {count}</h2>
        <h2>Datam is : {datam}</h2>
        <button onClick={increment} className="btn btn-success">Increment</button>
        <button onClick={increment2} className="btn btn-primary">Increment2</button>
       
        </>
    )
}
export default Useeff;