import { Counter } from "./components/counter";
import Mirror from "./components/Mirror";
import { CounterProvider } from "./context";
const App = ()=>{
  return(
    <CounterProvider>
      <Counter/>
      <hr />
      <Mirror/>
    </CounterProvider>
  )
}
export default App;
