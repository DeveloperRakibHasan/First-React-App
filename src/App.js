import logo from './logo.svg';
import './App.css';
import Hello from './mycomponents/Hello'
import Welcome from './mycomponents/Welcome'
import './mycomponents/Newdom'
import Newdom from './mycomponents/Newdom';
import Refresh from './mycomponents/Refresh';
// import FindDomeNote from './mycomponents/FindDomeNote';
import Form from './mycomponents/Form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <Hello name='Rakib' age='21'></Hello>
        <Welcome  name='Rakib 1' age="54" ></Welcome>
        <Refresh></Refresh>
        <Newdom></Newdom>
        {/* <FindDomeNote></FindDomeNote> */}
    <Form></Form>
      </header>
    </div>
  );
}

export default App;
