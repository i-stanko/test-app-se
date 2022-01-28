import React, { useState } from 'react';
import style from './Calculator.module.css';

const Calculator = () => {
  const [operandA, setOperandA] = useState('');
  const [operandB, setOperandB] = useState('');
  const [operation, setOperation] = useState('');

  let strResult = operandA + operation + operandB;
  let results = eval(strResult);

  const [result, calcResult] = useState(results);


  return (
    <div className={style.main}>
      <div className={style.calculate}>
        <div className={style.itemCalc}>
          <input
            type="number"
            required
            value={operandA}
            onChange={(e) => setOperandA(+e.target.value)}
          />
        </div>

        <div className={style.itemCalc}>
          <input
            type="number"
            required
            value={operandB}
            onChange={(e) => setOperandB(+e.target.value)}
          />
        </div>

        <div className={style.itemCalc}>
          <select
            className={style.select}
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
          >
            <option disabled>Select operation</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
        </div>

        <div className={style.itemCalc}>
          <button className={style.button} onClick={() => calcResult(results)}>
            Calculate
          </button>
        </div>
      </div>

      <div className={style.result}>
        <div className={style.itemRes}>
          <p>{operandA} {operation} {operandB}</p>
        </div>
        <div className={style.itemRes}>
          <h2>Result: {result}</h2>
        </div>
        <div className={style.itemRes}>
          <p className={style.error}>Error: error description</p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
