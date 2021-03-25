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
        list:[
          {
            id: "0" ,
            value:"aloha"
          }
        ],
        lastID:0
    }
  }
  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  updateNewItemData(Value){
    this.state.newitemdata=Value
  }

  addItem() {
    // create a new item with unique id
    let newlastID = this.state.lastID+1
    console.log(this.state.newitemdata)
    const newItem = {
      id:newlastID,
      value: this.state.newitemdata
    };
    console.log(newItem.value)
    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newitemdata: "",
      lastID:newlastID
    });
    //clear input box
    var vinput=document.getElementById("itemvalueinput")
    vinput.value=""

  }

  deleteItem(id) {
    
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });

  }

  editItem(id) {
    console.log("edit" +id)

    // promt instead of a Modal(pop-up), simply because was quick to made
    // previst to be change to a modal(pop up) in the near future.
    const newvalue=prompt("New value ")
    return newvalue;
  
  

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
            id="itemvalueinput"
            type="text"
            placeholder="Write here"
            value={this.state.newItem}
            onChange={e => this.updateNewItemData(e.target.value)}
          />
          
          {/* add btn */}
          <button
            onClick={() => this.addItem()}
          >
              "New"
          </button>

          
          {/* add folder 
          <button>
              "NEW folder"
          </button>
        */}

          <br /> <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  
                  <ItemTDL id ={item.id} value ={item.value} callbackDel ={()=>this.deleteItem(item.id)} callbackEdit={()=>this.editItem(item.id)}/>
                  
                </li>
              );
            })}
          </ul>

      
    </div>
    
  );

          }
}

export default App;
