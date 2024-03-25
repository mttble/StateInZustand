import './App.css'
import TodoPage from './TodoPage'
import { useCounterStore } from './store'

const App = () => {
const count = useCounterStore(state => state.count)

return <OtherComponent count={count} />
}

const OtherComponent = ({ count }: { count: number }) => { 
  const increment = useCounterStore(state => state.increment)
  const incrementAsync = useCounterStore(state => state.incrementAsync)
  const decrement = useCounterStore(state => state.decrement)
  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <div>
        <button onClick={incrementAsync}>Increment Async</button>
        </div>
      </div>
      <TodoPage />
    </div> 
  
  )
}

export default App
