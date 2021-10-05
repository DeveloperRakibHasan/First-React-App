import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Hello name='Rakib' age='21'></Hello>
        <Hello name='Refat' age='55'></Hello>
        <Hello name='Rahul' age='5'></Hello>
        <Hello name='Rohim' age='58'></Hello>

        <Welcome  name='Rakib 1' ></Welcome>
        <Welcome  name='Rakib 2'></Welcome>
        <Welcome  name='Rakib 3'></Welcome>
       
      </header>
    </div>
  );
}

export default App;
