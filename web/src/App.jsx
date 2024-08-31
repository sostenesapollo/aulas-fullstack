import './App.css'
import axios from 'axios'
import { useState } from 'react';

function App() {

  const [data, setData] = useState(null)

  const callBackend = async () => {
    const result = await axios.get('http://localhost:3000/')
    console.log(result.data);
    setData(result.data)
  }
  

  return (
    <>
      {/* {JSON.stringify(data)} */}
      {data?.ususarios?.at(0)?.nome}
        <button
          onClick={() => callBackend()}
        >
          Call backend
        </button>
    </>
  )
}

export default App
