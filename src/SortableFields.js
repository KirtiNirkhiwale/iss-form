import React, {Component} from 'react';
import TextField from './TextField';
import TextInput from './TextInput';
import ReactModel from './ReactModel';

class SortableFields extends Component {
    constructor(props) {
        super(props);
        this.state = {
            colHeading: this.props.value,
            userIsEditing: false,
            newfield: false,
            isSelect: false,
            showModal:false
        }
    }
    toggleEditing = () => {
        let userIsEditing = !this.state.userIsEditing
        this.setState({
          userIsEditing: userIsEditing
        })
    }

    saveInput = (input) => {
        this.setState({
          colHeading: input
        },
        () => this.toggleEditing());
    }

    addNewField = (e) => {
        e.preventDefault();
        this.setState({
          showModal: true
        });
    } 

    cancelModal = () => {
        this.setState({
          showModal: false
        });
    }

    removeNewField = () => {
        this.setState({    
            newfield: false
        });
    }

     selectModal = (props) => {
        if(props === 'selectField') {
            this.setState({        
                showModal: false,
                isSelect: true,
                newfield: true
            });
        } else if(props === 'textField') {
            this.setState({        
                showModal: false,
                isSelect: false,
                newfield: true
            });
        } else {
            this.setState({    
                isSelect: false,    
                showModal: false,            
                newfield: false
            });
        }
    }

    render() {
        let userIsEditing = this.state.userIsEditing;
        let heading;
        if (userIsEditing) {
            heading = (
                <div>
                    <TextInput 
                      saveInput={ this.saveInput }
                      currentValue = {this.state.colHeading}
                      toggleEditing={ this.toggleEditing }
                     />           
                </div>    
            ) 
        } else {
            heading = (
                <div>
                    <div className="px-3 d-inline-block"><TextField text={ this.state.colHeading } /> </div>
                    <div className="d-inline-block"><button className="btn btn-primary iss-button btn-sm" onClick={ this.toggleEditing }>Edit</button> </div>                   
                </div>
            )
        }
        
        if(this.props.value !== 'New Element') {
            return (
                <div className="main-field">
                    <div> { heading } </div>                  
                    <div>
                        <select className="select-iss mx-3">
                            <option value="1">Option1</option>
                            <option value="2">Option2</option>
                            <option value="3">Option3</option>
                            <option value="4">Option4</option>
                            <option value="5">Option5</option>
                        </select>
                    </div>
                </div>
            );
        } else if(! this.state.newfield) {
            return (
                <div className="main-field text-center add-new-field">
                    {  this.state.showModal ?
                        <ReactModel popUpTag="modalFields" title="Select Input Type" confirm="SELECT" cancel="CANCLE" cancelModal={ this.cancelModal } selectFieldType={ this.selectModal }
                                    isOpen={ this.state.showModal }/>
                        : ''
                    }
                    <button className="add-new-btn" onClick={(e) => this.addNewField(e) }>+ Add New Element</button>
                </div>
            );

        } else {
            return (
                <div className="main-field">
                    <div className="row">
                        <div className="col-md-8 col-lg-8"> { heading } </div>
                        <div className="col-md-4 col-lg-4"> <button className="btn btn-primary iss-button btn-sm"  onClick={ this.removeNewField }>Remove</button> </div>
                    </div>
                    <div>
                        { this.state.isSelect ?
                            <select className="select-iss mx-3">
                                <option value="1">Option1</option>
                                <option value="2">Option2</option>
                                <option value="3">Option3</option>
                                <option value="4">Option4</option>
                                <option value="5">Option5</option>
                            </select>
                            :
                            <input className="text-iss mx-3" type="text" />

                        }        
                    </div>
                </div>  
            );
        }
   }
 }

 export default SortableFields;