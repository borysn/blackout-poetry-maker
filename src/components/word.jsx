import React, {Component} from 'react';

class Word extends Component {
  render() {
    return (
      <div id='word-container' className='section-container'>
        <div className='section-title'>
          <span>2: edit text</span>
        </div>
        <div id='word'>
          edit text
        </div>
      </div>
    );
  }
}

export default Word;
