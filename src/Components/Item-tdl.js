import React from 'react';


import '../App.css';

class ItemTDL extends React.Component {
/*

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            inEdit: false,
            value: props.value,
            callbackDel:  props.callbackDel

        }

    }*/
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            inEdit: false,
            value: props.value,
            callbackDel:  props.callbackDel
            
        }
        
    }

    updateValue(value) {
        this.state.value = value
        
    }

    inEditMode() {

        return !this.state.inEdit;
    }

    handleClick() {

    }
    enabledEditMode() {

        this.state.inEdit = true;

        var inputbox = document.getElementByid("valueInput");
        inputbox.disabled = !this.state.inEdit
    }
    deleteitself() {
        if (typeof this.state.callbackDel == 'function') {
            this.state.callbackDel()
        } else {
           console.log("no set delete callback")
        }
        

    }

    render() {
        return (


            <div className="itemtdl">

                <input type="checkbox" id="cbox" value="first_checkbox"></input>
                <span>{this.state.id} </span>
                <input id="valueInput" type="text" placeholder="TDLItem"

                    disabled={this.inEditMode()}

                    onChange={e => this.updateValue(e.target.value)}

                >

                </input>

                <button className="editBtn"
                    onClick={() => this.enabledEditMode()}
                >
                    edit
                </button>

                <button className="deleteBtn" onClick={() => this.deleteitself()}>
                    delete
                </button>

            </div>


        )
    }


}

export default ItemTDL;
