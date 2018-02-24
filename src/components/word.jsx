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
      <div className='word-container'>
        <div className='word'>
          <span className='word-value'>{this.state.value}</span>
        </div>
      </div>
    );
  }
}

export default Word;
