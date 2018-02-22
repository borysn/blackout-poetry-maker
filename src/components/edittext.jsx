import React, {Component} from 'react';

class EditText extends Component {
  render() {
    return (
      <div id='edittext-container' className='section-container'>
        <div className='section-title'>
          <span>2: edit text</span>
        </div>
        <div id='edittext'>
          edit text
        </div>
      </div>
    );
  }
}

export default EditText;
