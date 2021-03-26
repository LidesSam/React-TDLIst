import React, { Component } from 'react';



import '../App.css';

class ItemTDL extends Component {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            value: props.value,
            callbackDel: props.callbackDel,
            callbackEdit: props.callbackEdit,
            callbackCheck: props.callbackCheck,

            checked: props.checked,

            inEdit: false


        }



    }

    //obsolete.
    updateValue(Value) {
        if (this.state.inEdit) {
            this.state.value = Value
        }
    }

    inEditMode() {

        return this.state.inEdit;
    }
    //uset to set the inital state oof the checkbox
    getChecked() {
        return this.state.checked
    }

    /**
     * call calback check if was set
     * and set
     */
    checkToggle(){
       

        //asing checkbox value to a internal prop
        this.state.checked = document.getElementById("cbox" + this.state.id).checked
   
        if (typeof this.state.callbackCheck == 'function') {
   
            //callbak
          this.state.callbackCheck(this.state.id,this.state.checked)


        } else {
            console.log("no set check callback")
        }
        //redundant
       // 
       // cbox.checked =this.state.checked;

    }

    handleClick() {

    }

    //enabled edit mode
    // obsolete for the use of edit callback
    // for the setup at being in a list of the parent don't allow to change text directly
    enabledEditMode() {

        this.state.inEdit = true;
        var vinput = document.getElementById("valueInput" + this.state.id)
        vinput.disabled = !this.state.inEdit

    }

    //call edit callback if set
    editPressed() {
      
        if (typeof this.state.callbackEdit == 'function') {
            console.log("v1:" + this.state.value)
            this.state.value = this.state.callbackEdit(this.state.id)
            var vinput = document.getElementById("valueInput" + this.state.id)
            vinput.value = this.state.value
            console.log("endedit:"+this.state.value)

        } else {
            console.log("no set edit press")
        }


    }

    //call delete callback if set
    deleteitself() {
        if (typeof this.state.callbackDel == 'function') {

            this.state.callbackDel(this.state.id)
        } else {
            console.log("no set delete callback")
        }


    }

    //return render(used to draw in parent)
    render() {
        return (


            <div className="itemtdl">

                <input type="checkbox"
                    id={"cbox" + this.state.id}
                    defaultChecked={this.getChecked()}
                    onChange={e => this.checkToggle()}
                >

                </input>
                <span>{this.state.id} </span>
                <textarea className="txtarea" id={"valueInput" + this.state.id} type="text" placeholder=""
                    disabled={true}
                    onChange={e => this.updateValue(e.target.value)}
                    value={this.state.value}
                >

                </textarea>
                {/* edit button */}
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
