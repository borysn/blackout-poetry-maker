import React, {Component} from 'react';
import Poem from './poem.jsx';
import Word from './word.jsx';

class EditText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const words = this.props.poem.tokenizedText.map((w, i) => {
      return (<Word key={i} value={w}/>);
    });

    return (
      <div id='edittext-container' className='section-container'>
        <div className='section-title'>
          <span>2: edit text</span>
        </div>
        <div id='edittext'>
          <Poem tokenizedText={this.props.poem.tokenizedText}/>
          {words}
        </div>
      </div>
    );
  }
}

export default EditText;
