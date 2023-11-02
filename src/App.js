import Header from './components/Header';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='app'>
      <Header name="Anna" color="purple"/>
      <Main userName="Mack" num={5}/>
      <Sidebar greet="Howdy"/>
    </div>
  )
}

export default App;
