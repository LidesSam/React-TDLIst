import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
import ItemTDL from '../src/Components/Item-tdl.js';


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';


{/*
  
import './App.css';
import NavBar from '../src/components/Navbar.js';
import Header from '../src/components/MyHeader.js'
import Home from '../src/components/Pages/Home';
import fullpage from '../src/components/Pages/FullPage';
import clock from '../src/components/Clock'
import folderTDL from '../src/Components/Item-tdl';
import listTDL from '../src/Components/Item-tdl';

import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';*/}





class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
        newitemdata:"",
        list:[], 
        lastId:0
    }
  }
  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
    
  }

  addItem() {

    const newlastId=    this.state.lastId+1;
    // create a new item with unique id
    const newItem = {
      id: newlastId,
      value: this.state.newitemdata
    }



    alert(newItem.id+" "+newItem.value+" "+this.state.lastId)
  // create a new item with unique id


  //  var newItem = new ItemTDL(this.LastId,this.value);

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newitemdata: "",
      lastId:newlastId
    });
  }


  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }

  render() {
    return (
    <div className="App">
      <Router>
  
          <React.Fragment>


          <ItemTDL ID ="-1" value="cal" />

          </React.Fragment>
          

        </Router>

      
      
          <h3>To do List</h3>
          <br />
          
          {/* add item */}
          <input
            type="text"
            placeholder="NEW ITEM"
            value={this.state.newItem}
            onChange={e => this.updateInput("newitemdata", e.target.value)}
          />
          
          {/* add btn */}
          <button
            onClick={() => this.addItem()}
          >
              "NEW ITEM"
          </button>

          
          {/* add folder */}
          <button>
              "NEW folder"
          </button>


          <br /> <br />
          <div className="centerbox">
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <ItemTDL ID={item.id} value={item.value} parent = {this}/>
                </li>
              );
            })}
          </ul>
          </div>

      
    </div>
    
  );

          }
}

export default App;
