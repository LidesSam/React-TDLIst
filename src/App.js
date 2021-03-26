//import logo from './logo.svg';

import './App.css';

import React, { Component } from 'react';
import ItemTDL from '../src/Components/Item-tdl.js';
import { db } from '../src/Components/firebase.js'

import { BrowserRouter as Router } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const collectionName ="test"

class App extends Component {


  
  constructor(props) {
    super(props);

    this.state = {
      newitemdata: "",
      list: [],
      lastID: 0
    }
  }

  componentDidMount() {
    console.log("mounted")
    this.reloaddatabase()

  }

  //clear list and load database from firebase
  //mostly for test propourse
  reloaddatabase() {
    this.state = {
      newitemdata: "",
      list: [],
      lastID: 0
    }
    //used to set the high id as lastid
    let higgertid = 0

    //order by id, if not cause a error that allow duplicates id
    db.collection(collectionName).orderBy("id")
      .get()
      .then(snapshot => {
        //console.log(snapshot)
        const drtest = []
        //load the each document in doc on per time
        snapshot.forEach(doc => {
          //pass data of doc to a const to be added to drtest
          const data = doc.data()
          drtest.push(data)
          if (data.id > higgertid) {
            higgertid = data.id
          }

          //higerid+1(if not duplicate the last id in the first addition of a item)
          this.setState({ list: drtest, lastID: higgertid });
          console.log("lastid:" + this.state.lastID + " dcheck" + data.checked)

        });
      })
      .catch(error => console.log(error))


  }




  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }


  updateNewItemData(Value) {
    this.state.newitemdata = Value

  }
  //it become redundant becuse of reloaddatabase
  //but gonna be used until added realtime freature with firebase
  addItem() {
    // create a new item with unique id
    let newlastID = this.state.lastID + 1
    console.log(this.state.newitemdata)
    const newItem = {
      id: newlastID,
      value: this.state.newitemdata,
      checked: false
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
      lastID: newlastID
    });

    db.collection(collectionName)
      .add({


        id: newItem.id,
        value: newItem.value,
        checked: false
      }
      )
    //clear input box
    var vinput = document.getElementById("itemvalueinput")
    vinput.value = ""

  }

  //cloned from additem
  LoadItem(lid, lvalue) {

    let newlastID = lid
    console.log(this.state.newitemdata)
    const newItem = {
      id: lid,
      value: lvalue
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newitemdata: "",
      lastID: lid
    });
    //clear input box
    var vinput = document.getElementById("itemvalueinput")
    vinput.value = ""

  }



  /**
   * Delete a item from the veiw and from firebase
   * @param {} id 
   */
  deleteItem(id) {



    //delete from firebase
    //get the registry with the same id
    //note: should improved the edit with this code.
    db.collection(collectionName).where("id", "==", id).get()
      .then(querySnapshot => {
        //delete registry
        querySnapshot.docs[0].ref.delete();
      });

    //delete form this
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });

  }

  //to edit value
  editItem(id, value) {

    // promt instead of a Modal(pop-up), simply because was quick to made
    // previst to be change to a modal(pop up) in the near future.
    const auxvalue = value

    let newvalue = prompt("New value ", value)

    //if not chosee cancel in prompt

    if (newvalue == null) {
      console.log("cancel:" + newvalue + " av " + auxvalue + " v " + value)
      newvalue = auxvalue
    }


    db.collection(collectionName).orderBy("id")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          //pass data of doc to a const to be added to drtest
          const data = doc.data()
          //check if the sec id is equal to the ide of the Item-tdl
          if (data.id == id) {
            console.log("finded"+doc.id)
            db.collection(collectionName).doc(doc.id).update({ value: newvalue });
          }

        });
      })

    return newvalue;
  }

  //mod of editItem
  //update checked field
  checkItem(id, value) {

  //  console.log("check" + id+"value:"+value)

    db.collection(collectionName).orderBy("id")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          //pass data of doc to a const to be added to drtest
          const data = doc.data()
          //check if the sec id is equal to the ide of the Item-tdl
          
          //console.log(data.id+" id: "+id)
          if (data.id == id) {
         
            //console.log("finded check:"+value)
            db.collection(collectionName).doc(doc.id).update({ checked: value });
          }

        });
      })
      

  }




  render() {
    return (
      <div className="App" >



        <Router>

          <React.Fragment>

            {/* 
       <ItemTDL />
 */}


          </React.Fragment>


        </Router>



        <h3>Thing To Do </h3>
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
          add
          </button>


        <button onClick={() => this.reloaddatabase()}>
          reload database
          </button>

        {/* add folder 
          <button>
              "NEW folder"
          </button>
        */}

        <br /> <hr /><br />
        <ul>
          {this.state.list.map(item => {
            return (

              <li key={item.id}>

                <ItemTDL id={item.id}
                  checked={item.checked}
                  value={item.value}
                  callbackDel={() => this.deleteItem(item.id)}
                  callbackEdit={() => this.editItem(item.id, item.value)}
                  callbackCheck={() => this.checkItem}

                />

              </li>
            );
          })}
        </ul>


      </div>

    );

  }
}

export default App;
