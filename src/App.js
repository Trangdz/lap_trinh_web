import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponents from './components/MyComponents';
import Header from './components/Header/Header';
import React from 'react';
import { Link, Outlet } from "react-router-dom";
const App = () => {

  return (

    <div className="app-container">
      <Header></Header>
      <div className='header-container'>
        <Header></Header>
      </div>


      <div className='main-container'>
        <div className='sidenav-container'>

        </div>
        <div className='app-content'>
         <Outlet></Outlet>
        </div>
      </div>

        


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
