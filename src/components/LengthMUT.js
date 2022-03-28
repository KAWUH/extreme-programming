import React, {useState} from 'react'
import ValueInput from './ValueInput'

export default function LengthMUT() {
    const [weight, setWeight] = useState('');
    const [scale, setScale] = useState('km');
  
    function toKilometer(val, scale) {
      if(scale === 'm'){
        return (val / 1000);
      }else if(scale === 'dm'){
        return (val / 10);
      }else if(scale === 'cm'){
        return (val / 10);
      }else if(scale === 'mm'){
        return (val / 1000000);
      }else if(scale === 'mi'){
        return (val * 0.45359237);
      }
    }
    
    function toMeter(val, scale) {
      if(scale === 'km'){
        return (val * 1000);
      }else if(scale === 'dm'){
        return (val * 10);
      }else if(scale === 'cm'){
        return (val / 10);
      }else if(scale === 'mm'){
        return (val / 1000);
      }else if(scale === 'mi'){
        return (val * 453.59237);
      }
    }
  
    function toDecimeter(val, scale) {
      if(scale === 'm'){
        return (val / 10);
      }else if(scale === 'km'){
        return (val * 100);
      }else if(scale === 'cm'){
        return (val / 10);
      }else if(scale === 'mm'){
        return (val / 10000);
      }else if(scale === 'mi'){
        return (val * 45.359237);
      }
    }
    
    function toMilimeter(val, scale) {
      if(scale === 'km'){
        return (val * 1000000);
      }else if(scale === 'dm'){
        return (val * 10000);
      }else if(scale === 'cm'){
        return (val / 10);
      }else if(scale === 'm'){
        return (val * 1000);
      }else if(scale === 'mi'){
        return (val * 453592.37);
      }
    }

    function toMile(val, scale) {
        if(scale === 'km'){
          return (val * 2.20462262);
        }else if(scale === 'dm'){
          return (val * 0.0220462262);
        }else if(scale === 'cm'){
            return (val / 10);
        }else if(scale === 'm'){
          return (val * 0.00220462262);
        }else if(scale === 'mm'){
            return (val * 0.00003527396);
          }
      }

      function toCentimeter(val, scale) {
        if(scale === 'km'){
          return (val * 2.20462262);
        }else if(scale === 'dm'){
          return (val * 0.0220462262);
        }else if(scale === 'cm'){
            return (val / 10);
        }else if(scale === 'm'){
          return (val * 0.00220462262);
        }else if(scale === 'mm'){
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
  
  
  
  
  
    function handlekmChange(weight){
      setScale('km');
      setWeight(weight);
    }
  
    function handlemChange(weight){
      setScale('m');
      setWeight(weight);
    }
  
    function handledmChange(weight){
      setScale('dm');
      setWeight(weight);
    }
  
    function handlemmChange(weight){
      setScale('mm');
      setWeight(weight);
    }

    function handlemiChange(weight){
        setScale('mi');
        setWeight(weight);
      }

      function handlecmChange(weight){
        setScale('cm');
        setWeight(weight);
      }
  
    
    const weightVal = weight;
  
    const kilometer = scale !== 'km' ? tryConvert(weightVal, toKilometer, scale) : weightVal;
    const decimeter = scale !== 'dm' ? tryConvert(weightVal, toDecimeter, scale) : weightVal;
    const meter = scale !== 'm' ? tryConvert(weightVal, toMeter, scale) : weightVal;
    const milimeter = scale !== 'mm' ? tryConvert(weightVal, toMilimeter, scale) : weightVal;
    const mile = scale !== 'mi' ? tryConvert(weightVal, toMile, scale) : weightVal;
    const centimeter = scale !== 'cm' ? tryConvert(weightVal, toCentimeter, scale) : weightVal;
  
    return (
      <div className="App">
        <h2>not working</h2>
        <ValueInput weight={kilometer} scale="km" onWeightChange={handlekmChange}/>
        <ValueInput weight={decimeter} scale="dm" onWeightChange={handledmChange}/>
        <ValueInput weight={meter} scale="m" onWeightChange={handlemChange}/>
        <ValueInput weight={milimeter} scale="mm" onWeightChange={handlemmChange}/>
        <ValueInput weight={mile} scale="mi" onWeightChange={handlemiChange}/>
        <ValueInput weight={centimeter} scale="cm" onWeightChange={handlecmChange}/>
      </div>
    );
}
