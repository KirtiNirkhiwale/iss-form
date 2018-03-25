import React, {Component} from 'react';

class TextField extends Component {
  render() {
    var text = this.props.text || 'Nothing yet'
    return (
      <div>
        <p>{ text }</p>
      </div>
    )
  }
}
export default TextField;