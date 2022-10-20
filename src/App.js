


import './App.css';

import {data} from './helpers/data';
import Card from './components/Card';



function App() {
  // console.log(data);

  return (
    <Card {...data} />

  )
}

export default App;
