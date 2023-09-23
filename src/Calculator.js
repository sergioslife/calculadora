import React, { useState } from 'react';
import './App.css';
import Button from './Button';

const Calculator = () => {
  const [formula, setFormula] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const calculatedResult = eval(formula);
        setResult(calculatedResult);
        setFormula(formula + ' = ' + calculatedResult);
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setFormula('');
      setResult('');
    } else {
      setFormula(formula + value);
    }
  };

  const buttonLayout = [
    ['7', '8', '9'],
    ['4', '5', '6'],
    ['1', '2', '3'],
    [ ,'0',],
  ];

  const functionLayout = ['C', '%', '+', '-', '/', '*', '='];

  const renderButtons = () => {
    return (
      <div className="button-grid">
        <div className="numeric-buttons">
          {buttonLayout.map((row, rowIndex) => (
            <div key={rowIndex} className="button-row">
              {row.map((value, index) => (
                <Button key={index} label={value} onClick={() => handleButtonClick(value)} />
              ))}
            </div>
          ))}
        </div>
        <div className="function-buttons">
          {functionLayout.map((value, index) => (
            <div key={index} className="button-column">
              <Button label={value} onClick={() => handleButtonClick(value)} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="calculator">
      <div className="display">{formula || result}</div>
      {renderButtons()}
    </div>
  );
};

export default Calculator;
