import React, {Component} from 'react'

class InputText extends Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.setText = this.setText.bind(this)
  }

  handleTextChange(e) {
    this.props.onTextChange(e.target.value)
  }

  setText(text) {
    document.getElementById('inputtextarea').value = text
  }

  handleClear() {
    this.props.onClear()
    this.setText('')
  }

  render() {
    return (
      <div id='inputtext-container' className='section-container'>
        <div className='section-title'>
          <span className='section-title-num'>1</span>
          <span className='section-title-text'>input text</span>
        </div>
        <div id='inputtext'>
          <textarea id='inputtextarea' placeholder='paste here' 
            onChange={this.handleTextChange} ></textarea>
        </div>
        <div className='controls'>
          <div className='control' onClick={this.handleClear}>
            <span className='control-text'>clear</span>
          </div>
        </div>
      </div>
    )
  }
}

export default InputText
