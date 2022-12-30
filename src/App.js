import { useState } from 'react';
import './App.css';

function App() {
  const [result, setResult] = useState(0)
  const [value, setValue] = useState()

  let cache = {};

  const fibonacci = (n) => {
    if (n <= 1) {
      return n;
    }
    if(cache[n]) {
      return cache[n];
    }
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;
    return result;
  }

  const handleChange = (e) => {  
    e.preventDefault(); 
    setValue(e.target.value);  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = fibonacci(value);
    setResult(result);
  }

  return (
    <div className="App">
      <h1>Fibonacci Calculator</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="value">Enter the total number: </label>
        <input id="value" type="number" step="1" min="0" value={value} onChange={handleChange}/>
        <input type="submit" value="Calculate"/>
      </form>
      <div>
        <p>Result: {result}</p>
        <p>Katarzyna Kurek</p>
        <p>Group 1.3</p>
      </div>
    </div>
  );
}

export default App;
