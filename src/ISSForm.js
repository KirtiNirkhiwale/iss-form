import React, {Component} from 'react';
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';
import SortableFields from './SortableFields'
import TextField from './TextField';
import TextInput from './TextInput';

const SortableItem = SortableElement(({value}) =>
<div className="col-md-3 col-lg-3 mb-4 iss-col" >
    <SortableFields value={value} />
</div>
);

const SortableList = SortableContainer(({ items }) => {
  return (
    <div  className="row">
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
 state = {
    items: ['Event', 'Event Marker', 'Priority', 'New Element'],
    userIsEditing: false,
    colHeading: 'When'
 };
 onSortEnd = ({oldIndex, newIndex}) => {
    this.setState({
        items: arrayMove(this.state.items, oldIndex, newIndex),
    });
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
    return (
        <div className="px-5 py-5 iss-form">
            <form>
                <label htmlFor="description" className="desc pb-2"> Description </label>
                <textarea className="form-control rounded-0" id="description" />
                <div>
                    <div className="pt-4">{ heading }</div>
                    <SortableList items={this.state.items} onSortEnd={this.onSortEnd} 
                    axis="xy"/>
                </div>
            </form>
        </div>);
  }
 }

 export default SortableComponent;