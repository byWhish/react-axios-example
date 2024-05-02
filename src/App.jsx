import './App.css'
import off from './assets/off.png'
import on from './assets/on.png'
import luzOn from './assets/luz-on.png'
import luzOff from './assets/luz-off.png'
import {useEffect, useState} from "react";
import {getLuzStatus} from "./service/Api.js";
import {Spinner} from "./components/spinner.jsx";

const App = () => {
    const [data, setData] = useState()
    const [prendido, setPrendido] = useState(true)
    const [loading, setLoading] = useState(false)
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        setLoading(true)
        getLuzStatus(123)
            .then(response => {
                setData(response.luz)
                console.log('success', response)
            })
            .catch(error => {
                setIsError(true)
                console.log('error: ', error)
            })
            .finally(() => {
                setLoading(false)
            })
    }, []);

    if (isError) return <div>Error</div>

    if (loading) return <Spinner />
    const handleClick = () => {
        setPrendido(x => !x)
    }

  return (
    <div className="luz-layout">
      {data && prendido ? <img className="luz-on" src={luzOn} /> : <img className="luz-off" src={luzOff} />}
      <img className="on" src={prendido ? on : off} onClick={handleClick} />
    </div>
  )
}

export default App
