import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponents from './components/MyComponents';
import React  from 'react';
const App = () => {
  
  return (
   
    <div className="app-container">
    hello world
    
    </div>
  );
}

// class App extends React.Component{
  
    
//   render()
//   {
    
//     return(
//       <div>
//        <MyComponents></MyComponents>
//       </div>
//     );
//   }
// }
export default App;
