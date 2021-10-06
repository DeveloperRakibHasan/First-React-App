import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Hello name='Rakib' age='21'></Hello>
        <Welcome  name='Rakib 1' age="54" ></Welcome>
   
      </header>
    </div>
  );
}

export default App;
