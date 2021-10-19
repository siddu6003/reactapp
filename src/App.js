import logo from './logo.svg';
import './App.css';
import List from './List';

const name='siddu';
const num=numbergen();


const styling = {
  color: 'blue',
  fontSize:'20px',
  border:"1px solid black",
}
function numbergen() {
  return Math.floor(Math.random()*1000);
}
function App() {
return (<List />)
    
}


export default App;