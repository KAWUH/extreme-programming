import React, {useState} from 'react'
import ValueInput from './ValueInput'

export default function MemoryMUT() {
    const [weight, setWeight] = useState('');
    const [scale, setScale] = useState('GB');
  
    function toGigabyte(val, scale) {
      if(scale === 'B'){
        return (val * 1000000000);
      }else if(scale === 'MB'){
        return (val / 1000);
      }else if(scale === 'KB'){
        return (val / 1000000);
      }
    }
    
    function toByte(val, scale) {
      if(scale === 'GB'){
        return (val * 1000000000);
      }else if(scale === 'MB'){
        return (val * 1000000);
      }else if(scale === 'KB'){
        return (val * 1000);
      }
    }
  
    function toMegabyte(val, scale) {
      if(scale === 'B'){
        return (val * 0.000001);
      }else if(scale === 'GB'){
        return (val * 1000);
      }else if(scale === 'KB'){
        return (val * 0.001);
      }
    }
    
    function toKilobyte(val, scale) {
      if(scale === 'GB'){
        return (val * 1000000);
      }else if(scale === 'MB'){
        return (val * 1000);
      }else if(scale === 'B'){
        return (val * 0.001);
      }
    }
    
    function tryConvert(weight, convert, scale) {
      const input = parseFloat(weight);
      if (Number.isNaN(input)) {
        return '';
      }
      const output = convert(input, scale);
      const rounded = Math.round(output * 1000) / 1000;
      return rounded.toString();
    }
  
  
  
  
  
    function handlegbChange(weight){
      setScale('GB');
      setWeight(weight);
    }
  
    function handlebChange(weight){
      setScale('B');
      setWeight(weight);
    }
  
    function handlembChange(weight){
      setScale('MB');
      setWeight(weight);
    }
  
    function handlekbChange(weight){
      setScale('KB');
      setWeight(weight);
    }
  
    
    const weightVal = weight;
  
    const gigabyte = scale !== 'GB' ? tryConvert(weightVal, toGigabyte, scale) : weightVal;
    const megabyte = scale !== 'MB' ? tryConvert(weightVal, toMegabyte, scale) : weightVal;
    const byte = scale !== 'B' ? tryConvert(weightVal, toByte, scale) : weightVal;
    const kilobyte = scale !== 'KB' ? tryConvert(weightVal, toKilobyte, scale) : weightVal;
  
    return (
      <div className="App">
        <ValueInput weight={gigabyte} scale="GB" onWeightChange={handlegbChange}/>
        <ValueInput weight={megabyte} scale='MB' onWeightChange={handlembChange}/>
        <ValueInput weight={byte} scale="B" onWeightChange={handlebChange}/>
        <ValueInput weight={kilobyte} scale="KB" onWeightChange={handlekbChange}/>
      </div>
    );
}
