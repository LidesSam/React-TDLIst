import React from 'react';


import '../App.css';

class ItemTDL extends React.Component {


    constructor(props) {
        super(props);
    
        this.state = {
            ID:props.ID,
            inEdit: false,
            value: props.value
            

        }
        
    }


    updateValue(value) {
        this.state.value=value
        alert("hello")
    }

    inEditMode() {

        return !this.state.inEdit;
    }

    handleClick() {

    }
    enabledEditMode() {

        this.state.inEdit = true;
  
        var inputbox = document.getElementById("valueInput");
        inputbox.disabled = !this.state.inEdit
    }


    render() {
        return (


            <div className="itemtdl">

                <input type="checkbox" id="cbox" value="first_checkbox"></input>
                <span>{this.state.ID} </span>
                <input id="valueInput" type="text" placeholder="TDLItem" 
                
                disabled={this.inEditMode()}
                  
                   onChange ={e => this.updateValue( e.target.value)}
                   
                   >
                
                </input>

                <button className="editBtn"
                    onClick={() => this.enabledEditMode()}
                >
                    edit
                </button>

                <button className="deleteBtn">
                    delete
                </button>
                
            </div>


        )
    }

    
}

export default ItemTDL;
