import './App.css';
import Units from './components/Units';
import WeightMUT from './components/WeightMUT';
import MemoryMUT from './components/MemoryMUT';
import LengthMUT from './components/LengthMUT';
import React, {useState} from 'react';

function App() {

  const [type, setType] = useState('mass');

  function handleChange(e) {
    setType(e.target.value);
  }

  return (
    <div className='App'>
      <Units type={type}/>
      <div className='mut-list'>
        <div className='container'>
          <select id='mut-select' name='mut-select' onChange={handleChange}>
            <option value='mass'>Values of mass</option>
            <option value='length'>Values of length</option>
            <option value='memory'>Values of memory</option>
          </select>
          <div className="select_arrow">
          </div>
        </div>
      </div>

      {type == 'mass' &&
        <WeightMUT/>
      }
      {type == 'length' &&
        <LengthMUT/>
      }
      {type == 'memory' &&
        <MemoryMUT/>
      }
      
    </div>
  );
}

export default App;
