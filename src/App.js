


import './App.css';

import {data} from './helpers/data';
import Card from './components/Card';



function App() {
  return(
    <div>
      {data.map((food)=>{
        return <Card food={food}/>
      })}
    </div>
  )


}

export default App;
