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
         <span className='section-title-num'>1</span>
         <span className='section-title-text'>input text</span>
       </div>
       <div id='inputtext'>
         <textarea id='inputtextarea' onChange={this.handleTextChange}></textarea>
       </div>
      </div>
    )
  }
}

export default InputText
