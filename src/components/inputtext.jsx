import React, {Component} from 'react'

class InputText extends Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
  }

  handleTextChange(e) {
    setTimeout(1000)
    this.props.onTextChange(e.target.value)
  }

  render() {
    return (
      <div id='inputtext-container' className='section-container'>
       <div className='section-title'>
         <span>1: input text</span>
       </div>
       <div id='inputtext'>
         <textarea id='inputtextarea' rows='10' cols='40' 
           onChange={this.handleTextChange}>
         </textarea>
       </div>
      </div>
    )
  }
}

export default InputText
