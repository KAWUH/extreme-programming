import './App.css';
import ValueInput from './ValueInput';
import { useState } from 'react'


function App() {

  const [weight, setWeight] = useState('');
  const [scale, setScale] = useState('kg');

  function toKilogram(gram) {
    return (gram / 1000);
  }
  
  function toGram(kilogram) {
    return (kilogram * 1000);
  }
  
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }





  function handlekgChange(weight){
    setScale('kg');
    setWeight(weight);
  }

  function handlegChange(weight){
    setScale('g');
    setWeight(weight);
  }

  
  
  const weightVal = weight;

  const kilogram = scale === 'g' ? tryConvert(weightVal, toKilogram) : weightVal;
  /*const decagram = scale === 'dag' ? tryConvert(temperature, toFahrenheit) : temperature;*/
  const gram = scale === 'kg' ? tryConvert(weightVal, toGram) : weightVal;
  /*const miligram = scale === 'mg' ? tryConvert(temperature, toFahrenheit) : temperature;*/

  return (
    <div className="App">
      <ValueInput weight={kilogram} scale="kg" onWeightChange={handlekgChange}/>
      {/*<ValueInput weight={decagram} scale="dag" onValueChange={handledagChange}/>*/}
      <ValueInput weight={gram} scale="g" onWeightChange={handlegChange}/>
       {/*<ValueInput weight={miligram} scale="mg" onValueChange={handlemgChange}/>*/}
    </div>
  );
}

export default App;
