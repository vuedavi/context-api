import { useCount } from "../context"

export function Counter(){
  const {count, setCount} = useCount();
  return(
    <div>
      <h1>Counter {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Add</button>
    </div>
  )
}