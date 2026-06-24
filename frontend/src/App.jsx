import { useState } from 'react'
import {Button} from "@/components/ui/button.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
      <h1 className="text-4xl font-bold">
        Teste 2
      </h1>
        <Button
            onClick={() => setCount(count + 1)}
        >
          Click Me! {count}
        </Button>
      </>
  )
}

export default App
