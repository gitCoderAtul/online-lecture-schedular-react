 
import './App.css'; 
import SidebarNav from './components/SidebarNav';
import MainComponent from './components/MainComponent';
import Header from './components/Header';

function App() {
 
  return (
    < > 
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
       <Header></Header>  
        <SidebarNav></SidebarNav>
        <MainComponent></MainComponent>
    </ >
  );
}

export default App;
