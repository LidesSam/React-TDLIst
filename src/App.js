import logo from './logo.svg';
import './App.css';

import React,{Component} from 'react';
import ItemTDL from '../src/Components/Item-tdl.js';


import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

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
    //const uniqueid= 1 + Math.random(),
    // create a new item with unique id
    const newItem = {
      id: newlastId,
      value: this.state.newitemdata
    }


  //  console.log("lid:"+newlastId)
    var  newitemtdl = React.createElement(ItemTDL,{id:newlastId,value:this.state.newitemdata ,callbackDel:this.deleteItem.bind(newlastId)},null)
    //new ItemTDL(newlastId,this.state.newitemdata,this.deleteItem.bind(newlastId))
   

   // alert(newItem.id+" "+newItem.value+" "+this.state.lastId)
  // create a new item with unique id


  //  var newItem = new ItemTDL(this.LastId,this.value);

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    //list.push(newItem);
    list.push(newitemtdl )
    // update state with new list, reset the new item input
    this.setState({
      list,
      newitemdata: "",
      lastId:newlastId
    });
  }


  deleteItem(id) {
    // copy current list of items
    console.log("delete:"+id)
    /*const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });*/
  }


  render() {
    return (
    <div className="App">
      <Router>
  
          <React.Fragment>

        {/*to fast test some freatures and <ItemTDL id ="-1" value="cal" />*/}
          

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
                  {item}
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
