import React, {Component} from 'react';

class InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poem: this.props.poem
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    this.props.onTextChange(e.target.value);
  }

  render() {
    return (
      <div id='inputtext-container' className='section-container'>
       <div className='section-title'>
         <span>1: input text</span>
       </div>
       <div id='inputtext'>
         <textarea id='inputtextarea' rows='13' cols='43' onChange={this.handleTextChange}></textarea>
       </div>
      </div>
    );
  }
}

export default InputText;
