import React, {Component} from 'react';

class EditText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='edittext-container' className='section-container'>
        <div className='section-title'>
          <span>2: edit text</span>
        </div>
        <div id='edittext'>
          {this.props.poem.words}
        </div>
      </div>
    );
  }
}

export default EditText;
