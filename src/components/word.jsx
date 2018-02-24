import React, {Component} from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      selected: false
    }
  }

  render() {
    return (
      <div id='word-container'>
        <div id='word'>
          <span id='word-value'>{this.state.value}</span>
        </div>
      </div>
    );
  }
}

export default Word;
