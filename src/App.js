import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  const [itens, setItens] = useState([]);

    const addItem = () => {
      setItens([...itens, {
        id: itens.length,
        value: Math.floor(Math.random() * 10) + 1
      }])
    }
  return (
    <div className="App">
      <header className="App-header">
        <p>What time is it?</p>
        <p>What number was added?</p>
        <button onClick={addItem}>Add a number</button>
        <ul>
          {itens.map(iten =>(
              <li key={iten.id}>{iten.value}</li>
          ))}
        </ul>

        
      </header>
      <button>Show hours</button>
    </div>
  );
}

export default App;
