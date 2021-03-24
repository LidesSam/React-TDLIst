import React from 'react';


import '../App.css';

class ItemTDL extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            inEdit: false,
            value: "item"
        }


    }
    updateValue() {

    }

    inEditMode() {

        return this.inEdit;
    }

    handleClick() {

    }
    enabledEditMode() {
        this.inEdit = true;

    }


    render() {
        return (


            <div className="itemtdl">

                <input type="checkbox" id="cbox1" value="first_checkbox"></input>
                <input type="text" placeholder="TDLItem" disabled={this.inEditMode()}
                    onChange={e => this.updateValue()}>

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
