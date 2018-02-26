import React, {Component} from 'react'

class InputText extends Component {
  constructor(props) {
    super(props)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handlePaste = this.handlePaste.bind(this)
    this.setText = this.setText.bind(this)
  }

  componentDidMount() {
    document.getElementById('inputtextarea').focus()
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

  handlePaste(e) {
    this.props.onPaste(e.target.value)
  }

  render() {
    return (
      <div id='inputtext-container' className='section-container'>
        <div className='section-title'>
          <span className='section-title-num'>1</span>
          <span className='section-title-text'>input text</span>
        </div>
        <div id='inputtext'>
          <textarea autofocus id='inputtextarea' placeholder='paste here'
            onPaste={this.handlePaste} onChange={this.handleTextChange} >
          </textarea>
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
