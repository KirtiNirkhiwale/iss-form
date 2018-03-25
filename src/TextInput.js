import React, {Component} from 'react';

class TextInput extends Component {
    handleInput = () => {
        let input = this.refs.new_heading;
        this.props.saveInput(input.value);
        input.value = ''
    } 
    render() {
        return (
          <div className="form-group row">
            <div className="col-8">
                <input 
                  type="text" 
                  defaultValue={this.props.currentValue}
                  className="form-control"
                  ref="new_heading"
                />
            </div>
            <div className="col-4"><button className="btn btn-primary iss-button btn-sm" onClick={ this.handleInput }>Save</button></div>
          </div>
        )
    }
}

export default TextInput;