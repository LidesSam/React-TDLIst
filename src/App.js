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
        list:[]
    }
  }
  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
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


          <ItemTDL/>

          </React.Fragment>
          

        </Router>

      
      
          <h3>To do Liast</h3>
          <br />
          
          {/* add item */}
          <input
            type="text"
            placeholder="NEW ITEM"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
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
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button onClick={() => this.deleteItem(item.id)}>
                    delete
                  </button>
                </li>
              );
            })}
          </ul>

      
    </div>
    
  );

          }
}

export default App;
