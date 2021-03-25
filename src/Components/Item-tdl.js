import React,{Component} from 'react';



import '../App.css';

class ItemTDL extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            value: props.value,
            callbackDel:  props.callbackDel,
            callbackEdit:  props.callbackEdit,
            inEdit: false
           
            
        }
    
    }

    updateValue(Value) {
        if(this.state.inEdit){
         this.state.value = Value
        }
    }

    inEditMode() {
   
        return this.state.inEdit;
    }

    handleClick() {

    }

    enabledEditMode() {

        this.state.inEdit = true;
        var vinput=document.getElementById("valueInput"+this.state.id)
        vinput.disabled= !this.state.inEdit
        
    }
    editPressed() {
        if (typeof this.state.callbackEdit == 'function') {
            console.log("v1:"+this.state.value)
            this.state.value= this.state.callbackEdit(this.state.id)
            var vinput=document.getElementById("valueInput"+this.state.id)
            vinput.value= this.state.value
            
        } else {
           console.log("no set edit press")
        }
        

    }

    deleteitself() {
        if (typeof this.state.callbackDel == 'function') {
           
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
                <textarea id = {"valueInput"+this.state.id} type="text" placeholder="TDLItem"
                   
                    disabled={true}

                    onChange={e => this.updateValue(e.target.value)}
                    value={this.state.value}
                >
                    
                </textarea>

                {/*<button className="editBtn"
                    onClick={() => this.enabledEditMode()}
                >
                    edit
        </button>*/}
                <button className="editBtn"
                    onClick={() => this.editPressed()}
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
