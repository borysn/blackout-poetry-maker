import React, {Component} from 'react';

class InputText extends Component {
  render() {
    return (
      <div id='inputtext-container' className='section-container'>
       <div className='section-title'>
         <span>1: input text</span>
       </div>
       <div id='inputtext'>
         <textarea rows='13' cols='43'></textarea>
       </div>
      </div>
    );
  }
}

export default InputText;
