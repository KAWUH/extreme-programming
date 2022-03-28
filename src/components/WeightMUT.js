import React, {useState} from 'react'
import ValueInput from './ValueInput'

export default function WeightMUT() {
    const [weight, setWeight] = useState('');
    const [scale, setScale] = useState('kg');
  
    function toKilogram(val, scale) {
      if(scale === 'g'){
        return (val / 1000);
      }else if(scale === 'dag'){
        return (val / 10);
      }else if(scale === 'mg'){
        return (val / 1000000);
      }else if(scale === 'lb'){
        return (val * 0.45359237);
      }
    }
    
    function toGram(val, scale) {
      if(scale === 'kg'){
        return (val * 1000);
      }else if(scale === 'dag'){
        return (val * 10);
      }else if(scale === 'mg'){
        return (val / 1000);
      }else if(scale === 'lb'){
        return (val * 453.59237);
      }
    }
  
    function toDecagram(val, scale) {
      if(scale === 'g'){
        return (val / 10);
      }else if(scale === 'kg'){
        return (val * 100);
      }else if(scale === 'mg'){
        return (val / 10000);
      }else if(scale === 'lb'){
        return (val * 45.359237);
      }
    }
    
    function toMiligram(val, scale) {
      if(scale === 'kg'){
        return (val * 1000000);
      }else if(scale === 'dag'){
        return (val * 10000);
      }else if(scale === 'g'){
        return (val * 1000);
      }else if(scale === 'lb'){
        return (val * 453592.37);
      }
    }

    function toPound(val, scale) {
        if(scale === 'kg'){
          return (val * 2.20462262);
        }else if(scale === 'dag'){
          return (val * 0.0220462262);
        }else if(scale === 'g'){
          return (val * 0.00220462262);
        }else if(scale === 'mg'){
            return (val * 0.00003527396);
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
  
  
  
  
  
    function handlekgChange(weight){
      setScale('kg');
      setWeight(weight);
    }
  
    function handlegChange(weight){
      setScale('g');
      setWeight(weight);
    }
  
    function handledagChange(weight){
      setScale('dag');
      setWeight(weight);
    }
  
    function handlemgChange(weight){
      setScale('mg');
      setWeight(weight);
    }

    function handlelbChange(weight){
        setScale('lb');
        setWeight(weight);
      }
  
    
    const weightVal = weight;
  
    const kilogram = scale !== 'kg' ? tryConvert(weightVal, toKilogram, scale) : weightVal;
    const decagram = scale !== 'dag' ? tryConvert(weightVal, toDecagram, scale) : weightVal;
    const gram = scale !== 'g' ? tryConvert(weightVal, toGram, scale) : weightVal;
    const miligram = scale !== 'mg' ? tryConvert(weightVal, toMiligram, scale) : weightVal;
    const pound = scale !== 'lb' ? tryConvert(weightVal, toPound, scale) : weightVal;
  
    return (
      <div className="App">
        <ValueInput weight={kilogram} scale="kg" onWeightChange={handlekgChange}/>
        <ValueInput weight={decagram} scale="dag" onWeightChange={handledagChange}/>
        <ValueInput weight={gram} scale="g" onWeightChange={handlegChange}/>
        <ValueInput weight={miligram} scale="mg" onWeightChange={handlemgChange}/>
        <ValueInput weight={pound} scale="lb" onWeightChange={handlelbChange}/>
      </div>
    );
}
