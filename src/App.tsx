import { useState } from 'react';
import './index.css'; 
import Input from "./components/Input";
import Button from './components/Button';
import Screen from './components/Screen';

function App() {
  const [firstInput, setFirstInput] = useState<string>("");
  const [secondInput, setSecondInput] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const addNumbers = (a: string, b: string) => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    setResult(num1 + num2);
  };

  const subtractNumbers = (a: string, b: string) => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    setResult(num1 - num2);
  };

  const multiplyNumbers = (a: string, b: string) => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    setResult(num1 * num2);
  };

  const divideNumbers = (a: string, b: string) => {
    const num1 = parseInt(a);
    const num2 = parseInt(b);
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      setResult(NaN); // To handle division by zero
    }
  };

  const clearInputs = () => {
    setFirstInput("");
    setSecondInput("");
    setResult(null);
  };

  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="input-container">
          <Input
            value={firstInput}
            onChange={setFirstInput}
            placeholder="First input"
            className="input"
          />
          <Input
            value={secondInput}
            onChange={setSecondInput}
            placeholder="Second input"
            className="input"
          />
          {/* Clear button */}
          <Button
            label="Clear"
            onClick={clearInputs}
            className="clear-btn"
          />
        </div>

        {/* Other operation buttons */}
        <Button label="Addition (+)" className='Operation-btn' onClick={() => addNumbers(firstInput, secondInput)} />
        <Button label="Subtract (-)" className='Operation-btn' onClick={() => subtractNumbers(firstInput, secondInput)} />
        <Button label="Multiply (×)" className='Operation-btn' onClick={() => multiplyNumbers(firstInput, secondInput)} />
        <Button label="Division (÷)" className='Operation-btn' onClick={() => divideNumbers(firstInput, secondInput)} />

        <Screen result={result} className='Result' />
      </div>
    </div>
  );
}

export default App;
