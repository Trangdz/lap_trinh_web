import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponents from './components/MyComponents';
import Header from './components/Header/Header';
import React  from 'react';
import { Link } from "react-router-dom";
const App = () => {
  
  return (
   
    <div className="app-container">
      <Header></Header>
       <div>test link</div>
       <button >
         <Link to="/user">go to user page</Link>
         </button>
       <button><Link to="admin">go to user page</Link></button>

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
