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
            value: props.value,
            callbackDel:  props.callbackDel,
            inEdit: false
           
            
        }
    
    }

    updateValue(Value) {
        this.state.value = Value
        
    }

    inEditMode() {
   
        return !this.state.inEdit;
    }

    handleClick() {

    }
    enabledEditMode() {

        this.state.inEdit = true;
        var vinput=document.getElementById("valueInput"+this.state.id)
        vinput.disabled= !this.state.inEdit
        
    }
    deleteitself() {
        if (typeof this.state.callbackDel == 'function') {
            console.log("tdl:"+this.state.id)
            this.state.callbackDel(this.state.id)
        } else {
           console.log("no set delete callback")
        }
        

    }

    render() {
        return (


            <div className="itemtdl">

                <input type="checkbox" id="cbox" value="first_checkbox"></input>
                <span>{this.state.id} </span>
                <input id = {"valueInput"+this.state.id} type="text" placeholder="TDLItem"
                   
                    disabled={this.inEditMode()}

                    onChange={e => this.updateValue(e.target.value)}
                    value={this.state.value}
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
