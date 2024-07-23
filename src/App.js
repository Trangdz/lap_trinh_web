import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponents from './components/MyComponents';
import React from 'react';
// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
   
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

class App extends React.Component{
  
     state = {
      name:"Trang",
      address:"Thanh Hoa",
      age: 21
    };
  
  handleclick = (event)=>{
    console.log(">> click me my button");
    console.log("My name is ", this.state.name)
    this.setState({
      name: "Eric"
    })
  };
   handleOnMouse = (event)=>
  {
    console.log("My name is Mouse");
    console.log(this.state)
  };
  render()
  {
    
    return(
      <div>
        my name  is {this.state.name}
        <MyComponents></MyComponents>
        <button onClick={this.handleclick}>abc</button>
        <button onMouseOver={this.handleOnMouse}>xyz</button> 
      </div>
    );
  }
}
export default App;
