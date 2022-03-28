import React from 'react'

export default function ValueInput(props) {

    const scaleNames = {
        kg: 'kiliogram',
        g: 'gram'
      };

    function handleChange(e) {
        props.onWeightChange(e.target.value);
    }

    const weight = props.weight;
    const scale = props.scale;

  return (
    <div>
        <legend>Podaj wagę w {scaleNames[scale]}:</legend>
        <input type="number" value={weight} onChange={handleChange}></input>
    </div>
  )
}
