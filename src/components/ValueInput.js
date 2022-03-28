import React from 'react'

export default function ValueInput(props) {

    const scaleNames = {
        kg: 'kiliograms',
        g: 'grams',
        dag: 'decagrams',
        mg: 'miligrams',
        lb: 'pounds',
        B: 'bytes',
        GB: 'gigabytes',
        MB: 'megabytes',
        KB: 'kilobytes',
        m: 'meters',
        cm: 'centimeters',
        km: 'kilometers',
        mi: 'miles',
        mm: 'milimeters',
        dm: 'decimeters'
      };

    function handleChange(e) {
        props.onWeightChange(e.target.value);
    }

    const weight = props.weight;
    const scale = props.scale;

  return (
    <div>
        <legend>Insert value in {scaleNames[scale]}:</legend>
        <input type="number" value={weight} onChange={handleChange}></input>
    </div>
  )
}
