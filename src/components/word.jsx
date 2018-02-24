import React, {Component} from 'react';

class Word extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='word-container'>
        <div className='word'>
          <span className='word-value'>{this.props.value}</span>
        </div>
      </div>
    );
  }
}

export default Word;
