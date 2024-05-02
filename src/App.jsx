import './App.css'
// import off from './assets/off.png'
import on from './assets/on.png'
import luzOn from './assets/luz-on.png'
// import luzOff from './assets/luz-off.png'
import {useEffect, useState} from "react";
import {getLuzStatus} from "./service/Api.js";
// import {Spinner} from "./components/spinner";

const App = () => {
    const [data, setData] = useState()

    useEffect(() => {
        getLuzStatus(123)
            .then(response => {
                setData(response)
                console.log('success', response)
            })
            .catch(error => {
                console.log('error: ', error)
            })
    }, []);

  return (
    <div className="luz-layout">
      <img className="luz-on" src={luzOn} />
      {/*<img className="luz-off" src={luzOff} />*/}
      <img className="on" src={on} />
      {/*<img className="off" src={off} />*/}
        {/*<Spinner />*/}
    </div>
  )
}

export default App
